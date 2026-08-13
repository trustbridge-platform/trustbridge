import { getDB } from "../config/database.js";

export function listAllUsers() {
  const db = getDB();
  return db.prepare("SELECT id, firstName, lastName, email, role, created_at FROM users ORDER BY created_at DESC").all();
}

export function listAllCampaigns() {
  const db = getDB();
  return db.prepare("SELECT * FROM campaigns ORDER BY created_at DESC").all();
}

export function listAllTransactions() {
  const db = getDB();
  return db.prepare("SELECT * FROM transactions ORDER BY created_at DESC").all();
}

export function deactivateCampaign(id) {
  const db = getDB();
  const stmt = db.prepare("UPDATE campaigns SET status = 'expired', updated_at = datetime('now') WHERE id = ?");
  const result = stmt.run(id);
  if (result.changes === 0) return null;
  return db.prepare("SELECT * FROM campaigns WHERE id = ?").get(id);
}