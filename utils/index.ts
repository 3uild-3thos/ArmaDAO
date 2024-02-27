import { Program, AnchorProvider, Wallet, Address } from "@coral-xyz/anchor";
import { VOTING_IDL_TYPE } from "@/idl/voting";
import { DAO_IDL_TYPE } from "@/idl/dao";
import { STAKING_IDL_TYPE } from "@/idl/staking";
import { PROPOSAL_IDL_TYPE } from "@/idl/proposal";
import {
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
  TransactionMessage,
  VersionedTransaction,
  clusterApiUrl,
} from "@solana/web3.js";
import { PROPOSAL_IDL, STAKING_IDL, DAO_IDL, VOTING_IDL } from "@/idl";
import {
  NEXT_PUBLIC_DAO_ID,
  NEXT_PUBLIC_PROPOSAL_ID,
  NEXT_PUBLIC_STAKING_ID,
  NEXT_PUBLIC_VOTING_ID,
} from "@/env";

export const getAnchorProvider = (connection: Connection, wallet: Wallet) => {
  return new AnchorProvider(connection, wallet, { commitment: "finalized" });
};

export const getProposalProgram = (
  provider: AnchorProvider
): Program<PROPOSAL_IDL_TYPE> => {
  return new Program<PROPOSAL_IDL_TYPE>(
    PROPOSAL_IDL,
    NEXT_PUBLIC_PROPOSAL_ID,
    provider
  );
};

export const getStakingProgram = (
  provider: AnchorProvider
): Program<STAKING_IDL_TYPE> => {
  return new Program<STAKING_IDL_TYPE>(
    STAKING_IDL,
    NEXT_PUBLIC_STAKING_ID,
    provider
  );
};

export const getDaoProgram = (
  provider: AnchorProvider
): Program<DAO_IDL_TYPE> => {
  return new Program<DAO_IDL_TYPE>(DAO_IDL, NEXT_PUBLIC_DAO_ID, provider);
};

export const getVotingProgram = (
  provider: AnchorProvider
): Program<VOTING_IDL_TYPE> => {
  return new Program<VOTING_IDL_TYPE>(
    VOTING_IDL,
    NEXT_PUBLIC_VOTING_ID,
    provider
  );
};

export const getLatestBlockhash = async () => {
  const connection = new Connection(clusterApiUrl("devnet"));
  return (await connection.getLatestBlockhash("finalized")).blockhash;
};

export const createTransaction = async (
  instructions: TransactionInstruction[]
): Promise<Transaction> => {
  const transaction = new Transaction();
  instructions.forEach((instruction: TransactionInstruction) => {
    transaction.add(instruction);
  });
  return transaction;
};

export const createVersionedTransaction = async (
  payerKey: PublicKey,
  instructions: TransactionInstruction[]
): Promise<VersionedTransaction> => {
  const messageV0 = new TransactionMessage({
    payerKey,
    recentBlockhash: await getLatestBlockhash(),
    instructions,
  }).compileToV0Message();
  return new VersionedTransaction(messageV0);
};
