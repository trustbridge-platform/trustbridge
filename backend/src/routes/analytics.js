import express from 'express';

const router = express.Router();

// Get analytics data
router.get('/', (req, res) => {
  res.json({
    totalDonations: 2450000,
    totalDonors: 18920,
    totalCampaigns: 156,
    averageDonation: 129,
    topCategories: [
      { name: 'Food & Water', amount: 850000 },
      { name: 'Disaster Relief', amount: 720000 },
      { name: 'Medical', amount: 540000 },
      { name: 'Education', amount: 340000 },
    ],
    recentActivity: [
      { date: '2024-01-15', donations: 45, amount: 12500 },
      { date: '2024-01-14', donations: 38, amount: 9800 },
      { date: '2024-01-13', donations: 52, amount: 15200 },
      { date: '2024-01-12', donations: 41, amount: 11300 },
      { date: '2024-01-11', donations: 35, amount: 8900 },
    ],
  });
});

export default router;