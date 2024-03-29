import * as anchor from "@coral-xyz/anchor";
import { Keypair, PublicKey, Commitment, LAMPORTS_PER_SOL, SystemProgram, Transaction } from "@solana/web3.js";
import { Program, BN } from "@coral-xyz/anchor";
import  DaoKeypair from "../target/deploy/dao-keypair.json";
import  ProposalKeypair from "../target/deploy/proposal-keypair.json";
import  StakingKeypair from "../target/deploy/staking-keypair.json";
import  VotingKeypair from "../target/deploy/voting-keypair.json";
import { Dao } from "../target/types/dao";
import { Proposal } from "../target/types/proposal";
import { Staking } from "../target/types/staking";
import { Voting } from "../target/types/voting";
import { ASSOCIATED_TOKEN_PROGRAM_ID, MINT_SIZE, TOKEN_2022_PROGRAM_ID, createAssociatedTokenAccountIdempotentInstruction, createInitializeMint2Instruction, createMintToInstruction, createTransferCheckedInstruction, getAssociatedTokenAddressSync, getMinimumBalanceForRentExemptMint } from "@solana/spl-token";
import { randomBytes } from "crypto"

const commitment: Commitment = "confirmed"; // processed, confirmed, finalized
describe("dao", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const dao_program = anchor.workspace.Dao as Program<Dao>;
  const proposal_program = anchor.workspace.Proposal as Program<Proposal>;
  const staking_program = anchor.workspace.Staking as Program<Staking>;
  const voting_program = anchor.workspace.Voting as Program<Voting>;

  const provider = anchor.getProvider();
  const connection = provider.connection;



  const confirm = async (signature: string): Promise<string> => {
    const block = await connection.getLatestBlockhash();
    await connection.confirmTransaction({
      signature,
      ...block,
    });
    return signature;
  };

  // DAO ARGUMENTS
  const seed = new BN(randomBytes(8));
  const proposalFee = new BN(1e8);
  const minQuorum = new BN(70);
  const minThreshold = new BN(1000);
  const maxExpiry = new BN(432000);
  const minPrevotingPeriod = new BN(108000);
  
  //wrong but to test
  const mint = Keypair.generate();
  const collection_mint = new PublicKey("9v9gYTGVaY7f5RXwHNPd7yMdKJ98HWaq456G6HeaShVA");
  const dao_admin = Keypair.fromSecretKey(new Uint8Array(daonftuser));
  const dao_user = Keypair.generate();


  const dao_keypair = Keypair.fromSecretKey(new Uint8Array(DaoKeypair));
  const dao_config_key = PublicKey.findProgramAddressSync([Buffer.from("config"), seed.toArrayLike(Buffer, "le", 8)], dao_program.programId)[0];

  const proposal_keypair = Keypair.fromSecretKey(new Uint8Array(ProposalKeypair));
  const staking_keypair = Keypair.fromSecretKey(new Uint8Array(StakingKeypair));
  const voting_keypair = Keypair.fromSecretKey(new Uint8Array(VotingKeypair));



  const log = async (signature: string): Promise<string> => {
    console.log(
      `Your transaction signature: https://explorer.solana.com/transaction/${signature}?cluster=custom&customUrl=${connection.rpcEndpoint}`
    );
    return signature;
  };



  
  const accounts = {
    initializer: dao_admin.publicKey,
    owner_ata: /* Derived or created ATA for dao_admin for the NFT */, 
    nft: /* PublicKey of the NFT mint */,
    collection: collection_mint,
    metadata: /* Derived or fetched Metadata account for the NFT */,
    master_edition: /* Derived or fetched MasterEdition account for the NFT */,
    auth: /* Derived or created auth account */,
    treasury: /* Derived or created treasury account */,
    config: dao_config_key, // 
    metadata_program: /* PublicKey of the Metadata program */,
    token_program: TOKEN_2022_PROGRAM_ID,
    associated_token_program: ASSOCIATED_TOKEN_PROGRAM_ID,
    system_program: SystemProgram.programId,
  };

  it("Initialize Dao Config Account", async () => {
    const tx = await dao_program.methods
    .initialize(
      seed.toNumber(),
      proposalFee.toNumber(),
      minQuorum.toNumber(),
      minThreshold.toNumber(),
      maxExpiry.toNumber(),
      minPrevotingPeriod.toNumber(),
      proposal_keypair.publicKey,
      voting_keypair.publicKey,
      staking_keypair.publicKey,
      collection_mint,
      mint.publicKey,
      null, // null because its hybrid
      false, // allow_sub_dao
      null, // min_staked_create_subdao
      true // is_hybrid
    )
      .signers([dao_admin])
      .rpc()
      .then(confirm)
      .then(log);
  });
});
