import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, BN, Program } from "@coral-xyz/anchor";
import getConfig from "@/lib/blockchain-config";
import { Dao, IDL } from "./idl";

// TODO: Create abstractions for creating the instructions
// initialize;
// initialize_sub_dao;
// initialize_sub_dao_token;
// add_proposal;
// add_proposal_sub_dao;

export const getDaoProgram = (provider: AnchorProvider): Program<Dao> => {
  return new Program<Dao>(IDL, new PublicKey(getConfig().daoProgram), provider);
};

export async function getAllDaoConfig(provider: AnchorProvider) {
  const program = getDaoProgram(provider);
  return await program.account.daoConfig.all();
}

export async function getAllStakeState(provider: AnchorProvider) {
  const program = getDaoProgram(provider);
  return await program.account.stakeState.all();
}
