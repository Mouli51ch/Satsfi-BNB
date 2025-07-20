import StakingVault from "./abi/StakingVault.json";
import LendingPool from "./abi/LendingPool.json";

export const API_URL = "https://satfi-h4b.onrender.com/api";

export const NETWORKS = {
  BNB_TESTNET: 97,
} as const;

export const DEFAULT_NETWORK = NETWORKS.BNB_TESTNET;

export const CONTRACT_ADDRESSES = {
  [NETWORKS.BNB_TESTNET]: {
    STAKING_VAULT_ADDRESS: "0xB45D1fd7FF5067f7ED7F628AAacF7772f377d5D8",
    LENDING_POOL_ADDRESS: "0x5F5a7F0e10599dC18bB1007aEBA493D5389e40a7",
    STBNB_ADDRESS: "0x2CD0f925B6d2DDEA0D3FE3e0F6b3Ba5d87e17073",
  },
} as const;

export const getContractAddresses = (networkId: number = DEFAULT_NETWORK) => {
  return CONTRACT_ADDRESSES[networkId as keyof typeof CONTRACT_ADDRESSES] || CONTRACT_ADDRESSES[DEFAULT_NETWORK];
};

export const STAKING_VAULT_ADDRESS = getContractAddresses().STAKING_VAULT_ADDRESS;
export const LENDING_POOL_ADDRESS = getContractAddresses().LENDING_POOL_ADDRESS;
export const STBNB_ADDRESS = getContractAddresses().STBNB_ADDRESS;

export const StakingVaultABI = StakingVault;
export const LendingPoolABI = LendingPool; 