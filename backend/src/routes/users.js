import express from 'express';

const router = express.Router();

// Get user profile
router.get('/profile', (req, res) => {
  res.json({
    id: 1,
    name: 'Demo User',
    email: 'demo@trustbridge.org',
    wallet: 'GABC...XYZ123',
    joinedDate: '2024-01-01',
    totalDonated: 12450,
    campaignsCreated: 3,
  });
});

export default router;