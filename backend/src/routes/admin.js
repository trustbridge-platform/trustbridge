import { Router } from "express";
import { listAllUsers, listAllCampaigns, deactivateCampaign, listAllTransactions } from "../models/admin.js";
import { adminOnly } from "../middleware/admin.js";

const router = Router();

router.get("/stats", adminOnly, async (req, res) => {
  try {
    const users = listAllUsers();
    const campaigns = listAllCampaigns();
    const transactions = listAllTransactions();
    const totalDonations = transactions
      .filter(t => t.type === "donation")
      .reduce((sum, t) => sum + Number(t.amount || 0), 0);
    res.json({
      users: users.length,
      campaigns: campaigns.length,
      donations: totalDonations,
      transactions: transactions.length,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to load stats" });
  }
});

router.get("/campaigns", adminOnly, async (req, res) => {
  try {
    const campaigns = listAllCampaigns();
    res.json({ campaigns });
  } catch (err) {
    res.status(500).json({ error: "Failed to load campaigns" });
  }
});

router.post("/campaigns/:id/deactivate", adminOnly, async (req, res) => {
  try {
    const campaign = deactivateCampaign(Number(req.params.id));
    if (!campaign) return res.status(404).json({ error: "Campaign not found" });
    res.json({ campaign });
  } catch (err) {
    res.status(500).json({ error: "Failed to deactivate campaign" });
  }
});

export default router;