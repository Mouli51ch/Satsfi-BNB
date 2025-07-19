"use client";
import { useAccount } from "wagmi";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { ConnectWalletButton } from "./ConnectWalletButton";

export function WalletOnboardingModal() {
  const { isConnected } = useAccount();

  return (
    <Dialog open={!isConnected}>
      <DialogContent>
        <DialogTitle>Connect Your Wallet</DialogTitle>
        <ol className="mb-4 list-decimal pl-5 text-gray-400">
          <li>Install a wallet like MetaMask or use your preferred wallet.</li>
          <li>Click the button below to connect your wallet.</li>
          <li>Once connected, you can access all features!</li>
        </ol>
        <ConnectWalletButton />
      </DialogContent>
    </Dialog>
  );
} 