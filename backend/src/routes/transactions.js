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

// Export transactions CSV
router.get("/export/csv", authMiddleware, async (req, res) => {
  try {
    const { type, q } = req.query;
    const result = listTransactions({ user_id: req.user.id, type, q, page: 1, limit: 1000 });
    const transactions = result.transactions || [];
    const header = "Date,Type,Amount,Status,Counterparty\n";
    const rows = transactions.map((tx) => {
      const date = tx.created_at ? new Date(tx.created_at).toISOString() : "";
      const amount = Number(tx.amount || 0);
      const counterparty = tx.type === "donation" ? (tx.campaign_title || `Campaign #${tx.campaign_id}`) : tx.to_address || "";
      return `${date},${tx.type},${amount},${tx.status},"${counterparty.replace(/"/g, '""')}"`;
    });
    const csv = header + rows.join("\n");
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=transactions.csv");
    res.send(csv);
  } catch (err) {
    res.status(500).json({ error: "Failed to export CSV" });
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

// Balance history (derived from payment operations)
router.get("/balance-history/:address", async (req, res) => {
  try {
    const { address } = req.params;
    const { days = 30 } = req.query;
    
    // Get current balance from Horizon
    const balResp = await fetch(`https://horizon.stellar.org/accounts/${address}`);
    if (!balResp.ok) {
      return res.status(500).json({ error: "Failed to fetch account from Horizon" });
    }
    const accountData = await balResp.json();
    const currentBalance = parseFloat(accountData.balances?.find((b: any) => b.asset_type === 'native')?.balance || '0');
    
    // Get payment operations for this address
    const opsResp = await fetch(`https://horizon.stellar.org/accounts/${address}/payments?limit=200&order=desc`);
    if (!opsResp.ok) {
      return res.status(500).json({ error: "Failed to fetch payments from Horizon" });
    }
    const opsData = await opsResp.json();
    const payments = opsData.records || [];
    
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - Number(days));
    
    // Build running balance from payment history
    const sampledPoints = {};
    let runningBalance = currentBalance;
    
    // Process payments in reverse chronological order
    for (const payment of payments) {
      const txDate = new Date(payment.created_at);
      if (txDate < cutoffDate) break;
      
      const dateKey = payment.created_at.split('T')[0];
      const amount = parseFloat(payment.amount || '0');
      
      // If this address sent money, add it back (going backwards in time)
      if (payment.from === address) {
        runningBalance += amount;
      }
      // If this address received money, subtract it (going backwards in time)
      else if (payment.to === address) {
        runningBalance -= amount;
      }
      
      // Store sampled point (one per day)
      if (!sampledPoints[dateKey]) {
        sampledPoints[dateKey] = runningBalance;
      }
    }
    
    // Convert to array sorted by date
    const points = Object.entries(sampledPoints)
      .map(([date, balance]) => ({ date, balance }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    res.json({ 
      history: points,
      currentBalance,
      oldestBalance: points.length > 0 ? points[0].balance : currentBalance,
    });
  } catch (err) {
    console.error("Balance history error:", err);
    res.status(500).json({ error: "Failed to fetch balance history" });
  }
});

export default router;
