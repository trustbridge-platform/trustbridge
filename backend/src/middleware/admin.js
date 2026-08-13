export async function adminOnly(req, res, next) {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ error: "Admin access required" });
    }
    next();
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
}