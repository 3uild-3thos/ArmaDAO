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
import dotenv from "dotenv";
dotenv.config();

const umi = createUmi("https://api.devnet.solana.com");
const wallet = JSON.parse(process.env.WALLET_PRIVKEY || "");

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(signerIdentity(signer));

const collectionSigner = generateSigner(umi);

const creator1 = publicKey("11111111111111111111111111111111");

(async () => {
  await createCollectionV1(umi, {
    collection: collectionSigner,
    name: "My NFT",
    uri: "https://example.com/my-nft.json",
    plugins: [
      pluginAuthorityPair({
        type: "Royalties",
        data: {
          basisPoints: 500, // 5%
          creators: [
            {
              address: creator1,
              percentage: 100,
            },
          ],
          ruleSet: ruleSet("None"), // Compatibility rule set
        },
      }),
    ],
  }).sendAndConfirm(umi);
})();
