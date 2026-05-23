<div align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Groq-10B981?style=for-the-badge&logo=groq&logoColor=white" alt="Groq" />
</div>

<h1 align="center">Expense Tracker — Financial Copilot</h1>

<p align="center">
  <strong>AI-powered personal finance manager</strong><br />
  Track expenses, set savings goals, and chat with an intelligent financial assistant.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#project-structure">Structure</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#environment-variables">Environment</a> •
  <a href="#api-overview">API</a> •
  <a href="#ai-copilot">AI Copilot</a>
</p>

---

## Features

| Module | Capabilities |
|--------|-------------|
| **Authentication** | Email/password registration & login, Google Sign-In, JWT dual-token auth (access + refresh), forgot password, auto-token refresh |
| **Transactions** | Full CRUD for income & expenses, paginated listing, filters (type, category, date range), recurring transaction flag |
| **Categories** | Pre-seeded defaults (Shopping, Food, Transport, Rent, Health, Salary), custom creation with icon & color, income vs expense types |
| **Wallet** | Total balance display, activity history, add funds |
| **Savings Goals** | Goal creation with target amount & duration, progress tracking, savings contributions, intelligent insights (on track / ahead / delayed) |
| **Statistics** | Weekly & monthly bar charts, category breakdown, period comparison, spending anomaly detection (30% above 3-month average) |
| **AI Financial Copilot** | Conversational AI powered by Groq Llama 3.3 70B, natural language queries, 18 function-calling tools, multi-step reasoning, confirmation flow for destructive actions |
| **Voice Input** | Record audio, transcribe via Groq Whisper, process through AI assistant |
| **Predictions** | Monthly spending estimation (6-month weighted forecast), savings potential & target date calculation, trend detection |
| **Notifications** | Push notifications via Expo, periodic reminders, history with read/unread status |
| **Multi-language** | English, Français, العربية / Tunisian dialect — auto-detected by the AI |
| **Theming** | Light & dark mode with automatic system detection + manual toggle |

---

## Tech Stack

### Backend
| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express 5 |
| Language | TypeScript |
| Database | MongoDB + Mongoose 9 |
| Auth | JWT (jsonwebtoken), Google Auth Library, bcrypt |
| AI | Groq SDK (Llama 3.3 70B, Whisper) |
| File Upload | Multer |

### Frontend
| Layer | Technology |
|-------|-----------|
| Framework | React Native 0.81 |
| Platform | Expo 54 |
| Navigation | Expo Router 6 (file-based) + React Navigation bottom tabs |
| State | Zustand |
| Server State | TanStack React Query |
| Forms | React Hook Form + Zod |
| HTTP | Axios with interceptor-based auto-refresh |
| Animations | React Native Reanimated + Gesture Handler |
| Auth | Expo Auth Session (Google) |
| Notifications | Expo Notifications |

---

## Project Structure

```
expensetracker/
├── backend-expense-main/        # REST API server
│   ├── server.ts                # Entry point
│   ├── config/database.ts       # MongoDB connection
│   ├── models/                  # Mongoose schemas (User, Transaction, Category, Goal, Conversation)
│   ├── routes/                  # Express route definitions
│   ├── Controllers/             # Request handlers
│   ├── middleware/              # JWT verification, Multer upload config
│   ├── services/                # Business logic (Groq AI, analytics, predictions, memory, transcription)
│   ├── ai/                      # AI agent system prompt, tool definitions, tool executor
│   └── uploads/                 # Avatar & audio files (gitignored)
│
├── frontend-expense-main/       # React Native / Expo mobile app
│   ├── app/                     # Expo Router pages (auth, tabs)
│   ├── screens/                 # Screen-level components (AIChatScreen)
│   ├── components/              # Reusable UI components
│   ├── features/                # Feature modules (auth, transactions, goals, stats, wallet, notifications)
│   ├── core/                    # Theme constants, config, base components
│   ├── providers/               # React context providers (Auth, User, Currency)
│   ├── hooks/                   # Shared hooks (useAIChat, useVoiceRecorder)
│   ├── lib/                     # Axios client with JWT interceptor
│   └── utils/                   # Currency formatting, goal estimation
│
├── images figma/                # UI mockup exports
└── rapport.md                   # Academic project report
```

---

## Getting Started

