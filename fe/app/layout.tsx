"use client";
import "./globals.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { NEXT_PUBLIC_RPC_URL } from "@/env";
import { WALLETS } from "@/config";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [rendered, setrendered] = useState(false);
  useEffect(() => {
    setrendered(true);
    return () => {
      setrendered(false);
    };
  }, [rendered]);

  return (
    <html lang="en">
      <body>
        <ConnectionProvider endpoint={NEXT_PUBLIC_RPC_URL}>
          <WalletProvider wallets={WALLETS} autoConnect>
            <WalletModalProvider>
              {rendered ? children : <></>}
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </body>
    </html>
  );
}
