"use client";

// components
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import LabelValue from "@/components/ui/label-value";
import MintStatus, { EMintStatus } from "@/mint/mint-status";

// lib
import Loading from "@/app/mint/loading";
import MintButton from "@/app/mint/mint-button";
import Bokeh from "@/components/ui/bokeh";
import { ConnectWallet } from "@/components/ui/connect-wallet";
import getConfig from "@/lib/blockchain-config";
import shortenAddress from "@/lib/helpers/shortenAddress";
import { useWallet } from "@solana/wallet-adapter-react";
import { BadgeCheckIcon } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

function Mint() {
  const { connected } = useWallet();
  const { armadaNftUri, armadaNftPrice, armadaNftAddress, cluster } =
    getConfig();

  return (
    <div className="flex flex-col gap-10">
      <p className="text-xl font-bold">Mint an Armada NFT</p>
      <div className="relative z-10 grid items-start grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative flex justify-center min-h-[30rem]">
          <Bokeh className="m-auto opacity-50 from-magenta w-80 h-80 z-[-1]" />
          <Suspense fallback={<Loading />}>
            <iframe
              src={armadaNftUri}
              className="w-full shadow-xl rounded-2xl border-default"
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
                    <div className="flex items-center gap-2">
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
              {connected ? <MintButton /> : <ConnectWallet fullWidth={true} />}
            </CardFooter>
          </Card>

          <Card>
            <CardContent>
              <div className="flex flex-col gap-6">
                <LabelValue
                  label="Collection Address"
                  value={shortenAddress(armadaNftAddress)}
                  href={`https://explorer.solana.com/address/${armadaNftAddress}?cluster=${cluster}`}
                  target="_blank"
                />

                <div className="flex flex-col gap-6 text-muted">
                  <p>
                    The Armada DAO NFT will be your gateway to a fully
                    decentralized, transparent, and community-driven ecosystem.
                    By holding or staking an Armada NFT, you shall be eligible
                    to the following:
                  </p>
                  <ul className="space-y-4 list-none">
                    <li className="flex items-center gap-2">
                      <BadgeCheckIcon className="text-success" /> Create a Fleet
                      DAO
                    </li>
                    <li className="flex items-center gap-2">
                      <BadgeCheckIcon className="text-success" /> Create a
                      Mothership Proposal
                    </li>
                    <li className="flex items-center gap-2">
                      <BadgeCheckIcon className="text-success" /> Vote on
                      Mothership Proposals
                    </li>
                    <li className="flex items-center gap-2">
                      <BadgeCheckIcon className="text-success" /> *Potentially
                      earn rewards
                    </li>
                  </ul>
                  <p>
                    <span className="font-semibold">Important!</span> You can
                    only create one (1) Fleet DAO per Armada NFT and that your
                    Armada NFT will be bound to your Fleet DAO. This ensures
                    that the Armada DAO ecosystem remains decentralized and
                    fair, and far from any potential abuse.
                  </p>
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
