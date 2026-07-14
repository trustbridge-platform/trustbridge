import { getDB } from "../config/database.js";

export function createTransaction(data) {
  const db = getDB();
  const stmt = db.prepare(
    "INSERT INTO transactions (hash, from_address, to_address, amount, asset, type, status, memo, campaign_id, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
  );
  const result = stmt.run(
    data.hash, data.from, data.to, data.amount, data.asset || "XLM",
    data.type, data.status || "confirmed", data.memo || null,
    data.campaign_id || null, data.user_id || null
  );
  return findTransactionById(result.lastInsertRowid);
}

export function findTransactionById(id) {
  const db = getDB();
  return db.prepare("SELECT * FROM transactions WHERE id = ?").get(id);
}

export function listTransactions(filter = {}) {
  const db = getDB();
  let sql = "SELECT * FROM transactions WHERE 1=1";
  const params = [];
  if (filter.user_id) { sql += " AND user_id = ?"; params.push(filter.user_id); }
  if (filter.campaign_id) { sql += " AND campaign_id = ?"; params.push(filter.campaign_id); }
  if (filter.type && filter.type !== "all") { sql += " AND type = ?"; params.push(filter.type); }
  if (filter.q) {
    sql += " AND (hash LIKE ? OR memo LIKE ?)";
    params.push(`%${filter.q}%`, `%${filter.q}%`);
  }
  sql += " ORDER BY created_at DESC LIMIT 100";
  return db.prepare(sql).all(...params);
}