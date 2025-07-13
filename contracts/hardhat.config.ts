import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const TCORE2_RPC_URL = process.env.TESTNET_RPC_URL || "https://rpc.test2.btcs.network";
const BNB_TESTNET_RPC_URL = "https://data-seed-prebsc-1-s1.binance.org:8545/";

// Validate private key
const PRIVATE_KEY = process.env.PRIVATE_KEY;
if (!PRIVATE_KEY) {
  throw new Error("Please set your PRIVATE_KEY in the .env file");
}

if (PRIVATE_KEY.length !== 64) {
  throw new Error("Private key must be 64 characters long (32 bytes)");
}

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    core_testnet: {
      url: TCORE2_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 1114,
    },
    bnb_testnet: {
      url: BNB_TESTNET_RPC_URL,
      chainId: 97,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      core_testnet: "your_dummy_api_key", // Replace with a real key if needed for verification
      bnb_testnet: process.env.BSCSCAN_API_KEY || "your_bscscan_api_key"
    },
    customChains: [
      {
        network: "core_testnet",
        chainId: 1114,
        urls: {
          apiURL: "https://scan.test2.btcs.network/api",
          browserURL: "https://scan.test2.btcs.network"
        }
      },
      {
        network: "bnb_testnet",
        chainId: 97,
        urls: {
          apiURL: "https://api-testnet.bscscan.com/api",
          browserURL: "https://testnet.bscscan.com"
        }
      }
    ]
  }
};

export default config;
