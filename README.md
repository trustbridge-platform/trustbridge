# 🛡️ TrustBridge — Humanitarian Aid on Stellar

> **Decentralized humanitarian aid platform. Transparent. Trustless. Borderless.**

TrustBridge connects donors directly to verified humanitarian campaigns using the **Stellar blockchain**. Every donation is recorded on-chain with 4.2-second settlement and near-zero fees — no intermediaries, no hidden costs, no delays.

---

## ✨ Features

### 🔐 Authentication & Profile
| Feature | Status |
|---------|--------|
| Email & Password Sign Up (bcrypt + JWT) | ✅ Live |
| Login with distinct error messages | ✅ Live |
| Avatar Selection (7 DiceBear avatars) | ✅ Live |
| Profile with Gender, Country, Bio, Social Links | ✅ Live |
| Change Password | ✅ Live |
| 2FA, Device Management (Coming Soon) | ⏳ Planned |

### 💰 Wallet System
| Feature | Status |
|---------|--------|
| Freighter Wallet Detection | ✅ Live |
| Lobstr Wallet Detection | ✅ Live |
| xBull Wallet Detection | ✅ Live |
| Albedo Wallet Detection | ✅ Live |
| WalletConnect QR | ✅ Live |
| Manual Stellar Address Input | ✅ Live |
| Real-time XLM Balance from Horizon | ✅ Live |

### 📊 Campaigns & Donations
| Feature | Status |
|---------|--------|
| Browse Campaigns (filter by category, search) | ✅ Live |
| Create Campaign (with verification) | ✅ Live |
| Donate via Stellar | ✅ Live |
| Real-time Progress Tracking | ✅ Live |
| Campaign Analytics Dashboard | ✅ Live |

### 🔒 Security
- Passwords hashed with **bcrypt** (10 rounds)
- JWT tokens with 7-day expiry
- SQLite with WAL mode for concurrent reads
- Rate limiting on API endpoints
- CORS restricted to frontend origins

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Browser (Vite SSR)                │
│  TanStack Router + React 19 + Tailwind CSS 4        │
│  Port: 5173                                          │
└────────────────┬────────────────────────────────────┘
                 │ HTTP / JSON
                 ▼
┌─────────────────────────────────────────────────────┐
│              Express.js API Server                   │
│  auth, campaigns, transactions, analytics, wallet    │
│  Port: 5000                                          │
└────────────────┬────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────┐
│              SQLite (better-sqlite3)                 │
│  Tables: users, campaigns, transactions              │
│  WAL mode for concurrent reads                       │
└─────────────────────────────────────────────────────┘
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | React 19 + TypeScript |
| **Meta-Framework** | TanStack Start (SSR) |
| **Routing** | TanStack Router v1 |
| **Styling** | Tailwind CSS v4 |
| **UI Icons** | Lucide React |
| **Blockchain** | @stellar/stellar-sdk |
| **Backend** | Express.js |
| **Database** | SQLite (better-sqlite3) |
| **Auth** | bcrypt + jsonwebtoken |
| **Wallet** | Freighter, Lobstr, xBull, Albedo, WalletConnect |

---

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 20
- npm ≥ 9

### 1. Clone & Install

```bash
cd TrustBridge

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend && npm install && cd ..
```

### 2. Environment

The backend uses default configuration — no `.env` changes needed for development:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Start Development Servers

**Terminal 1 — Backend API:**
```bash
cd backend && node server.js
# → http://localhost:5000
# → 🚀 TrustBridge API Server
```

**Terminal 2 — Frontend (SSR):**
```bash
npm run dev
# → http://localhost:5173
```

### 4. Open the App

```
http://localhost:5173/signup
```

---

## 📋 API Reference

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Create account |
| `POST` | `/api/auth/login` | Sign in |
| `GET` | `/api/auth/me` | Get profile (auth) |
| `PUT` | `/api/auth/profile` | Update profile (auth) |
| `PUT` | `/api/auth/change-password` | Change password (auth) |

**POST /api/auth/register**
```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@example.com",
  "password": "securepassword",
  "confirmPassword": "securepassword",
  "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
  "gender": "female",
  "country": "United States",
  "bio": "Humanitarian activist",
  "facebook": "https://facebook.com/jane",
  "instagram": "https://instagram.com/jane"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane@example.com",
    "walletAddress": null,
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    "gender": "female",
    "country": "United States",
    "bio": "Humanitarian activist",
    "facebook": "https://facebook.com/jane",
    "instagram": "https://instagram.com/jane",
    "youtube": null,
    "joined": "2026-07-14 00:00:00"
  }
}
```

### Campaigns

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/campaigns` | List campaigns |
| `GET` | `/api/campaigns/:id` | Get campaign |
| `POST` | `/api/campaigns` | Create campaign (auth) |
| `POST` | `/api/campaigns/:id/donate` | Donate (auth) |

### Transactions

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/transactions/me` | My transactions (auth) |
| `POST` | `/api/transactions/send` | Send XLM (auth) |
| `GET` | `/api/transactions/balance/:address` | Get balance |

