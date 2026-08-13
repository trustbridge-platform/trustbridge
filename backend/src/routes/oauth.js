import { Router } from "express";
import axios from "axios";
import { createUser, findUserByEmail, findUserByGithubId, updateUser } from "../models/User.js";
import { signToken } from "../middleware/auth.js";

const router = Router();

function serializeUser(user) {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    walletAddress: user.walletAddress,
    avatar: user.avatar,
    gender: user.gender,
    country: user.country,
    bio: user.bio,
    facebook: user.facebook,
    instagram: user.instagram,
    youtube: user.youtube,
    emailNotifications: user.emailNotifications ?? 1,
    joined: user.created_at,
  };
}

// Redirect to GitHub OAuth consent screen
router.get("/github", (req, res) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = `${process.env.FRONTEND_URL}/auth/github/callback`;
  const scope = "read:user user:email";
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;
  res.redirect(url);
});

// GitHub OAuth callback — frontend sends us the code
router.post("/github/callback", async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) return res.status(400).json({ error: "Missing code" });

    const tokenRes = await axios.post("https://github.com/login/oauth/access_token", {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${process.env.FRONTEND_URL}/auth/github/callback`,
    }, { headers: { Accept: "application/json" } });

    const accessToken = tokenRes.data.access_token;
    if (!accessToken) return res.status(400).json({ error: "Failed to get access token" });

    const [userRes, emailRes] = await Promise.all([
      axios.get("https://api.github.com/user", { headers: { Authorization: `Bearer ${accessToken}` } }),
      axios.get("https://api.github.com/user/emails", { headers: { Authorization: `Bearer ${accessToken}` } }),
    ]);

    const githubProfile = userRes.data;
    const primaryEmail = emailRes.data.find((e) => e.primary)?.email || emailRes.data[0]?.email;

    if (!primaryEmail) return res.status(400).json({ error: "No email found on GitHub account" });

    let user = await findUserByGithubId(String(githubProfile.id));
    if (!user) {
      user = await findUserByEmail(primaryEmail);
      if (user) {
        await updateUser(user.id, { github_id: String(githubProfile.id), auth_provider: "github", avatar: githubProfile.avatar_url || user.avatar });
      } else {
        const name = githubProfile.name?.split(" ") || [];
        const firstName = name[0] || githubProfile.login || "GitHub";
        const lastName = name.slice(1).join(" ") || "User";
        user = await createUser({
          firstName,
          lastName,
          email: primaryEmail,
          password: null,
          avatar: githubProfile.avatar_url || null,
        });
        await updateUser(user.id, { github_id: String(githubProfile.id), auth_provider: "github" });
      }
    }

    const token = signToken(user);
    res.json({ token, user: serializeUser(user) });
  } catch (err) {
    console.error("GitHub OAuth error:", err);
    res.status(500).json({ error: "GitHub sign-in failed" });
  }
});

export default router;