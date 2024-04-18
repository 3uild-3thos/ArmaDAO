"use client";

// components
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import LabelValue from "@/components/ui/label-value";
import MintButton from "@/mint/mint-button";
import MintStatus, { EMintStatus } from "@/mint/mint-status";

// lib
import Bokeh from "@/components/ui/bokeh";
import getConfig from "@/lib/blockchain-config";
import shortenAddress from "@/lib/helpers/shortenAddress";
import { BadgeCheckIcon } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";

function Mint() {
  const { armadaNftUri, armadaNftPrice } = getConfig();

  return (
    <div className="flex flex-col gap-10">
      <p className="text-xl font-bold">Mint an Armada NFT</p>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start z-10">
        <div className="relative flex justify-center min-h-[30rem]">
          <Bokeh className="m-auto opacity-50 from-magenta w-80 h-80 z-[-1]" />
          <Suspense fallback={<Loading />}>
            <iframe
              src={armadaNftUri}
              className="w-full rounded-2xl shadow-xl border-default"
            />
          </Suspense>
        </div>

        <div className="flex flex-col gap-8">
          <Card>
            <CardContent>
              <div className="grid grid-cols-2 gap-8">
                <LabelValue
                  label="Status"
                  value={<MintStatus status={EMintStatus.MINT_PAUSED} />}
                />
                <LabelValue label="Mint Phase" value="Early Access" />
                <LabelValue
                  label="Price"
                  value={
                    <div className="flex gap-2 items-center">
                      <Image
                        src={"/assets/icons/solana.svg"}
                        alt={"SOL"}
                        width={100}
                        height={100}
                        className="w-6 h-fit"
                      />
                      {armadaNftPrice === 0
                        ? "Free"
                        : armadaNftPrice.toFixed(2)}
                    </div>
                  }
                />
                <LabelValue
                  label="Standard"
                  value="Metaplex Core"
                  href="https://developers.metaplex.com/core"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between mt-8">
              <MintButton />
            </CardFooter>
          </Card>

          <Card>
            <CardContent>
              <div className="flex flex-col gap-6">
                <LabelValue
                  label="Mint Address"
                  value={shortenAddress(
                    "EzhM1Anf8sNxMPJwSVdUf5SCtULkhpKDuzWxocBsF2cA"
                  )}
                  href="https://explorer.solana.com/address/EzhM1Anf8sNxMPJwSVdUf5SCtULkhpKDuzWxocBsF2cA?cluster=devnet"
                />

                <div className="flex flex-col gap-8 text-muted">
                  <p>
                    The Armada NFT will be your gateway to a fully
                    decentralized, transparent, and community-driven ecosystem.
                    By holding or staking an Armada NFT, you shall be eligible
                    to the following:
                  </p>
                  <div className="flex items-center gap-2">
                    <BadgeCheckIcon className="text-success" /> Create a Fleet
                    DAO
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Mint;
