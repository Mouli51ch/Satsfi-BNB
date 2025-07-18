# 🌐 SatsFi — AI-Powered Onchain Banking on CoreDAO & BNB Chain

SatsFi is a next-generation DeFi assistant that lets anyone interact with blockchain-based financial protocols by simply typing what they want to do — like "Stake my CORE for the best yield."

No confusing interfaces. No technical jargon. Just plain language and real results.

**Submission for [Hack4Bengal 4.0](https://hack4bengal.tech/)**

---

## 🌍 Live Demo & Links

- **Live Demo:** [**satsfi.vercel.app**](https://satsfi.vercel.app/)
- **TCORE2 Explorer:** [scan.test2.btcs.network](https://scan.test2.btcs.network)
- **BNB Testnet Explorer:** [testnet.bscscan.com](https://testnet.bscscan.com)

---

## 🔄 BNB Chain Testnet Deployment

SatsFi has been successfully ported to BNB Chain testnet for enhanced accessibility and broader ecosystem integration.

### Network Information
- **Chain ID:** 97
- **RPC URL:** https://data-seed-prebsc-1-s1.binance.org:8545/
- **Explorer:** https://testnet.bscscan.com
- **Native Currency:** BNB (18 decimals)

### Deployed Contract Addresses (BNB Testnet)
- **Staking Vault:** `0xB45D1fd7FF5067f7ED7F628AAacF7772f377d5D8`
- **Lending Pool:** `0x5F5a7F0e10599dC18bB1007aEBA493D5389e40a7`
- **stCORE Token:** `0x2CD0f925B6d2DDEA0D3FE3e0F6b3Ba5d87e17073`

### Why BNB Chain?
- **High Performance:** Fast block times and low transaction costs
- **Ecosystem Integration:** Access to PancakeSwap, Venus, and other DeFi protocols
- **Developer-Friendly:** Comprehensive tooling and documentation
- **Fairness & Accessibility:** Open ecosystem with strong community support

---

## 🚨 The Problem

DeFi is powerful — but most people never use it.
- **Complexity:** Too many protocols, wallets, and technical terms (gas fees, APYs, staking vs. lending).
- **High Stakes:** One small mistake can lead to a permanent loss of funds.
- **Intimidating:** The onboarding process is overwhelming for newcomers.

---

## ✅ The Solution: SatsFi

SatsFi makes DeFi **as simple as sending a message**.

### Just type:
> "Stake my CORE for the best yield"

### SatsFi will:
- **Understand Your Intent:** Uses the Gemini API to comprehend plain-language commands.
- **Suggest the Best Strategy:** Analyzes live APYs from CoreDAO protocols to find the optimal choice.
- **Secure Confirmation:** Lets you confirm and sign the transaction securely from your connected wallet.
- **Display Results:** Shows your earnings and positions in a clean, intuitive dashboard.

---

## 🚀 Key Features

### 🧠 Powered by AI (Gemini)
- **Intent Understanding:** Deciphers user prompts to determine financial goals.
- **Personalized Recommendations:** Suggests DeFi strategies tailored to the user.
- **Concept Explanations:** Clarifies DeFi concepts in plain English.
- **Dynamic Action Mapping:** Translates user intent into smart contract interactions.

### 🧱 Built on CoreDAO & BNB Chain
- **Multi-Chain Support:** Deployed on both CoreDAO testnet and BNB Chain testnet.
- **Native Tokens:** Leverages **CORE** and **stCORE** within the CoreDAO ecosystem.
- **Live on Testnets:** Deployed and running on both **TCORE2 Testnet** and **BNB Chain Testnet**.
- **EVM-Compatible:** Built with Solidity for staking and lending smart contracts.
- **Fast & Secure:** Benefits from both networks' low gas fees and security features.

### 🗂️ MongoDB Offchain Layer
- **Data Storage:** Persists user prompts, AI outputs, and transaction logs.
- **Enhanced User Experience:** Enables analytics, user context, and real-time dashboard data.
- **Portfolio Aggregation:** Aggregates wallet activity and portfolio data for a comprehensive overview.

---

## 🧪 What Can You Do on Day One?

- ✅ Stake CORE and earn yield via stCORE.
- ✅ Ask: "What's the best way to earn on my crypto?"
- ✅ Borrow against your collateral (coming soon).
- ✅ Track your full portfolio performance in a clean dashboard.
- ✅ Learn DeFi concepts — explained by the AI, in context.
- ✅ Switch between CoreDAO and BNB Chain testnets seamlessly.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, Wagmi, Ethers.js, TailwindCSS, shadcn/ui
- **Backend:** Node.js, Express, MongoDB
- **Smart Contracts:** Solidity, Hardhat
- **AI Layer:** Gemini API (custom prompt engineering)
- **Auth:** Civic Embedded Wallet + wagmi for Web3 wallet connection
- **Deployment:** Vercel (Frontend), Render (Backend)

---

## 🏁 Getting Started

Follow these instructions to set up and run the project locally.

### 1. Prerequisites
- [Node.js](https://nodejs.org/en/) (v18 or later)
- [npm](https://nodejs.org/en/) (or pnpm)
- [MongoDB](https://www.mongodb.com/try/download/community) account and a connection URI.

### 2. Clone the Repository
```bash
git clone https://github.com/jishnu-baruah/Satsfi-H4B
cd Satsfi-H4B
```

### 3. Setup Backend
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory and add the following variables:
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
Create a `.env.local` file in the `frontend` directory and add the following variable:
```env
NEXT_PUBLIC_API_URL="http://localhost:5001/api"
```
Run the frontend development server:
```bash
npm run dev
```
The frontend will be available at `http://localhost:3000`.

### 5. Setup Smart Contracts
The contracts are deployed on both CoreDAO and BNB Chain testnets. To compile or redeploy them yourself:
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
To deploy to CoreDAO testnet:
```bash
npm run hardhat run scripts/deploy.ts --network core_testnet
```
To deploy to BNB Chain testnet:
```bash
npm run hardhat run scripts/deploy.ts --network bnb_testnet
```

---

## 📝 Deployed Smart Contract Addresses

### CoreDAO Testnet (TCORE2)
- **Staking Vault:** `0xE3451D1081232BE36b257F712120B8d78f07e5F6`
- **Lending Pool:** `0xFcE44C16e18F98d58dDC85b8c803B9CaBFeBf542`
- **stCORE Token:** `0x5bDf8f6F713eb68E8740B6c764C389EE5a277990`

### BNB Chain Testnet
- **Staking Vault:** `0xB45D1fd7FF5067f7ED7F628AAacF7772f377d5D8`
- **Lending Pool:** `0x5F5a7F0e10599dC18bB1007aEBA493D5389e40a7`
- **stCORE Token:** `0x2CD0f925B6d2DDEA0D3FE3e0F6b3Ba5d87e17073`

---

## 💡 Why It Matters

SatsFi is not just a wallet or dashboard — it's a **Web3-native AI companion** that turns any user's intent into secure, optimized onchain actions.

It's **DeFi that listens. DeFi that guides. DeFi that works — instantly.**

---

## 📌 Coming Soon

- Yield farming across multiple protocols
- More token support (USDT, BTC wrappers)
- Onchain AI agent for automated portfolio optimization
- Fully embedded Civic wallet transactions
- Cross-chain portfolio management

---

## 🙌 Built With ❤️ for CoreDAO + BNB Chain + Civic + Gemini
SatsFi is a submission to the **Hack4Bengal 4.0** — aiming to simplify DeFi onboarding, maximize onchain yield, and bring millions into Web3 with AI-powered guidance. #   S a t s f i - B N B 
 
 