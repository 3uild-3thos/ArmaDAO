import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import getConfig from "@/lib/blockchain-config";
import { Proposal, IDL } from "./idl";

// TODO: Create abstractions for creating the instructions
// create_proposal;
// create_proposal_staked;
// cleanup_proposal;
// execute_proposal;
// create_proposal_sub_dao;
// create_proposal_sub_dao_hybrid;
// cleanup_proposal_sub_dao;
// execute_proposal_sub_dao;
// add_vote;
// remove_vote;
// add_vote_sub_dao;
// remove_vote_sub_dao;

export const getProposalProgram = (
  provider: AnchorProvider
): Program<Proposal> => {
  return new Program<Proposal>(
    IDL,
    new PublicKey(getConfig().proposalProgram),
    provider
  );
};

export async function getAllProposal(provider: AnchorProvider) {
  const program = getProposalProgram(provider);
  return await program.account.proposal.all();
}

export async function getAllStakeState(provider: AnchorProvider) {
  const program = getProposalProgram(provider);
  return await program.account.stakeState.all();
}

export async function getAllDaoConfig(provider: AnchorProvider) {
  const program = getProposalProgram(provider);
  return await program.account.daoConfig.all();
}
