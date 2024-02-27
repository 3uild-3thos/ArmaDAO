import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, BN } from "@coral-xyz/anchor";
import { getDaoProgram } from "@/utils";
import { NEXT_PUBLIC_DAO_ID } from "@/env";

export async function getAllDaoConfig(provider: AnchorProvider) {
  const program = getDaoProgram(provider);
  return await program.account.daoConfig.all();
}

export function getDaoTreasury(config: PublicKey) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("treasury"), config.toBuffer()],
    new PublicKey(NEXT_PUBLIC_DAO_ID)
  )[0];
}

export function getDaoAuth(config: PublicKey) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("auth"), config.toBuffer()],
    new PublicKey(NEXT_PUBLIC_DAO_ID)
  )[0];
}

export function getDaoConfigKey(seed: PublicKey) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("config"), seed.toBuffer()],
    new PublicKey(NEXT_PUBLIC_DAO_ID)
  )[0];
}

export async function initializeDaoProgram(
  provider: AnchorProvider,
  seed: BN,
  proposalFee: Number,
  minQuorum: Number,
  minTreshold: Number,
  maxExpiry: Number,
  minStake: Number,
  minPrevotingPeriod: Number,
  proposalPublicKey: PublicKey,
  votingPublicKey: PublicKey,
  stakingPublicKey: PublicKey,
  collectionMind: PublicKey,
  authKey: PublicKey,
  treasuryKey: PublicKey,
  configKey: PublicKey
) {
  const program = getDaoProgram(provider);
  return await program.methods
    .initialize(
      seed,
      new BN(proposalFee),
      new BN(minQuorum),
      new BN(minTreshold),
      new BN(maxExpiry),
      new BN(minStake),
      new BN(minPrevotingPeriod),
      proposalPublicKey,
      votingPublicKey,
      stakingPublicKey,
      collectionMind
    )
    .accounts({
      config: configKey,
      treasury: treasuryKey,
      auth: authKey,
    })
    .instruction();
}
