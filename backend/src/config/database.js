import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, "..", "..", "trustbridge.db");

let db;

export function getDB() {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma("journal_mode = WAL");
    db.pragma("foreign_keys = ON");
    initSchema();
  }
  return db;
}

function initSchema() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      walletAddress TEXT,
      avatar TEXT,
      gender TEXT,
      country TEXT,
      bio TEXT,
      facebook TEXT,
      instagram TEXT,
      youtube TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS campaigns (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      organization TEXT NOT NULL,
      category TEXT NOT NULL,
      goal REAL NOT NULL,
      raised REAL DEFAULT 0,
      donors INTEGER DEFAULT 0,
      image TEXT,
      creator_id INTEGER REFERENCES users(id),
      status TEXT DEFAULT 'active' CHECK(status IN ('active','funded','expired')),
      end_date TEXT NOT NULL,
      urgent INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      hash TEXT NOT NULL,
      from_address TEXT NOT NULL,
      to_address TEXT NOT NULL,
      amount REAL NOT NULL,
      asset TEXT DEFAULT 'XLM',
      type TEXT NOT NULL CHECK(type IN ('donation','send','receive')),
      status TEXT DEFAULT 'confirmed' CHECK(status IN ('confirmed','pending','failed')),
      memo TEXT,
      campaign_id INTEGER REFERENCES campaigns(id),
      user_id INTEGER REFERENCES users(id),
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE INDEX IF NOT EXISTS idx_transactions_user ON transactions(user_id);
    CREATE INDEX IF NOT EXISTS idx_transactions_campaign ON transactions(campaign_id);
    CREATE INDEX IF NOT EXISTS idx_campaigns_creator ON campaigns(creator_id);
  `);

  // Add columns if they don't exist (safe for re-running)
  const existing = db.prepare("PRAGMA table_info(users)").all().map(r => r.name);
  const cols = ['avatar', 'gender', 'country', 'facebook', 'instagram', 'youtube'];
  for (const col of cols) {
    if (!existing.includes(col)) {
      db.exec(`ALTER TABLE users ADD COLUMN ${col} TEXT`);
    }
  }
}

export default getDB;