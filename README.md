# 🌐 SatsFi — AI-Powered Onchain Banking on BNB Chain

SatsFi is a next-generation DeFi assistant that lets anyone interact with blockchain-based financial protocols by simply typing what they want to do — like “Stake my BNB for the best yield.”
No confusing interfaces. No technical jargon. Just plain language and real results.

---

## 🌍 Live Demo & Links

- **Live Demo:** [satsfi.vercel.app](https://satsfi.vercel.app/)
- **BNB Testnet Explorer:** [testnet.bscscan.com](https://testnet.bscscan.com)

---

## 🔄 BNB Chain Testnet Deployment

SatsFi is live on BNB Chain testnet for enhanced accessibility and broader ecosystem integration.

**Network Information**
- Chain ID: 97
- RPC URL: https://data-seed-prebsc-1-s1.binance.org:8545/
- Explorer: https://testnet.bscscan.com
- Native Currency: BNB (18 decimals)

**Deployed Contract Addresses (BNB Testnet)**
- Staking Vault: `0xB45D1fd7FF5067f7ED7F628AAacF7772f377d5D8`
- Lending Pool: `0x5F5a7F0e10599dC18bB1007aEBA493D5389e40a7`
- stBNB Token: `0x2CD0f925B6d2DDEA0D3FE3e0F6b3Ba5d87e17073`

---

## 🚨 The Problem

DeFi is powerful — but most people never use it.
- **Complexity:** Too many protocols, wallets, and technical terms.
- **High Stakes:** One small mistake can lead to a permanent loss of funds.
- **Intimidating:** The onboarding process is overwhelming for newcomers.

---

## ✅ The Solution: SatsFi

SatsFi makes DeFi as simple as sending a message.

**Just type:**  
> “Stake my BNB for the best yield”

SatsFi will:
- **Understand Your Intent:** Uses the Gemini API to comprehend plain-language commands.
- **Suggest the Best Strategy:** Analyzes live APYs from DeFi protocols to find the optimal choice.
- **Secure Confirmation:** Lets you confirm and sign the transaction securely from your connected wallet.
- **Display Results:** Shows your earnings and positions in a clean, intuitive dashboard.

---

## 🚀 Key Features

- **🧠 AI-Powered (Gemini):** Intent understanding, personalized DeFi recommendations, and concept explanations.
- **💸 Staking & Lending:** Stake BNB, mint stBNB, use as collateral, and borrow.
- **📊 Real-Time Analytics:** Live portfolio, APYs, and health metrics.
- **🔗 Web3 Wallets:** Civic Embedded Wallet and wagmi for wallet connection.
- **🗂️ Offchain Layer:** MongoDB for user prompts, AI outputs, and transaction logs.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, Wagmi, Ethers.js, TailwindCSS, shadcn/ui
- **Backend:** Node.js, Express, MongoDB
- **Smart Contracts:** Solidity, Hardhat
- **AI Layer:** Gemini API (Google)
- **Auth:** Civic Embedded Wallet + wagmi
- **Deployment:** Vercel (Frontend), Render (Backend)

---

## 🏁 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/en/) (v18+)
- [npm](https://nodejs.org/en/) or pnpm
- [MongoDB](https://www.mongodb.com/try/download/community) account and connection URI

### 2. Clone the Repository
```bash
git clone https://github.com/jishnu-baruah/Satsfi-H4B
cd Satsfi-BNB
```

### 3. Setup Backend
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
PORT=5001
MONGODB_URI="your_mongodb_connection_string"
GEMINI_API_KEY="your_gemini_api_key"
COINGECKO_API_KEY="your_coingecko_demo_api_key"
```
Run the backend server:
```bash
npm start
```
The backend will be running at `http://localhost:5001`.

### 4. Setup Frontend
```bash
cd ../frontend
npm install
```
Create a `.env.local` file in the `frontend` directory:
```env
NEXT_PUBLIC_API_URL="http://localhost:5001/api"
```
Run the frontend development server:
```bash
npm run dev
```
The frontend will be available at `http://localhost:3000`.

### 5. Setup Smart Contracts
```bash
cd ../contracts
npm install
```
Create a `.env` file in the `contracts` directory:
```env
PRIVATE_KEY="your_wallet_private_key"
BSCSCAN_API_KEY="your_bscscan_api_key"  # Optional, for contract verification
```
To compile the contracts:
```bash
npm run hardhat compile
```
To run tests:
```bash
npm run hardhat test
```
To deploy to BNB Chain testnet:
```bash
npm run hardhat run scripts/deploy.ts --network bnb_testnet
```

---

## 📝 Deployed Smart Contract Addresses

### BNB Chain Testnet
- Staking Vault: `0xB45D1fd7FF5067f7ED7F628AAacF7772f377d5D8`
- Lending Pool: `0x5F5a7F0e10599dC18bB1007aEBA493D5389e40a7`
- stBNB Token: `0x2CD0f925B6d2DDEA0D3FE3e0F6b3Ba5d87e17073`

---

## 🗂 Project Structure

```
Satsfi-BNB/
  backend/      # Express.js API, business logic, AI integration
  frontend/     # Next.js app, UI components, wallet connection
  contracts/    # Solidity smart contracts, deployment scripts
```

---

## 🧪 Usage Examples

- **Stake BNB:**  
  Type “Stake 1 BNB for best yield” and follow the AI’s instructions.
- **Borrow:**  
  Type “Borrow 200 USDT without selling BNB” and confirm the transaction.
- **Portfolio:**  
  View your staked, borrowed, and available balances in the dashboard.

---

## 📌 Coming Soon

- Yield farming across multiple protocols
- More token support (USDT, BTC wrappers)
- Onchain AI agent for automated portfolio optimization
- Fully embedded Civic wallet transactions
- Cross-chain portfolio management

---

## 🙌 Built With ❤️ for BNB Chain + Civic + Gemini

SatsFi aims to simplify DeFi onboarding, maximize onchain yield, and bring millions into Web3 with AI-powered guidance.