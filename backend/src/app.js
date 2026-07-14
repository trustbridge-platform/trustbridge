import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import compression from "compression";

import campaignRoutes from "./routes/campaigns.js";
import transactionRoutes from "./routes/transactions.js";
import walletRoutes from "./routes/wallet.js";
import analyticsRoutes from "./routes/analytics.js";
import healthRoutes from "./routes/health.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(helmet());
const allowedOrigins = process.env.FRONTEND_URL
  ? [process.env.FRONTEND_URL]
  : ['http://localhost:5173', 'http://localhost:5000'];

console.log('[CORS] Allowed origins:', allowedOrigins);

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    // Also allow the known Render frontend
    if (origin === 'https://trustbridge-frontend.onrender.com') {
      return callback(null, true);
    }
    console.log('[CORS] Blocked origin:', origin);
    callback(null, false);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100, message: { error: "Too many requests" } });
app.use("/api/", limiter);
app.use(compression());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/analytics", analyticsRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Not Found", message: `Route ${req.method} ${req.originalUrl} not found` });
});

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

export default app;