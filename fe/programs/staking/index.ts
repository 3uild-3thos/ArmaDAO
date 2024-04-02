import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import getConfig from "@/lib/blockchain-config";
import { Staking, IDL } from "./idl";

// TODO: Create abstractions for creating the instructions
// init_stake;
// init_stake_nft;
// stake_tokens;
// stake_nft;
// unstake_tokens;
// unstake_nft;
// close_stake;
// close_stake_nft;
// init_stake_sub_dao;
// init_stake_sub_dao_nft;
// stake_tokens_sub_dao;
// stake_nft_sub_dao;
// unstake_tokens_sub_dao;
// unstake_nft_sub_dao;
// close_stake_sub_dao;
// close_stake_nft_sub_dao;
// add_account;
// remove_account;
// add_account_sub_dao;
// remove_account_sub_dao;

export const getStakingProgram = (
  provider: AnchorProvider
): Program<Staking> => {
  return new Program<Staking>(
    IDL,
    new PublicKey(getConfig().stakingProgram),
    provider
  );
};

export async function getAllDaoConfig(provider: AnchorProvider) {
  const program = getStakingProgram(provider);
  return await program.account.daoConfig.all();
}

export async function getAllStakeState(provider: AnchorProvider) {
  const program = getStakingProgram(provider);
  return await program.account.stakeState.all();
}