### Health

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Server health check |

---

## 🗄️ Database Schema

```sql
-- Users table (all profile fields)
CREATE TABLE users (
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

-- Campaigns
CREATE TABLE campaigns (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  organization TEXT NOT NULL,
  category TEXT NOT NULL,
  goal REAL NOT NULL,
  raised REAL DEFAULT 0,
  donors INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active',
  creator_id INTEGER REFERENCES users(id),
  end_date TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Transactions
CREATE TABLE transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  hash TEXT NOT NULL,
  amount REAL NOT NULL,
  type TEXT NOT NULL,
  status TEXT DEFAULT 'confirmed',
  user_id INTEGER REFERENCES users(id),
  campaign_id INTEGER REFERENCES campaigns(id),
  created_at TEXT DEFAULT (datetime('now'))
);
```

---

## 📸 Screenshots

### Sign Up Page
```
┌─────────────────────────────────────────────────────┐
│                   🛡️ TrustBridge                     │
│               Create account                         │
│                                                      │
│  ┌──────────────┐ ┌──────────────┐                   │
│  │ First Name   │ │ Last Name    │                   │
│  └──────────────┘ └──────────────┘                   │
│  ┌──────────────────────────────────────┐            │
│  │ ✉️ Email                            │            │
│  └──────────────────────────────────────┘            │
│  ┌──────────────┐ ┌──────────────┐                   │
│  │ 🔒 Password  │ │ 🔒 Confirm   │                   │
│  └──────────────┘ └──────────────┘                   │
│  [7 Avatar Circles]                                  │
│  ┌──────────────┐ ┌──────────────┐                   │
│  │ Gender ▼     │ │ Country ▼    │                   │
│  └──────────────┘ └──────────────┘                   │
│  ┌──────────────────────────────────────┐            │
│  │ Bio (optional)                       │            │
│  └──────────────────────────────────────┘            │
│  ┌──────────────────────────────────────┐            │
│  │ Social Media Links (optional)        │            │
│  └──────────────────────────────────────┘            │
│                                                      │
│  ┌──────────────────────────────────────┐            │
│  │         🚀 Create Account            │            │
│  └──────────────────────────────────────┘            │
└─────────────────────────────────────────────────────┘
```

### Profile Page
```
┌─────────────────────────────────────────────────────┐
│  Profile                                            │
│                                                      │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐│
│  │  Avatar      │ │ Statistics   │ │ Recent       ││
│  │  Name        │ │ Camp: 0     │ │ Activity     ││
│  │  Email       │ │ Don: 0      │ │ No activity  ││
│  │  Country     │ │ XLM: 0      │ │ yet.         ││
│  │  Bio         │ └──────────────┘ └──────────────┘│
│  │  Social      │                                   │
│  └──────────────┘                                   │
└─────────────────────────────────────────────────────┘
```

---

## 🛠️ Deployment

### Build for Production

```bash
npm run build
# Output in ./

cd backend && node server.js
```

### Environment Variables (Production)

```env
PORT=5000
NODE_ENV=production
JWT_SECRET=<generate-a-strong-secret>
FRONTEND_URL=https://yourdomain.com
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push: `git push origin feat/amazing-feature`
5. Open a Pull Request

### Code Style
- TypeScript strict mode
- ESLint + Prettier
- Components in `src/components/`
- Routes in `src/routes/`
- API functions in `src/services/api.ts`

---

## 🧪 Testing Checklist

| Test | Expected |
|------|----------|
| Go to `/signup` | ✅ Signup form loads |
| Fill all fields and submit | ✅ Redirects to Dashboard |
| Go to `/login` | ✅ Login form loads |
| Enter correct credentials | ✅ Redirects to Dashboard |
| Enter wrong password | ❌ Shows "Incorrect password" |
| Enter non-existent email | ❌ Shows "Account not found. Please sign up first." |
| Try `/dashboard` without login | ✅ Redirects to `/login` |
| Logout → try Dashboard | ✅ Redirects to `/login` |
| Go to `/profile` | ✅ Shows user's data |
| Change password in Settings | ✅ Updates in DB |
| Connect Freighter wallet | ✅ Shows ✅ DETECTED |
| Enter manual Stellar address | ✅ Verifies on Horizon |

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## ⚡ Roadmap

- [ ] **Two-Factor Authentication (2FA)**
- [ ] **Biometric Authentication** (Face ID / Fingerprint)
- [ ] **Device Management & Session Control**
- [ ] **Login History & Audit Logs**
- [ ] **Mobile App** (React Native)
- [ ] **Multi-chain Support** (Soroban smart contracts)
- [ ] **DAO Governance** for campaign verification

---

<div align="center">
  <sub>Built with ❤️ on the Stellar Network</sub>
  <br />
  <sub>© 2026 TrustBridge. Transparency in action.</sub>
</div>