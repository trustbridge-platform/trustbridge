import { getDB } from "../config/database.js";
import bcrypt from "bcrypt";

const USER_FIELDS = `id, firstName, lastName, email, walletAddress, avatar, gender, country, bio, facebook, instagram, youtube, created_at`;

export async function createUser({ firstName, lastName, email, password, avatar, gender, country, bio, facebook, instagram, youtube }) {
  const db = getDB();
  const hash = await bcrypt.hash(password, 10);
  const stmt = db.prepare(
    "INSERT INTO users (firstName, lastName, email, password, avatar, gender, country, bio, facebook, instagram, youtube) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
  );
  const result = stmt.run(firstName, lastName, email, hash, avatar || null, gender || null, country || null, bio || null, facebook || null, instagram || null, youtube || null);
  return { id: result.lastInsertRowid, firstName, lastName, email, walletAddress: null, avatar, gender, country, bio, facebook, instagram, youtube };
}

export async function findUserByEmail(email) {
  const db = getDB();
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
}

export async function findUserById(id) {
  const db = getDB();
  return db.prepare(`SELECT ${USER_FIELDS} FROM users WHERE id = ?`).get(id);
}

export async function updateUser(id, fields) {
  const db = getDB();
  const sets = [];
  const vals = [];
  for (const [k, v] of Object.entries(fields)) {
    sets.push(`${k} = ?`);
    vals.push(v);
  }
  if (sets.length === 0) return findUserById(id);
  vals.push(id);
  db.prepare(`UPDATE users SET ${sets.join(", ")}, updated_at = datetime('now') WHERE id = ?`).run(...vals);
  return findUserById(id);
}

export async function comparePassword(user, candidate) {
  return bcrypt.compare(candidate, user.password);
}

export async function changePassword(id, newPassword) {
  const db = getDB();
  const hash = await bcrypt.hash(newPassword, 10);
  db.prepare("UPDATE users SET password = ?, updated_at = datetime('now') WHERE id = ?").run(hash, id);
  return true;
}