import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, BN } from "@coral-xyz/anchor";
import { getStakingProgram } from "@/utils";
import { NEXT_PUBLIC_STAKING_ID } from "@/env";

export function getStakingConfigKey(seed: BN) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("config"), seed.toArrayLike(Buffer, "le", 8)],
    new PublicKey(NEXT_PUBLIC_STAKING_ID)
  )[0];
}

export async function initializeStakingProgram(
  provider: AnchorProvider,
  seed: BN,
  issuePublickey: PublicKey
) {
  // const program = getStakingProgram(provider);
  // return await program.methods
  //   .initialize(seed, issuePublickey)
  //   .accounts({})
  //   .instruction();
}
