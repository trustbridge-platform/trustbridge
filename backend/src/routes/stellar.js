import express from 'express';

const router = express.Router();

// Get Stellar network info
router.get('/network', (req, res) => {
  res.json({
    network: 'testnet',
    horizonUrl: 'https://horizon-testnet.stellar.org',
    networkPassphrase: 'Test SDF Network ; September 2015',
  });
});

// Get account info
router.get('/account/:address', (req, res) => {
  res.json({
    address: req.params.address,
    balance: 12500,
    sequence: 123456789,
    flags: {
      authRequired: false,
      authRevocable: false,
    },
  });
});

export default router;