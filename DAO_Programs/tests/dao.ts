import * as anchor from "@coral-xyz/anchor";
import { Keypair, PublicKey, Commitment, LAMPORTS_PER_SOL, SystemProgram, Transaction, SetComputeUnitLimitParams, ComputeBudgetProgram, } from "@solana/web3.js";
import { Program, BN } from "@coral-xyz/anchor";
import  DaoKeypair from "../target/deploy/dao-keypair.json";
import  ProposalKeypair from "../target/deploy/proposal-keypair.json";
import  StakingKeypair from "../target/deploy/staking-keypair.json";
import  VotingKeypair from "../target/deploy/voting-keypair.json";
import { Dao } from "../target/types/dao";
import { Proposal } from "../target/types/proposal";
import { Staking } from "../target/types/staking";
import { Voting } from "../target/types/voting";
import { ASSOCIATED_TOKEN_PROGRAM_ID, MINT_SIZE, TOKEN_2022_PROGRAM_ID, TOKEN_PROGRAM_ID, createAssociatedTokenAccountIdempotentInstruction, createInitializeMint2Instruction, createMintToInstruction, createTransferCheckedInstruction, getAssociatedTokenAddressSync, getMinimumBalanceForRentExemptMint } from "@solana/spl-token";
import { randomBytes, randomInt } from "crypto"
/* import  daoAdmin from "../aYTqjMKNNe1KmGT7WR2XHhXu7t6FD7p8DgZnwP3T8rE.json"; */
import daoAdmin from "../wallet.json"
import  daoUser from "../ugaoB7uFPdVQHGLg9vyePbsF1b75snYdUJtMMPqjgGi.json";

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
  
  const log = async (signature: string): Promise<string> => {
    console.log(
      `Your transaction signature: https://explorer.solana.com/transaction/${signature}?cluster=custom&customUrl=${connection.rpcEndpoint}`
    );
    return signature;
  };
  // DAO ARGUMENTS
  const seed = new BN(randomBytes(8));
/*   const seed2 = new BN(randomBytes(8)); */

  //seed 5 = BEJSdFDLAxJh8LDVps197m35jzxtGbwNRgiwcmssu7ZW
   /* const seed = new BN(5); */

  // proposalFee in lamports
  const proposalFee = new BN(1e8);
  const minQuorum: number = 70;
  const minThreshold = new BN(1000);
  //24HOURS 216000 slots 1 HOUR 9000 slots 150 slots
  //172,800 per day. 
  //7,200 per houir
  //120 per min
  //time in slots
  const maxExpiry = new BN(216000);
  //time in slots
  const evaluationPhasePeriod = new BN(9000); 
  const required_amount_to_create_subdaos = new BN(3);
  const required_amount_to_create_proposals = new BN(3);
  const staking_amount = new BN(10);


  //Proposal Arguments
  const id = new BN(randomInt(8)); 
  const name : string = "JonyProposal";
  const quorum: number = 75;
  const threshold = new BN(1100);
  const expiry = new BN(10000);
  const choices: number = 2;
  const evaluationperiod = new BN(10000);
  const metadataURI: string = "teste";

  const collection = new anchor.web3.PublicKey("Ghx1VpngEJcSQNmGa9SnwGK85CnX4Mi6pLh8hNFZioy7"); 
  const nft = new anchor.web3.PublicKey("6hpB812Gbgj931veJjP4RGetGScsNo9yvXLqJLUmTTR2");
  
//admin address:aYTqjMKNNe1KmGT7WR2XHhXu7t6FD7p8DgZnwP3T8rE
  const dao_admin = Keypair.fromSecretKey(new Uint8Array(daoAdmin)); 
  const ownerAta = getAssociatedTokenAddressSync(nft, dao_admin.publicKey, false, TOKEN_PROGRAM_ID);

  const dao_user = Keypair.fromSecretKey(new Uint8Array(daoUser)); 

 const TOKEN_METADATA_PROGRAM_ID = new anchor.web3.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");

/*   const [mint, mintSubDao] = Array.from({ length: 2 }, () =>
    Keypair.generate()
  ); */
  const mintSubDao = Keypair.generate();
  const mint = new anchor.web3.PublicKey("9mCErAVfghy6GfirRLkmRxuJL137MBoMxJnbPsMCzMHb");