### Prerequisites
- **Node.js** >= 18
- **MongoDB** (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))
- **Expo CLI** (`npm install -g expo-cli`)
- **Android Studio** (emulator) or **Xcode** (iOS simulator) or **Expo Go** app (physical device)
- **Groq API Key** — [Get one free](https://console.groq.com)

### 1. Clone & Install

```bash
git clone https://github.com/oussamaelouragini/expensetracker.git
cd expensetracker

# Backend
cd backend-expense-main
npm install

# Frontend
cd ../frontend-expense-main
npm install
```

### 2. Configure Environment

**Backend** — `backend-expense-main/.env`:
```env
PORT=5000
DATABASE_URL=mongodb://localhost:27017/expensetracker
ACCESS_OTP_SECRET=your-access-secret
REFRESH_OTP_SECRET=your-refresh-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_WEB_CLIENT_ID=your-google-web-client-id
GOOGLE_ANDROID_CLIENT_ID=your-google-android-client-id
GROQ_API_KEY=gsk_your-groq-api-key
```

**Frontend** — `frontend-expense-main/.env`:
```env
EXPO_PUBLIC_API_URL=http://192.168.x.x:5000   # your machine's LAN IP
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=your-google-web-client-id
EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID=your-google-android-client-id
```

### 3. Run

```bash
# Terminal 1 — Backend
cd backend-expense-main
npm run dev          # TypeScript hot-reload on port 5000

# Terminal 2 — Frontend
cd frontend-expense-main
npx expo start       # Press 'a' (Android), 'i' (iOS), or 'w' (web)
```

---

## Environment Variables

### Backend
| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | Yes | Server port |
| `DATABASE_URL` | Yes | MongoDB connection string |
| `ACCESS_OTP_SECRET` | Yes | JWT access token signing secret |
| `REFRESH_OTP_SECRET` | Yes | JWT refresh token signing secret |
| `GOOGLE_CLIENT_ID` | Yes (Google Sign-In) | Google OAuth client ID |
| `GOOGLE_WEB_CLIENT_ID` | Yes (Google Sign-In) | Google Web client ID |
| `GOOGLE_ANDROID_CLIENT_ID` | Yes (Google Sign-In) | Google Android client ID |
| `GROQ_API_KEY` | Yes (AI features) | Groq API key |

### Frontend
| Variable | Required | Description |
|----------|----------|-------------|
| `EXPO_PUBLIC_API_URL` | Yes | Backend server URL |
| `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID` | Yes (Google Sign-In) | Google Web client ID |
| `EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID` | Yes (Google Sign-In) | Google Android client ID |

> **API URL resolution** (fallback chain): `EXPO_PUBLIC_API_URL` → `http://localhost:5000` (web) → `http://10.0.2.2:5000` (Android emulator)

---

## API Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| **Auth** | | |
| `POST` | `/auth/register` | Register with email & password |
| `POST` | `/auth/login` | Login, returns JWT |
| `POST` | `/auth/google` | Google Sign-In |
| `POST` | `/auth/forgot-password` | Forgot password |
| `GET` | `/auth/refresh` | Refresh access token |
| `GET` | `/auth/logout` | Logout, clear refresh cookie |
| **User** | | |
| `GET` | `/users/profile` | Get profile |
| `PUT` | `/users/profile` | Update profile |
| `POST` | `/users/avatar` | Upload avatar |
| `DELETE` | `/users/avatar` | Delete avatar |
| **Transactions** | | |
| `GET` | `/transactions` | List (paginated, filterable) |
| `GET` | `/transactions/:id` | Get single |
| `POST` | `/transactions` | Create |
| `PATCH` | `/transactions/:id` | Update |
| `DELETE` | `/transactions/:id` | Delete |
| **Categories** | | |
| `GET` | `/categories` | List all |
| `POST` | `/categories` | Create |
| `PATCH` | `/categories/:id` | Update |
| `DELETE` | `/categories/:id` | Delete |
| **Goals** | | |
| `GET` | `/goal/goals` | List all |
| `POST` | `/goal/createGoals` | Create |
| `PUT` | `/goal/goals/:id` | Update |
| `DELETE` | `/goal/goals/:id` | Delete |
| **AI** | | |
| `POST` | `/ai/chat` | Send message to AI copilot |
| `POST` | `/ai/confirm` | Confirm pending destructive action |
| `POST` | `/ai/voice` | Upload & transcribe audio, send to AI |
| `DELETE` | `/ai/conversation` | Reset conversation |
| `GET` | `/ai/context` | Get conversation context |

---

## AI Copilot

The **Financial Copilot** is the centerpiece of this application — an agentic AI assistant powered by Groq's **Llama 3.3 70B** model.

### How it works
1. User sends a natural language query (text or voice)
2. The AI agent dynamically selects from **18 function-calling tools** covering all financial operations
3. Multi-step reasoning loop (up to 5 iterations) for complex requests
4. **Read-only tools** (querying balances, transactions, stats) execute immediately
5. **Destructive tools** (create, update, delete) require user confirmation before execution
6. Conversation history is persisted per-user (last 20 messages) with context awareness

### Example queries
- *"How much did I spend on food this month?"*
- *"Create a savings goal for a new laptop worth 2000 TND by December"*
- *"Compare my spending this week to last week"*
- *"Any unusual transactions lately?"*
- *"Ajoute 50 TND de transport pour aujourd'hui"*
- *"شنو كان مصروفي الشهر الماضي؟"*

### AI Tools
| Category | Tools |
|----------|-------|
| Transactions | `createTransaction`, `updateTransaction`, `deleteTransaction`, `getTransactions`, `getTransaction` |
| Analytics | `getSpendingSummary`, `getCategoryBreakdown`, `comparePeriods`, `getAnomalyDetection`, `getFinancialOverview` |
| Predictions | `predictMonthlySpending`, `getSavingsPotential` |
| Goals | `createGoal`, `updateGoal`, `deleteGoal`, `getGoals`, `getGoal` |
| Categories | `getCategories`, `createCategory` |

---

## License

This project is developed for academic purposes.
