import { Router } from "express";
import { body, validationResult } from "express-validator";
import { createUser, findUserByEmail, findUserById, updateUser, comparePassword, changePassword } from "../models/User.js";
import { signToken, verifyToken } from "../middleware/auth.js";

const router = Router();

// Register
router.post(
  "/register",
  [
    body("firstName").isLength({ min: 1 }).trim(),
    body("lastName").isLength({ min: 1 }).trim(),
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 8 }),
    body("confirmPassword").custom((value, { req }) => value === req.body.password),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array()[0].msg });
    try {
      const { firstName, lastName, email, password, avatar, gender, country, bio, facebook, instagram, youtube } = req.body;
      const existing = await findUserByEmail(email);
      if (existing) return res.status(409).json({ error: "Email already registered" });
      const user = await createUser({ firstName, lastName, email, password, avatar, gender, country, bio, facebook, instagram, youtube });
      const token = signToken(user);
      res.status(201).json({
        token,
        user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, walletAddress: user.walletAddress, avatar: user.avatar, gender: user.gender, country: user.country, bio: user.bio, facebook: user.facebook, instagram: user.instagram, youtube: user.youtube, joined: user.created_at },
      });
    } catch (err) {
      res.status(500).json({ error: "Registration failed" });
    }
  }
);

// Login
router.post(
  "/login",
  [body("email").isEmail().normalizeEmail(), body("password").exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array()[0].msg });
    try {
      const { email, password } = req.body;
      const user = await findUserByEmail(email);
      if (!user) {
        return res.status(401).json({ error: "Account not found. Please sign up first." });
      }
      if (!(await comparePassword(user, password))) {
        return res.status(401).json({ error: "Incorrect password" });
      }
      const token = signToken(user);
      res.json({
        token,
        user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, walletAddress: user.walletAddress, avatar: user.avatar, gender: user.gender, country: user.country, bio: user.bio, facebook: user.facebook, instagram: user.instagram, youtube: user.youtube, joined: user.created_at },
      });
    } catch (err) {
      res.status(500).json({ error: "Login failed" });
    }
  }
);

// Get profile
router.get("/me", async (req, res) => {
  try {
    const header = req.headers.authorization;
    const token = header?.startsWith("Bearer ") ? header.slice(7) : null;
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    const decoded = verifyToken(token);
    const user = await findUserById(decoded.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({
      user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, walletAddress: user.walletAddress, avatar: user.avatar, gender: user.gender, country: user.country, bio: user.bio, facebook: user.facebook, instagram: user.instagram, youtube: user.youtube, joined: user.created_at },
    });
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
});

// Update profile
router.put("/profile", async (req, res) => {
  try {
    const header = req.headers.authorization;
    const token = header?.startsWith("Bearer ") ? header.slice(7) : null;
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    const decoded = verifyToken(token);
    const allowedFields = ["firstName", "lastName", "bio", "avatar", "gender", "country", "facebook", "instagram", "youtube", "walletAddress"];
    const fields = {};
    for (const key of allowedFields) {
      if (req.body[key] !== undefined) fields[key] = req.body[key];
    }
    if (Object.keys(fields).length > 0) {
      await updateUser(decoded.id, fields);
    }
    const user = await findUserById(decoded.id);
    res.json({
      user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, walletAddress: user.walletAddress, avatar: user.avatar, gender: user.gender, country: user.country, bio: user.bio, facebook: user.facebook, instagram: user.instagram, youtube: user.youtube, joined: user.created_at },
    });
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
});

// Change password
router.put("/change-password", async (req, res) => {
  try {
    const header = req.headers.authorization;
    const token = header?.startsWith("Bearer ") ? header.slice(7) : null;
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    const decoded = verifyToken(token);
    const user = await findUserById(decoded.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    const { oldPassword, newPassword, confirmPassword } = req.body;
    if (!(await comparePassword(user, oldPassword))) {
      return res.status(400).json({ error: "Current password is incorrect" });
    }
    if (newPassword.length < 8) {
      return res.status(400).json({ error: "New password must be at least 8 characters" });
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    await changePassword(decoded.id, newPassword);
    res.json({ message: "Password changed successfully" });
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
});

export default router;