//mint 9mCErAVfghy6GfirRLkmRxuJL137MBoMxJnbPsMCzMHb
  const [daoUserATADao, daoUserATASubDao, daoAdminAtaDao, daoAdminATASubDao] = [dao_user, dao_admin]
  .map((a) =>
    [mint, mintSubDao].map((m) =>
      getAssociatedTokenAddressSync(mint, a.publicKey)
    )
  )
  .flat();

  const metadata = PublicKey.findProgramAddressSync(
    [
    Buffer.from("metadata"), 
    TOKEN_METADATA_PROGRAM_ID.toBuffer(),
    nft.toBuffer()
    ], 
    TOKEN_METADATA_PROGRAM_ID)[0];

  const masterEdition = PublicKey.findProgramAddressSync(
    [
    Buffer.from("metadata"), 
    TOKEN_METADATA_PROGRAM_ID.toBuffer(),
    nft.toBuffer(),
    Buffer.from("edition"),
    ], 
    TOKEN_METADATA_PROGRAM_ID)[0];

  const dao_keypair = Keypair.fromSecretKey(new Uint8Array(DaoKeypair));
  //Config PDA
  /* const dao_config_key = PublicKey.findProgramAddressSync([Buffer.from("config"), seed.toArrayLike(Buffer, "le", 8)], dao_program.programId)[0]; */
  const dao_config_key = PublicKey.findProgramAddressSync([Buffer.from("config"), seed.toBuffer("le", 8)], dao_program.programId)[0];
  /* const dao_config_key = new anchor.web3.PublicKey("2uxXLa41uLeSaKaUpenF5ngN81PJJqLXfoZBLWut3SFH"); */
  //SubDao Config Pda
  /* const sub_dao_config_key = PublicKey.findProgramAddressSync([Buffer.from("config"), seed.toArrayLike(Buffer, "le", 8), dao_config_key.toBytes()], dao_program.programId)[0]; */
  const sub_dao_config_key = PublicKey.findProgramAddressSync([Buffer.from("config"), seed.toBuffer("le", 8), dao_config_key.toBuffer()], dao_program.programId)[0];

  const proposal_keypair = Keypair.fromSecretKey(new Uint8Array(ProposalKeypair));
  const staking_keypair = Keypair.fromSecretKey(new Uint8Array(StakingKeypair));
  const voting_keypair = Keypair.fromSecretKey(new Uint8Array(VotingKeypair));


  //Core Program PDAS
  //Config Auth
  const auth = PublicKey.findProgramAddressSync([Buffer.from("auth"), dao_config_key.toBuffer()], dao_program.programId)[0];
  //SubDao Auth
  const sub_auth = PublicKey.findProgramAddressSync([Buffer.from("auth"), sub_dao_config_key.toBuffer()], dao_program.programId)[0];
  //DAO treasury
  const treasury = PublicKey.findProgramAddressSync([Buffer.from("treasury"), dao_config_key.toBuffer()], dao_program.programId)[0];
  //SubDao treasury
  const subdao_treasury = PublicKey.findProgramAddressSync([Buffer.from("treasury"), sub_dao_config_key.toBuffer()], dao_program.programId)[0];

  
  //Staking Program PDAS
  //Stake Auth
  const stakeAuth = PublicKey.findProgramAddressSync([Buffer.from("auth"), dao_config_key.toBuffer(), dao_admin.publicKey.toBuffer()], staking_program.programId)[0];
  //SubDao Stake Auth
  const sub_stake_auth = PublicKey.findProgramAddressSync([Buffer.from("auth"), sub_dao_config_key.toBuffer(), dao_admin.publicKey.toBuffer()], staking_program.programId)[0];
  //StakeState 
  const stakeState = PublicKey.findProgramAddressSync([Buffer.from("stake"), dao_config_key.toBuffer(), dao_admin.publicKey.toBuffer()], staking_program.programId)[0];
  //SubDAO StakeState
  const sub_stake_state = PublicKey.findProgramAddressSync([Buffer.from("stake"), sub_dao_config_key.toBuffer(), dao_admin.publicKey.toBuffer()], staking_program.programId)[0];
  //Stake ATA
  const stakeAta = PublicKey.findProgramAddressSync([Buffer.from("vault"), dao_config_key.toBuffer(), dao_admin.publicKey.toBuffer()], staking_program.programId)[0];
  //Sub Stake ATA
  const subdao_stake_ata = PublicKey.findProgramAddressSync([Buffer.from("vault"), sub_dao_config_key.toBuffer(), dao_admin.publicKey.toBuffer()], staking_program.programId)[0];
  //Proposal Program PDAS
  //Dao proposal
  const proposal = PublicKey.findProgramAddressSync([Buffer.from("proposal"), dao_config_key.toBuffer(), id.toBuffer("le", 8) ], proposal_program.programId)[0];
  //SubDao proposal
  const subdao_proposal = PublicKey.findProgramAddressSync([Buffer.from("proposal"), sub_dao_config_key.toBuffer(), id.toBuffer("le", 8) ], proposal_program.programId)[0];

  //Voting Program PDAS
  //Vote Dao
  const vote = PublicKey.findProgramAddressSync([Buffer.from("vote"), dao_admin.publicKey.toBuffer(), proposal.toBuffer()], voting_program.programId)[0];
  //Vote SubDAO
  const subdao_vote = PublicKey.findProgramAddressSync([Buffer.from("vote"), dao_admin.publicKey.toBuffer(), subdao_proposal.toBuffer()], voting_program.programId)[0];

  const accounts = {
    dao_admin,
    ownerAta, /* Derived or created ATA for dao_admin for the NFT */
    dao_user,
    stakeAta,
    subdao_stake_ata,
    /* owner_ata: */ /* Derived or created ATA for dao_user for the NFT */ 
    nft, /* PublicKey of the NFT mint */
    collection,
    metadata,
    masterEdition,/* Derived or fetched MasterEdition account for the NFT */
    auth,
    sub_auth,
    stakeAuth,
    sub_stake_auth,
    stakeState,
    sub_stake_state,
    proposal,
    subdao_proposal,
    vote,
    subdao_vote,
    //FTS ATAS
    daoUserATADao,
    daoUserATASubDao,
    daoAdminAtaDao,
    daoAdminATASubDao,
    //FT Mints
    mint: mint,
    mintSubDao: mintSubDao.publicKey,
    treasury,
    subdao_treasury,
    config: dao_config_key,  
    configSubDao: sub_dao_config_key,
    metadataProgram: TOKEN_METADATA_PROGRAM_ID,
    tokenProgram: TOKEN_2022_PROGRAM_ID,
    associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
    systemProgram: SystemProgram.programId,
  };



  
  it("Initialize hybrid dao Config Account", async () => {
    const tx = await dao_program.methods
    
    .initialize(
      seed,
      proposalFee,
      minQuorum,
      minThreshold,
      maxExpiry,
      evaluationPhasePeriod,
      proposal_keypair.publicKey,
      voting_keypair.publicKey,
      staking_keypair.publicKey,
      collection,
      mint,
      null, // null because its hybrid
      false, // allow_sub_dao
      null, // min_staked_create_subdao
      true // is_hybrid
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({...accounts})
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
  });

  it("Initialize Ft SubDAO for hybrid dao Config Account", async () => {
    const tx = await dao_program.methods
    
    .initializeSubDao(
      seed,
      proposalFee,
      minQuorum,
      minThreshold,
      maxExpiry,
      evaluationPhasePeriod,
      null,
      mintSubDao.publicKey,
      required_amount_to_create_proposals, 
      false // is_hybrid
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({        
        owner: dao_admin.publicKey,
        ownerAta,
        nft,
        collection,
        metadata,
        masterEdition,
        auth: sub_auth,
        treasury:subdao_treasury,
        configSubDao: sub_dao_config_key,
        config: dao_config_key,
        metadataProgram: TOKEN_METADATA_PROGRAM_ID,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,   })
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
  });
/*   it("InitializeSubdao FT Dao for NFT/FTs Config Account", async () => {
    const tx = await dao_program.methods
    
    .initializeSubDaoToken(
      seed2,
      proposalFee,
      minQuorum,
      minThreshold,
      maxExpiry,
      evaluationPhasePeriod,
      null,
      mintSubDao.publicKey,
      required_amount_to_create_proposals, // null because its hybrid
      false // is_hybrid
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({...accounts})
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
  });
  it("InitializeSubdao NFT Dao for NFT/FTs Config Accountt", async () => {
    const tx = await dao_program.methods
    
    .initializeSubDaoToken(
      seed2,
      proposalFee,
      minQuorum,
      minThreshold,
      maxExpiry,
      evaluationPhasePeriod,
      collection,
      null,
      required_amount_to_create_proposals, // null because its hybrid
      false // is_hybrid
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({...accounts})
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
  }); */

/*   it("Initialize FT dao Config Account", async () => {
    const tx = await dao_program.methods
    
    .initialize(
      seed,
      proposalFee,
      minQuorum,
      minThreshold,
      maxExpiry,
      evaluationPhasePeriod,
      proposal_keypair.publicKey,
      voting_keypair.publicKey,
      staking_keypair.publicKey,
      null, //collection,
      mint,
      required_amount_to_create_proposals, // 
      true, // allow_sub_dao
      required_amount_to_create_subdaos, // min_staked_create_subdao
      false // is_hybrid
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({...accounts})
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
      
  }); */
/* 
  it("Initialize NFT dao Config Account", async () => {
    const tx = await dao_program.methods
    
    .initialize(
      seed,
      proposalFee,
      minQuorum,
      minThreshold,
      maxExpiry,
      evaluationPhasePeriod,
      proposal_keypair.publicKey,
      voting_keypair.publicKey,
      staking_keypair.publicKey,
      collection, //collection,
      null,
      required_amount_to_create_proposals, // null because its hybrid
      true, // allow_sub_dao
      required_amount_to_create_subdaos, // min_staked_create_subdao
      false // is_hybrid
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({...accounts})
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
      
  }); */
/*   it("Initialize StakeATA + StakeStaTe Account", async () => {
    const tx = await staking_program.methods
    
    .initStake(
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({
        owner: dao_admin.publicKey,
        ownerAta: daoAdminAtaDao,
        stakeAta,
        stakeAuth,
        mint,
        stakeState,
        config: dao_config_key,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,   
      })
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
      
  }); */
/*   it("Stake Token", async () => {
    const tx = await staking_program.methods
    
    .stakeTokens(staking_amount
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({
        owner: dao_admin.publicKey,
        ownerAta: daoAdminAtaDao,
        stakeAta,
        stakeAuth,
        mint,
        stakeState,
        config: dao_config_key,
        tokenProgram: TOKEN_2022_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,   
      })
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
      
  });
  it("UnStake Token", async () => {
    const tx = await staking_program.methods
    
    .unstakeTokens(staking_amount
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({...accounts})
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
      
  });
  it("Close Stake ", async () => {
    const tx = await staking_program.methods
    
    .closeStake(
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({
        owner: dao_admin.publicKey,
        stakeAta,
        stakeAuth,
        mint,
        stakeState,
        config: dao_config_key,
        treasury,
        tokenProgram: TOKEN_2022_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,   
      })
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
      
  });   */
/*   it("Initialize Nft Stake Account", async () => {
    const tx = await staking_program.methods
    
    .initStakeNft(
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({...accounts})
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
      
  }); */

/*   it("Stake Nft", async () => {
    const tx = await staking_program.methods
    
    .stakeNft(staking_amount
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({...accounts})
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
      
  }); */

/*   it("UnStake Nft", async () => {
    const tx = await staking_program.methods
    
    .unstakeNft(staking_amount
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({...accounts})
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
      
  }); */

/*   it("Close Stake ", async () => {
    const tx = await staking_program.methods
    
    .closeStakeNft(
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({...accounts})
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
      
  }); */



 /*  it("Create Proposal ", async () => {
    const tx = await proposal_program.methods
    
    .createProposal(
      id,
      name,
      metadataURI,
      // { Vote: {} }, 
      ProposalType,
      quorum,
      threshold,
      expiry,
      choices,
      evaluationperiod
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({...accounts})
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
      
  }); */

/*   it("Initialize NFT Stake Account", async () => {
    const tx = await staking_program.methods
    
    .initStakeNft(
    )  
      .preInstructions([
        ComputeBudgetProgram.setComputeUnitLimit({ units: 200000 } as SetComputeUnitLimitParams)
      ])  
      .accounts({...accounts})
      .signers([dao_admin])

      .rpc({
        skipPreflight:true
      })
      .then(confirm)
      .then(log);
      
  }); */
  
});