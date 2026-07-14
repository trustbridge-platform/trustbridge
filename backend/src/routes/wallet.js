import express from 'express';

const router = express.Router();

// Get wallet balance
router.get('/balance', (req, res) => {
  res.json({ balance: 12500, currency: 'XLM' });
});

// Get wallet info
router.get('/info', (req, res) => {
  res.json({
    address: 'GABC...XYZ123',
    network: 'testnet',
    sequence: 123456789,
  });
});

export default router;