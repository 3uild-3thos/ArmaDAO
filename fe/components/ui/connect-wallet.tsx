"use client";

import { Button } from "@/components/ui/button";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { ClientOnly } from "remix-utils/client-only";

interface IConnectWallet {
  fullWidth?: boolean;
}

export const ConnectWallet = ({ fullWidth = false }: IConnectWallet) => {
  const style = {
    background: "transparent",
    borderRadius: "0.5rem",
    border: "1px solid #e5e5e570",
    fontSize: "0.875rem",
    paddingX: "24px",
    height: "2.5rem",
    width: fullWidth ? "100%" : "10rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <ClientOnly
      fallback={
        <Button variant="outline" size="sm" disabled>
          Loading...
        </Button>
      }
    >
      {() => <WalletMultiButton style={style} />}
    </ClientOnly>
  );
};
