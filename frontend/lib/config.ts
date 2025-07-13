import StakingVault from "./abi/StakingVault.json";
import LendingPool from "./abi/LendingPool.json";

// To bypass persistent environment variable loading issues in the Next.js dev server,
// we are temporarily hardcoding the API URL. This ensures all components
// receive the exact same, correct value.
export const API_URL = "https://satfi-h4b.onrender.com/api";

// Network configuration
export const NETWORKS = {
  CORE_TESTNET: 1114,
  BNB_TESTNET: 97,
} as const;

// Default network (change this to switch between networks)
export const DEFAULT_NETWORK = NETWORKS.BNB_TESTNET;

// Contract addresses for different networks
// TODO: Update BNB testnet addresses after deployment
export const CONTRACT_ADDRESSES = {
  [NETWORKS.CORE_TESTNET]: {
    STAKING_VAULT_ADDRESS: "0xE3451D1081232BE36b257F712120B8d78f07e5F6",
    LENDING_POOL_ADDRESS: "0xFcE44C16e18F98d58dDC85b8c803B9CaBFeBf542",
    STCORE_ADDRESS: "0x5bDf8f6F713eb68E8740B6c764C389EE5a277990",
  },
  [NETWORKS.BNB_TESTNET]: {
    STAKING_VAULT_ADDRESS: "0xB45D1fd7FF5067f7ED7F628AAacF7772f377d5D8",
    LENDING_POOL_ADDRESS: "0x5F5a7F0e10599dC18bB1007aEBA493D5389e40a7",
    STCORE_ADDRESS: "0x2CD0f925B6d2DDEA0D3FE3e0F6b3Ba5d87e17073",
  },
} as const;

// Helper function to get addresses for current network
export const getContractAddresses = (networkId: number = DEFAULT_NETWORK) => {
  return CONTRACT_ADDRESSES[networkId as keyof typeof CONTRACT_ADDRESSES] || CONTRACT_ADDRESSES[DEFAULT_NETWORK];
};

// Current addresses (for backward compatibility)
export const STAKING_VAULT_ADDRESS = getContractAddresses().STAKING_VAULT_ADDRESS;
export const LENDING_POOL_ADDRESS = getContractAddresses().LENDING_POOL_ADDRESS;
export const STCORE_ADDRESS = getContractAddresses().STCORE_ADDRESS;

export const StakingVaultABI = StakingVault;
export const LendingPoolABI = LendingPool; 