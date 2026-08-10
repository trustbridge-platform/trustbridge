import { Router } from "express";
import { listCampaigns, findCampaignById, createCampaign, updateCampaign } from "../models/Campaign.js";
import { createTransaction, listTransactions } from "../models/Transaction.js";
import { authMiddleware } from "../middleware/auth.js";
import { uploadSingle, handleImageUpload } from "../middleware/upload.js";
import { verifyAndSubmit } from "../services/stellar.js";
import { sendDonationConfirmation, sendFundingMilestone } from "../services/email.js";

const router = Router();

// List campaigns
router.get("/", async (req, res) => {
  try {
    const { category, status, q } = req.query;
    const campaigns = listCampaigns({ category, status, q });
    res.json({ campaigns });
  } catch (err) {
    res.status(500).json({ error: "Failed to load campaigns" });
  }
});

// Create campaign
router.post("/", authMiddleware, uploadSingle, handleImageUpload, async (req, res) => {
  try {
    const { title, description, organization, category, goal, image, endDate, urgent } = req.body;
    const campaign = createCampaign({
      title, description, organization, category,
      goal: Number(goal), image: image || null, end_date: endDate,
      urgent: Boolean(urgent), creator_id: req.user.id,
    });
    res.status(201).json({ campaign });
  } catch (err) {
    console.error("Create campaign error:", err);
    res.status(500).json({ error: "Failed to create campaign" });
  }
});

// Donate to campaign
router.post("/:id/donate", authMiddleware, async (req, res) => {
  try {
    const campaign = findCampaignById(Number(req.params.id));
    if (!campaign) return res.status(404).json({ error: "Campaign not found" });
    const { xdr, amount, memo } = req.body;
    if (!xdr) return res.status(400).json({ error: "Signed transaction required" });
    const hash = await verifyAndSubmit(xdr);
    const newRaised = (campaign.raised || 0) + Number(amount);
    const newDonors = (campaign.donors || 0) + 1;
    const newStatus = newRaised >= campaign.goal ? "funded" : campaign.status;
    updateCampaign(campaign.id, { raised: newRaised, donors: newDonors, status: newStatus });
    const tx = createTransaction({
      hash, from: req.user.wallet_address || "unknown",
      to: String(campaign.id), amount: Number(amount),
      type: "donation", status: "confirmed", memo,
      campaign_id: campaign.id, user_id: req.user.id,
    });

    // Email notifications (fire-and-forget; never block the donation response)
    sendDonationConfirmation({ donorId: req.user.id, campaignId: campaign.id, amount: Number(amount), hash }).catch((err) => {
      console.error("[email] donation confirmation failed:", err.message);
    });

    if (newStatus === "funded" && campaign.status !== "funded") {
      // Campaign just reached its funding goal — notify the creator
      const updatedCampaign = findCampaignById(campaign.id);
      if (updatedCampaign.creator_id) {
        sendFundingMilestone({ creatorId: updatedCampaign.creator_id, campaignId: campaign.id }).catch((err) => {
          console.error("[email] funding milestone failed:", err.message);
        });
      }
    }

    res.json({ hash, campaign: findCampaignById(campaign.id), transaction: tx });
  } catch (err) {
    res.status(500).json({ error: "Donation failed: " + err.message });
  }
});

// Single campaign with donations
router.get("/:id", async (req, res) => {
  try {
    const campaign = findCampaignById(Number(req.params.id));
    if (!campaign) return res.status(404).json({ error: "Not found" });
    const donations = listTransactions({ campaign_id: campaign.id });
    res.json({ campaign, donations });
  } catch (err) {
    res.status(500).json({ error: "Failed to load campaign" });
  }
});

export default router;