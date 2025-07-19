# 🚀 SatsFi BNB Chain Testnet Deployment Guide

This guide will walk you through deploying SatsFi to BNB Chain testnet.

## 📋 Prerequisites

1. **Node.js** (v18 or later)
2. **npm** package manager
3. **MetaMask** or another Web3 wallet
4. **BNB testnet tokens** (get from [BNB Chain Faucet](https://testnet.binance.org/faucet-smart))
5. **Private key** from your testnet wallet

## 🔧 Step 1: Environment Setup

### 1.1 Create Environment File
Navigate to the `contracts/` directory and create a `.env` file:

```bash
cd contracts
```

Create `.env` file with the following content:
```env
# BNB Testnet Deployment
PRIVATE_KEY=your_testnet_wallet_private_key

# Optional: BSCScan API Key for contract verification
BSCSCAN_API_KEY=your_bscscan_api_key
```

**⚠️ Important:** 
- Replace `your_testnet_wallet_private_key` with your actual private key
- Never commit this file to version control
- Make sure you have BNB testnet tokens in your wallet

### 1.2 Get BNB Testnet Tokens
1. Visit [BNB Chain Faucet](https://testnet.binance.org/faucet-smart)
2. Connect your wallet
3. Request testnet BNB tokens

## 🏗️ Step 2: Deploy Smart Contracts

### 2.1 Install Dependencies
```bash
cd contracts
npm install
```

### 2.2 Compile Contracts
```bash
npm run compile
```

### 2.3 Deploy to BNB Testnet
```bash
npm run deploy:bnb
```

### 2.4 Expected Output
You should see output similar to:
```
Deploying contracts with the account: 0x...
Deploying to network: bnb_testnet Chain ID: 97
Using price feed address: 0x...
stCORE deployed to: 0x...
StakingVault deployed to: 0x...
LendingPool deployed to: 0x...
```

## 🔄 Step 3: Update Configuration Files

### 3.1 Update Backend Configuration
Edit `backend/config/contracts.js` and replace the placeholder addresses:

```javascript
// BNB Testnet addresses (to be updated after deployment)
bnb_testnet: {
  STAKING_VAULT_ADDRESS: "0x...", // Replace with actual address
  LENDING_POOL_ADDRESS: "0x...", // Replace with actual address
  STCORE_ADDRESS: "0x...", // Replace with actual address
},
```

### 3.2 Update Frontend Configuration
Edit `frontend/lib/config.ts` and replace the placeholder addresses:

```typescript
[NETWORKS.BNB_TESTNET]: {
  STAKING_VAULT_ADDRESS: "0x...", // Replace with actual address
  LENDING_POOL_ADDRESS: "0x...", // Replace with actual address
  STCORE_ADDRESS: "0x...", // Replace with actual address
},
```

### 3.3 Update README.md
Update the contract addresses in the README.md file under the "BNB Chain Testnet" section.

## 🧪 Step 4: Testing

### 4.1 Connect MetaMask to BNB Testnet
1. Open MetaMask
2. Add network with these details:
   - **Network Name:** BNB Chain Testnet
   - **RPC URL:** https://data-seed-prebsc-1-s1.binance.org:8545/
   - **Chain ID:** 97
   - **Currency Symbol:** BNB
   - **Block Explorer:** https://testnet.bscscan.com

### 4.2 Test Frontend
1. Start the frontend: `cd frontend && npm run dev`
2. Connect your wallet to BNB testnet
3. Test the following features:
   - ✅ Wallet connection via Wagmi
   - ✅ AI prompt-to-stake functionality
   - ✅ Smart contract interactions (stake, view, dashboard)
   - ✅ Proper BNB testnet explorer links

### 4.3 Test Backend
1. Start the backend: `cd backend && npm start`
2. Test API endpoints with BNB testnet addresses
3. Verify portfolio data fetching works correctly

## 🔍 Step 5: Verification (Optional)

If you have a BSCScan API key, you can verify your contracts:

```bash
npm run verify:bnb
```

## 📊 Step 6: Monitor Deployment

### 6.1 Check Contract Deployment
- Visit [BSCScan Testnet](https://testnet.bscscan.com)
- Search for your deployed contract addresses
- Verify contract interactions

### 6.2 Monitor Transactions
- Check transaction history in your wallet
- Verify gas fees and transaction status
- Test contract functions through the frontend

## 🚨 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| **Insufficient BNB for gas** | Get more testnet BNB from the faucet |
| **RPC connection failed** | Check if the RPC URL is accessible |
| **Contract deployment failed** | Verify private key and network configuration |
| **Frontend not connecting** | Ensure MetaMask is on BNB testnet |
| **Backend errors** | Check contract addresses in config files |

### Debug Commands
```bash
# Check network connection
npx hardhat console --network bnb_testnet

# Run tests
npm run test

# Check contract compilation
npm run compile
```

## 📝 Final Checklist

- [ ] Smart contracts deployed successfully
- [ ] Contract addresses updated in all config files
- [ ] Frontend connects to BNB testnet
- [ ] Backend uses correct contract addresses
- [ ] All features tested and working
- [ ] README.md updated with new addresses
- [ ] MetaMask configured for BNB testnet

## 🎉 Success!

Once all steps are completed, SatsFi will be successfully running on BNB Chain testnet with:
- Multi-chain support (CoreDAO + BNB Chain)
- Updated contract addresses
- Proper network configuration
- Full functionality on both networks

## 🔄 Switching Between Networks

To switch between CoreDAO and BNB Chain testnets:

1. **Frontend:** Change the default network in `frontend/lib/config.ts`
2. **Backend:** Change the default network in `backend/config/contracts.js`
3. **MetaMask:** Switch between networks in your wallet

Both networks are fully supported and can be used interchangeably! 