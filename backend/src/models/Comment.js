import { getDB } from "../config/database.js";

export function createComment(data) {
  const db = getDB();
  const stmt = db.prepare(
    "INSERT INTO comments (campaign_id, user_id, text) VALUES (?, ?, ?)"
  );
  const result = stmt.run(data.campaign_id, data.user_id, data.text);
  return getCommentById(result.lastInsertRowid);
}

export function getCommentById(id) {
  const db = getDB();
  return db.prepare(
    `SELECT c.*, u.firstName, u.lastName, u.avatar
     FROM comments c
     JOIN users u ON c.user_id = u.id
     WHERE c.id = ?`
  ).get(id);
}

export function getCommentsByCampaign(campaignId) {
  const db = getDB();
  return db.prepare(
    `SELECT c.*, u.firstName, u.lastName, u.avatar
     FROM comments c
     JOIN users u ON c.user_id = u.id
     WHERE c.campaign_id = ?
     ORDER BY c.created_at ASC`
  ).all(campaignId);
}

export function deleteComment(id, userId) {
  const db = getDB();
  const comment = db.prepare("SELECT * FROM comments WHERE id = ?").get(id);
  if (!comment) return false;
  if (comment.user_id !== userId) return false;
  db.prepare("DELETE FROM comments WHERE id = ?").run(id);
  return true;
}

export function deleteCommentByCreator(id, creatorId) {
  const db = getDB();
  const comment = db.prepare("SELECT * FROM comments WHERE id = ?").get(id);
  if (!comment) return false;
  const campaign = db.prepare("SELECT * FROM campaigns WHERE id = ?").get(comment.campaign_id);
  if (!campaign || campaign.creator_id !== creatorId) return false;
  db.prepare("DELETE FROM comments WHERE id = ?").run(id);
  return true;
}