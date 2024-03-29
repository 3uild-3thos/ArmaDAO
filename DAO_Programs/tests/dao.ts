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
import { randomBytes, randomInt } from "crypto"

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
  // Proposal Aruments
  const id = new BN(randomInt(8)); 


/*   const proposalFee = new BN(1e8);
  const minQuorum = new BN(70);
  const minThreshold = new BN(1000);
  const maxExpiry = new BN(432000);
  const evaluationPhasePeriod = new BN(108000); */
  


/*   const collection_mint = new PublicKey("9v9gYTGVaY7f5RXwHNPd7yMdKJ98HWaq456G6HeaShVA"); */
/*   const dao_admin = Keypair.fromSecretKey(new Uint8Array(daonftuser)); */


 const TOKEN_METADATA_PROGRAM_ID = new anchor.web3.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");

  const [dao_user, dao_user1, mintDao, mintSubDao] = Array.from({ length: 4 }, () =>
    Keypair.generate()
  );

  const [daouserAtaDao, daouserAtaSubDao, daouser1AtaDao, daouser1AtaSubDao] = [dao_user, dao_user1]
  .map((a) =>
    [mintDao, mintSubDao].map((m) =>
      getAssociatedTokenAddressSync(m.publicKey, a.publicKey)
    )
  )
  .flat();
  let collectionMint: PublicKey;
  let nft: PublicKey;
  
  const getMetadata = async (mint: anchor.web3.PublicKey): Promise<anchor.web3.PublicKey> => {
    return (
      anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from("metadata"),
          TOKEN_METADATA_PROGRAM_ID.toBuffer(),
          mint.toBuffer(),
        ],
        TOKEN_METADATA_PROGRAM_ID
      )
    )[0];
  };

  const getMasterEdition = async (mint: anchor.web3.PublicKey): Promise<anchor.web3.PublicKey> => {
    return (
      anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from("metadata"),
          TOKEN_METADATA_PROGRAM_ID.toBuffer(),
          mint.toBuffer(),
          Buffer.from("edition"),
        ],
        TOKEN_METADATA_PROGRAM_ID
      )
    )[0];
  };

  const dao_keypair = Keypair.fromSecretKey(new Uint8Array(DaoKeypair));
  //Config PDA
  const dao_config_key = PublicKey.findProgramAddressSync([Buffer.from("config"), seed.toArrayLike(Buffer, "le", 8)], dao_program.programId)[0];
  //SubDao Config Pda
  const sub_dao_config_key = PublicKey.findProgramAddressSync([Buffer.from("config"), seed.toArrayLike(Buffer, "le", 8), dao_config_key.toBytes()], dao_program.programId)[0];

  const proposal_keypair = Keypair.fromSecretKey(new Uint8Array(ProposalKeypair));
  const staking_keypair = Keypair.fromSecretKey(new Uint8Array(StakingKeypair));
  const voting_keypair = Keypair.fromSecretKey(new Uint8Array(VotingKeypair));


  //Core Program PDAS
  //Config Auth
  const auth = PublicKey.findProgramAddressSync([Buffer.from("auth"), dao_config_key.toBytes()], dao_program.programId)[0];
  //SubDao Auth
  const sub_auth = PublicKey.findProgramAddressSync([Buffer.from("auth"), sub_dao_config_key.toBytes()], dao_program.programId)[0];



  //Staking Program PDAS
  //Stake Auth
  const stake_auth = PublicKey.findProgramAddressSync([Buffer.from("auth"), dao_config_key.toBytes(), dao_user.publicKey.toBytes()], staking_program.programId)[0];
  //SubDao Stake Auth
  const sub_stake_auth = PublicKey.findProgramAddressSync([Buffer.from("auth"), sub_dao_config_key.toBytes(), dao_user.publicKey.toBytes()], staking_program.programId)[0];
  //StakeState 
  const stake_state = PublicKey.findProgramAddressSync([Buffer.from("stake"), dao_config_key.toBytes(), dao_user.publicKey.toBytes()], staking_program.programId)[0];
  //SubDAO StakeState
  const sub_stake_state = PublicKey.findProgramAddressSync([Buffer.from("stake"), sub_dao_config_key.toBytes(), dao_user.publicKey.toBytes()], staking_program.programId)[0];
  //Stake ATA

  //Proposal Program PDAS

  const proposal = PublicKey.findProgramAddressSync([Buffer.from("proposal"), dao_config_key.toBytes(), id.toArrayLike(Buffer, "le", 8) ], proposal_program.programId)[0];

  //Voting Program PDAS
  const vote = PublicKey.findProgramAddressSync([Buffer.from("vote"), dao_user.publicKey.toBytes(), proposal.toBytes()], voting_program.programId)[0];



  const log = async (signature: string): Promise<string> => {
    console.log(
      `Your transaction signature: https://explorer.solana.com/transaction/${signature}?cluster=custom&customUrl=${connection.rpcEndpoint}`
    );
    return signature;
  };

  const accounts = {
    initializer: dao_admin.publicKey,
    initializer_ata:  /* Derived or created ATA for dao_admin for the NFT */,
    owner_ata: /* Derived or created ATA for dao_user for the NFT */, 
    nft: /* PublicKey of the NFT mint */,
    collection: collection_mint,
    metadata: /* Derived or fetched Metadata account for the NFT */,
    master_edition: /* Derived or fetched MasterEdition account for the NFT */,
    auth,
    sub_auth,
    stake_auth,
    sub_stake_auth,
    stake_state,
    sub_stake_state,
    proposal,
    vote,
    daouserAtaDao,
    daouserAtaSubDao,
    daouser1AtaDao,
    daouser1AtaSubDao,
    mintDao: mintDao.publicKey,
    mintSubDao: mintSubDao.publicKey,
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
      seed,
      new BN(1e8),
      new BN(70),
      new BN(1000),
      new BN(432000),
      new BN(108000),
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
      .accounts({...accounts})
      .signers([dao_admin])
      .rpc()
      .then(confirm)
      .then(log);
  });
});
