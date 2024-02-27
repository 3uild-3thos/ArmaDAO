import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, BN } from "@coral-xyz/anchor";
import { getProposalProgram } from "@/utils";
import { NEXT_PUBLIC_PROPOSAL_ID } from "@/env";

export function getProposalConfigKey(seed: BN) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("config"), seed.toArrayLike(Buffer, "le", 8)],
    new PublicKey(NEXT_PUBLIC_PROPOSAL_ID)
  )[0];
}

export async function initializeProposalProgram(
  provider: AnchorProvider,
  seed: BN,
  stakingPublicKey: PublicKey,
  daoPublicKey: PublicKey
) {
  const program = getProposalProgram(provider);
  return await program.methods
    .initialize(seed, stakingPublicKey, daoPublicKey)
    .accounts({})
    .instruction();
}
