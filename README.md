# AtlasBuy: The Intelligent Global Commerce Agent 🤖🛒

> **"Discover globally. Compare intelligently. Buy confidently."**

## 🚀 The Problem

In the era of Agentic Commerce, AI agents can browse and purchase items. However, letting an AI spend money freely is a massive security risk. A simple budget limit is not enough. Users need a system that ensures the AI is buying the **right product**, from the **right seller**, at the **right time**, and with **indisputable cryptographic proof**.

## 💡 The Solution: AtlasBuy

AtlasBuy is a Full-Stack Deterministic Control Plane and Mission Control dashboard that sits between the AI and the global market.

### 🧬 Core Innovations:

1. **AI Findeks (Trust Score):** Just like humans have credit scores, our AI agents have a 4-dimensional Trust Score. Based on budget discipline and seller loyalty, the AI earns a "Dynamic Spending Limit". A score >70 grants Autonomous Buying power.
2. **Shopping Constitution (Deterministic Gates):** AI might hallucinate, but math doesn't. A rule-based engine evaluates every transaction against strict Budget, Seller Trust, and Delivery Time constraints. If a gate turns red, **the payment API is never contacted.**
3. **Agent Debate:** The UI simulates a clash between the **Buyer Agent** (wants to buy) and the **Challenger Agent** (analyzes market intel, shipping, and rules).
4. **SpendProof Certificates:** Every successful transaction generates a cryptographically signed receipt (SHA-256 Hash + HMAC Signature). No certificate, no payment.
5. **Global Marketplace Integration:** Simulates real-time search across Amazon, Alibaba, and AliExpress.

## 🏗️ Architecture & Tech Stack

- **Frontend:** Next.js 15 (App Router), Tailwind CSS, Framer Motion (Premium Dark Mode UI).
- **Backend API:** Next.js API Routes (`/api/process`).
- **Core Logic:** TypeScript (`gate-engine.ts`, `certificate.ts`).
- **I18n:** Full native support for English and Turkish.

## 🎮 How to Run & Test the Engine

1. Clone the repo: `git clone https://github.com/mkkukul/atlasbuy.git`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

### 🧪 Testing the Scenarios:

- **The Safe Buy (Amazon - $25):** Passes all gates (Budget, Limit, Seller, Delivery). Generates the SpendProof Certificate.
- **The Slow Delivery (Alibaba - $15):** Fails the "Delivery Time" gate (14 days). Transaction is blocked.
- **The Scam Seller (ScamStore - $10):** Fails the "Seller Trust" gate. Transaction is blocked.

## 🇹🇷 Türkçe Özet

AtlasBuy, otonom yapay zekaların küresel pazarda güvenli alışveriş yapmasını sağlayan bir "Görev Kontrol" platformudur. Yapay zekanın bir banka müşterisi gibi "Findeks Skoru" vardır. Sistem, "Alışveriş Anayasası" (Deterministik Kapılar) sayesinde AI'ın bütçesini aşmasını, sahte satıcılardan alışveriş yapmasını veya kargosu yetişmeyecek ürünleri almasını engeller. Başarılı her işlem sonunda değiştirilemez bir "SpendProof" (Kriptografik Karar Sertifikası) üretir.
