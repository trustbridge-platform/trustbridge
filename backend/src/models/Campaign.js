import { getDB } from "../config/database.js";

export function createCampaign(data) {
  const db = getDB();
  const stmt = db.prepare(
    "INSERT INTO campaigns (title, description, organization, category, goal, image, creator_id, end_date, urgent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
  );
  const result = stmt.run(data.title, data.description, data.organization, data.category, data.goal, data.image || null, data.creator_id, data.end_date, data.urgent ? 1 : 0);
  return findCampaignById(result.lastInsertRowid);
}

export function findCampaignById(id) {
  const db = getDB();
  return db.prepare("SELECT * FROM campaigns WHERE id = ?").get(id);
}

export function listCampaigns(filter = {}) {
  const db = getDB();
  let sql = "SELECT * FROM campaigns WHERE 1=1";
  const params = [];
  if (filter.category && filter.category !== "all") { sql += " AND category = ?"; params.push(filter.category); }
  if (filter.status) { sql += " AND status = ?"; params.push(filter.status); }
  sql += " ORDER BY created_at DESC LIMIT 50";
  return db.prepare(sql).all(...params);
}

export function updateCampaign(id, fields) {
  const db = getDB();
  const sets = [];
  const vals = [];
  for (const [k, v] of Object.entries(fields)) {
    sets.push(`${k} = ?`);
    vals.push(v);
  }
  vals.push(id);
  db.prepare(`UPDATE campaigns SET ${sets.join(", ")}, updated_at = datetime('now') WHERE id = ?`).run(...vals);
  return findCampaignById(id);
}