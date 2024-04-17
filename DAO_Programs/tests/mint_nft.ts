import * as anchor from "@coral-xyz/anchor";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  generateSigner,
  keypairIdentity,
  percentAmount,
  sol,
} from "@metaplex-foundation/umi";
import { mplToolbox } from "@metaplex-foundation/mpl-toolbox";
import { createNft } from "@metaplex-foundation/mpl-token-metadata";

describe("mint_nft", () => {
  // CAUTION: THIS IS FOR LOCALNET ONLY
  // const provider = anchor.AnchorProvider.local();
  // anchor.setProvider(provider);
  // const connection = provider.connection;
  // const UMI_INSTANCE = createUmi(connection.rpcEndpoint);
  // const minter = generateSigner(UMI_INSTANCE);
  // UMI_INSTANCE.use(keypairIdentity(minter));
  // UMI_INSTANCE.use(mplToolbox());
  // it("Should airdrop 10 SOL", async () => {
  //   await UMI_INSTANCE.rpc.airdrop(minter.publicKey, sol(10));
  // });
  // it("Should mint NFT", async () => {
  //   const mint = generateSigner(UMI_INSTANCE);
  //   const tx = await createNft(UMI_INSTANCE, {
  //     mint,
  //     name: "ARMADA",
  //     symbol: "ARMD",
  //     uri: "",
  //     sellerFeeBasisPoints: percentAmount(1),
  //   }).sendAndConfirm(UMI_INSTANCE);
  //   console.log(tx);
  // });
});
