import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '1.0.0',
    network: process.env.STELLAR_NETWORK || 'testnet',
    memory: process.memoryUsage(),
  });
});

router.get('/ping', (req, res) => {
  res.json({ pong: true, time: Date.now() });
});

export default router;