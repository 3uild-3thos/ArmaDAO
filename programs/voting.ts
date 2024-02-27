import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, BN } from "@coral-xyz/anchor";
import { getVotingProgram } from "@/utils";
import { NEXT_PUBLIC_VOTING_ID } from "@/env";

export function getVotingAuthKey(config: PublicKey) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("auth"), config.toBuffer()],
    new PublicKey(NEXT_PUBLIC_VOTING_ID)
  )[0];
}

export function getVotingConfigKey(config: PublicKey) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("config"), config.toBuffer()],
    new PublicKey(NEXT_PUBLIC_VOTING_ID)
  )[0];
}

export async function initializeVotingProgram(
  provider: AnchorProvider,
  seed: BN,
  stakingPublicKey: PublicKey,
  proposalPublicKey: PublicKey,
  authKey: PublicKey,
  configKey: PublicKey
) {
  const program = getVotingProgram(provider);
  return await program.methods
    .initialize(seed, stakingPublicKey, proposalPublicKey)
    .accounts({ config: configKey, auth: authKey })
    .instruction();
}
