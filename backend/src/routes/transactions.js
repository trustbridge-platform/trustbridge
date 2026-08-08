import { Router } from "express";
import { listTransactions, createTransaction } from "../models/Transaction.js";
import { authMiddleware } from "../middleware/auth.js";
import { getAccountBalance, verifyAndSubmit } from "../services/stellar.js";

const router = Router();

// Get user's transactions (paginated, filterable by type)
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const { type, q, page, limit } = req.query;
    const result = listTransactions({ user_id: req.user.id, type, q, page, limit });
    res.json({
      transactions: result.transactions,
      pagination: {
        page: result.page,
        limit: result.limit,
        total: result.total,
        totalPages: result.totalPages,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to load transactions" });
  }
});

// Submit signed send transaction
router.post("/send", authMiddleware, async (req, res) => {
  try {
    const { xdr, to, amount, memo, asset } = req.body;
    if (!xdr) return res.status(400).json({ error: "Signed transaction required" });
    const hash = await verifyAndSubmit(xdr);
    const tx = createTransaction({
      hash,
      from: req.user.wallet_address || "unknown",
      to,
      amount: Number(amount),
      asset: asset || "XLM",
      type: "send",
      status: "confirmed",
      memo,
      user_id: req.user.id,
    });
    res.status(201).json({ hash, transaction: tx });
  } catch (err) {
    res.status(500).json({ error: "Transaction failed: " + err.message });
  }
});

// Balance lookup
router.get("/balance/:address", async (req, res) => {
  try {
    const balance = await getAccountBalance(req.params.address);
    res.json({ balance });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch balance" });
  }
});

export default router;