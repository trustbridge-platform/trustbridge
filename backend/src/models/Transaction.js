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
  const where = [];
  const params = [];
  if (filter.user_id) { where.push("t.user_id = ?"); params.push(filter.user_id); }
  if (filter.campaign_id) { where.push("t.campaign_id = ?"); params.push(filter.campaign_id); }
  if (filter.type && filter.type !== "all") { where.push("t.type = ?"); params.push(filter.type); }
  if (filter.q) {
    where.push("(t.hash LIKE ? OR t.memo LIKE ?)");
    params.push(`%${filter.q}%`, `%${filter.q}%`);
  }
  const whereSql = where.length ? `WHERE ${where.join(" AND ")}` : "";

  // Pagination: default page 1, limit 10 (matching issue #7 requirement)
  const page = Math.max(1, parseInt(filter.page, 10) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(filter.limit, 10) || 10));
  const offset = (page - 1) * limit;

  const total = db.prepare(
    `SELECT COUNT(*) AS count FROM transactions t ${whereSql}`
  ).get(...params).count;

  const transactions = db.prepare(
    `SELECT t.*, c.title AS campaign_title
     FROM transactions t
     LEFT JOIN campaigns c ON c.id = t.campaign_id
     ${whereSql}
     ORDER BY t.created_at DESC LIMIT ? OFFSET ?`
  ).all(...params, limit, offset);

  const totalPages = Math.ceil(total / limit);

  return { transactions, total, page, limit, totalPages };
}
