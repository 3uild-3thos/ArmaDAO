import { BaseSignInMessageSignerWalletAdapter } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";

export const WALLETS: BaseSignInMessageSignerWalletAdapter[] = [
  new UnsafeBurnerWalletAdapter(),
];
