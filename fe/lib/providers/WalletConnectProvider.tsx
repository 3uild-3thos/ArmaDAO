"use client";

import getConfig from "@/lib/blockchain-config";
import {
  ConnectionProvider,
  WalletProvider,
  WalletProviderProps,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { ReactNode, useMemo } from "react";

export const WalletConnectProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const wallets = useMemo(
    () => [new PhantomWalletAdapter()],
    []
  ) as unknown as WalletProviderProps["wallets"];

  return (
    <ConnectionProvider endpoint={getConfig().rpcUrl}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
