import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import getConfig from "@/lib/blockchain-config";
import { Voting, IDL } from "./idl";

// TODO: Create abstractions for creating the instructions
// vote;
// remove_vote;
// cleanup_vote;
// vote_sub_dao;
// remove_vote_sub_dao;
// cleanup_vote_sub_dao;

export const getVotingProgram = (provider: AnchorProvider): Program<Voting> => {
  return new Program<Voting>(
    IDL,
    new PublicKey(getConfig().votingProgram),
    provider
  );
};

export async function getAllDaoConfig(provider: AnchorProvider) {
  const program = getVotingProgram(provider);
  return await program.account.daoConfig.all();
}

export async function getAllStakeState(provider: AnchorProvider) {
  const program = getVotingProgram(provider);
  return await program.account.stakeState.all();
}

export async function getAllProposal(provider: AnchorProvider) {
  const program = getVotingProgram(provider);
  return await program.account.proposal.all();
}

export async function getAllVoteState(provider: AnchorProvider) {
  const program = getVotingProgram(provider);
  return await program.account.voteState.all();
}
