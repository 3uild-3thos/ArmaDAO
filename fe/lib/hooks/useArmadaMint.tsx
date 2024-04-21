"use client";

// lib
import getConfig from "@/lib/blockchain-config";
import { useStore } from "@/lib/zustand/store";

// component
import { useToast } from "@/components/ui/use-toast";

// metaplex
import { dasApi } from "@metaplex-foundation/digital-asset-standard-api";
import {
  createV1,
  pluginAuthorityPair,
  ruleSet,
} from "@metaplex-foundation/mpl-core";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { base58 } from "@metaplex-foundation/umi/serializers";

// wallet adapter
import { generateSigner, publicKey } from "@metaplex-foundation/umi";
import { useWallet } from "@solana/wallet-adapter-react";

const useArmadaMint = () => {
  const {
    armadaNftAddress,
    armadaNftUri,
    rpcUrl,
    armadaNftCreator,
    proposalProgram,
    stakingProgram,
    daoProgram,
    votingProgram,
  } = getConfig();
  const wallet = useWallet();
  const {
    isLoading,
    setIsLoading,
    setArmadaNftName,
    setTxHash,
    armadaNftName,
    txHash,
  } = useStore();
  const { toast } = useToast();

  const umi = createUmi(rpcUrl);
  umi.use(walletAdapterIdentity(wallet));
  umi.use(dasApi());

  const mint = async () => {
    setIsLoading(true);
    let page: number | boolean = 1;
    let assetList = [];

    try {
      while (page) {
        const result = await umi.rpc.getAssetsByGroup({
          groupKey: "collection",
          groupValue: armadaNftAddress,
          page: page,
          limit: 1000,
          sortBy: {
            sortBy: "created",
            sortDirection: "asc",
          },
        });
        if (!result) {
          throw new Error(
            `Failed to fetch assets for collection ${armadaNftAddress}`
          );
        }

        assetList.push(...result.items);
        if (result.total !== 1000) {
          page = false;
        } else {
          page++;
        }
      }

      let numId = assetList.length + 1;
      const nftName = `Armada DAO #${numId}`;
      const asset = generateSigner(umi);

      const tx = await createV1(umi, {
        asset: asset,
        collection: publicKey(armadaNftAddress),
        name: nftName,
        uri: armadaNftUri,
        owner: umi.identity.publicKey,
        plugins: [
          /**
           * Royalties Plugin
           */
          pluginAuthorityPair({
            type: "Royalties",
            data: {
              basisPoints: 500, // 5%
              creators: [
                {
                  address: publicKey(armadaNftCreator),
                  percentage: 100,
                },
              ],
              ruleSet: ruleSet("None"),
            },
          }),

          /**
           * Attributes Plugin
           */
          pluginAuthorityPair({
            type: "Attributes",
            data: {
              attributeList: [{ key: "DAO", value: "Armada DAO" }],
            },
          }),

          /**
           * UpdateDelegate Plugin
           */
          pluginAuthorityPair({
            type: "UpdateDelegate",
            // data: {
            //   additionalDelegates: [
            //     publicKey(proposalProgram),
            //     publicKey(stakingProgram),
            //     publicKey(daoProgram),
            //     publicKey(votingProgram),
            //   ],
            // },
          }),

          // THESE PLUGINS ARE ASSET-LEVEL, NOT COLLECTION-LEVEL
          /**
           * TransferDelegate Plugin
           */
          pluginAuthorityPair({
            type: "TransferDelegate",
          }),

          /**
           * BurnDelegate Plugin
           */
          pluginAuthorityPair({
            type: "BurnDelegate",
          }),

          /**
           * FreezeDelegate Plugin
           */
          pluginAuthorityPair({
            type: "FreezeDelegate",
            data: {
              frozen: false,
            },
          }),
        ],
      }).sendAndConfirm(umi);
      const signature = base58.deserialize(tx.signature);

      console.log("Successfully minted:", nftName, signature[0]);

      setArmadaNftName(nftName);
      setTxHash(signature[0]);

      return {
        status: 200,
      };
    } catch (error: any) {
      console.log("Error creating asset", error?.message || error);

      toast({
        variant: "destructive",
        title: "Error",
        description: error?.message || error || "Something went wrong.",
      });

      return {
        status: 500,
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    // actions
    mint,

    // state
    isLoading,
    armadaNftName,
    txHash,
  };
};

export default useArmadaMint;
