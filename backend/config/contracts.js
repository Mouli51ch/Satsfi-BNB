// Contract addresses and network configuration
// Update these addresses after deploying to BNB testnet

// Network Configuration
const NETWORK_CONFIG = {
  // CoreDAO Testnet (fallback)
  core_testnet: {
    chainId: 1114,
    rpcUrl: "https://rpc.test2.btcs.network",
    explorer: "https://scan.test2.btcs.network",
    nativeCurrency: {
      name: "Test Core",
      symbol: "tCORE",
      decimals: 18,
    },
  },
  // BNB Testnet (primary)
  bnb_testnet: {
    chainId: 97,
    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    explorer: "https://testnet.bscscan.com",
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
  },
};

// Contract Addresses
// TODO: Update these addresses after deploying to BNB testnet
const CONTRACT_ADDRESSES = {
  // CoreDAO Testnet addresses (current)
  core_testnet: {
    STAKING_VAULT_ADDRESS: "0xE3451D1081232BE36b257F712120B8d78f07e5F6",
    LENDING_POOL_ADDRESS: "0xFcE44C16e18F98d58dDC85b8c803B9CaBFeBf542",
    STCORE_ADDRESS: "0x5bDf8f6F713eb68E8740B6c764C389EE5a277990",
  },
  // BNB Testnet addresses (to be updated after deployment)
  bnb_testnet: {
    STAKING_VAULT_ADDRESS: "0xB45D1fd7FF5067f7ED7F628AAacF7772f377d5D8",
    LENDING_POOL_ADDRESS: "0x5F5a7F0e10599dC18bB1007aEBA493D5389e40a7",
    STCORE_ADDRESS: "0x2CD0f925B6d2DDEA0D3FE3e0F6b3Ba5d87e17073",
  },
};

// Default network (change this to switch between networks)
const DEFAULT_NETWORK = "bnb_testnet";

// Helper functions
const getNetworkConfig = (network = DEFAULT_NETWORK) => {
  return NETWORK_CONFIG[network] || NETWORK_CONFIG[DEFAULT_NETWORK];
};

const getContractAddresses = (network = DEFAULT_NETWORK) => {
  return CONTRACT_ADDRESSES[network] || CONTRACT_ADDRESSES[DEFAULT_NETWORK];
};

const getRpcUrl = (network = DEFAULT_NETWORK) => {
  return getNetworkConfig(network).rpcUrl;
};

const getExplorerUrl = (network = DEFAULT_NETWORK) => {
  return getNetworkConfig(network).explorer;
};

module.exports = {
  NETWORK_CONFIG,
  CONTRACT_ADDRESSES,
  DEFAULT_NETWORK,
  getNetworkConfig,
  getContractAddresses,
  getRpcUrl,
  getExplorerUrl,
}; 