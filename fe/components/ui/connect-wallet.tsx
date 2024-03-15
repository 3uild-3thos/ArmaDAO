"use client";

import { Button } from "@/components/ui/button";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { ClientOnly } from "remix-utils/client-only";

export const ConnectWallet = () => {
  const style = {
    background: "transparent",
    borderRadius: "0.5rem",
    border: "1px solid #e5e5e570",
    fontSize: "0.875rem",
    paddingX: "24px",
    height: "2.5rem",
    width: "9rem",
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
