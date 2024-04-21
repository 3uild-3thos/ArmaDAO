import {
  createCollectionV1,
  pluginAuthorityPair,
  ruleSet,
} from "@metaplex-foundation/mpl-core";
import {
  createSignerFromKeypair,
  generateSigner,
  publicKey,
  signerIdentity,
} from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { base58 } from "@metaplex-foundation/umi/serializers";
import dotenv from "dotenv";
import getConfig from "../utils/getConfig";
import wallet from "../wallet.json";
import metadata from "./metadata.json";
dotenv.config();

// npx ts-node create-armada-nft-core
// 6PKWbigBGxbAAJnv42L5BDsTymoaFYMWaQXxveMmxs3o

const config = getConfig();

const umi = createUmi(config.rpcUrl);
let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(signerIdentity(signer));
const collection = generateSigner(umi);

(async () => {
  try {
    const tx = await createCollectionV1(umi, {
      collection: collection,
      name: metadata.name,
      uri: config.armadaNftUri,
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
                address: publicKey(config.armadaNftCreator),
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
          //     publicKey(config.proposalProgram),
          //     publicKey(config.stakingProgram),
          //     publicKey(config.daoProgram),
          //     publicKey(config.votingProgram),
          //   ],
          // },
        }),

        // THESE PLUGINS ARE ASSET-LEVEL, NOT COLLECTION-LEVEL
        // /**
        //  * TransferDelegate Plugin
        //  */
        // pluginAuthorityPair({
        //   type: "TransferDelegate",
        // }),

        // /**
        //  * BurnDelegate Plugin
        //  */
        // pluginAuthorityPair({
        //   type: "BurnDelegate",
        // }),

        // /**
        //  * FreezeDelegate Plugin
        //  */
        // pluginAuthorityPair({
        //   type: "FreezeDelegate",
        //   data: {
        //     frozen: false,
        //   },
        // }),
      ],
    }).sendAndConfirm(umi);
    const signature = base58.deserialize(tx.signature);

    console.log("Collection created: ", collection.publicKey);
    console.log("Tx Signature: ", signature[0]);
    // Enpmmpze3yJYwo6LMGqn7XJ3sGVWeX6BknADvM56DunC
  } catch (e) {
    console.log("Error creating collection ", e);
  }
})();
