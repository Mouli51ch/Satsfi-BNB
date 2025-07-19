"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig, http } from 'wagmi';
import type { Chain } from 'wagmi/chains';

export const coreDaoTestnet = {
  id: 1114,
  name: 'Core Blockchain TestNet',
  nativeCurrency: {
    name: 'Test Core',
    symbol: 'tCORE',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://rpc.test2.btcs.network'] },
  },
  blockExplorers: {
    default: { name: 'CoreScan', url: 'https://scan.test2.btcs.network' },
  },
} as const satisfies Chain;

export const bnbTestnet = {
  id: 97,
  name: 'BNB Chain Testnet',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://data-seed-prebsc-1-s1.binance.org:8545/'] },
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
} as const satisfies Chain;

const wagmiConfig = createConfig({
  chains: [bnbTestnet, coreDaoTestnet], // BNB testnet first, CoreDAO as fallback
  transports: {
    [bnbTestnet.id]: http(),
    [coreDaoTestnet.id]: http(),
  },
});

const queryClient = new QueryClient();

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
          {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
} 