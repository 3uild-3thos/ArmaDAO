use anchor_lang::prelude::*;

use anchor_spl::{
    token_interface::{TokenAccount, Mint, TokenInterface}, 
    metadata::{Metadata, MetadataAccount,MasterEditionAccount}, 
    associated_token::AssociatedToken
};
use crate::{validate_nft, REQUIRED_COLLECTION_MINT};
use crate::{errors::CoreError, state::DaoConfig};
 
#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub initializer: Signer<'info>,
    #[account(
        mut,
        associated_token::mint = nft,
        associated_token::authority = initializer
    )]
    pub owner_ata: InterfaceAccount<'info, TokenAccount>,
    nft: InterfaceAccount<'info, Mint>,
    #[account(constraint = collection.key() == REQUIRED_COLLECTION_MINT)]
    pub collection: InterfaceAccount<'info, Mint>,
    #[account(
        seeds = [
            b"metadata",
            metadata_program.key().as_ref(),
            nft.key().as_ref()
        ],
        seeds::program = metadata_program.key(),
        bump,
        constraint = metadata.collection.as_ref().unwrap().key.as_ref() == collection.key().as_ref(),
        constraint = metadata.collection.as_ref().unwrap().verified == true,
    )]
    pub metadata: Account<'info, MetadataAccount>,
    #[account(
        seeds = [
            b"metadata",
            metadata_program.key().as_ref(),
            nft.key().as_ref(),
            b"edition"
        ],
        seeds::program = metadata_program.key(),
        bump,
    )]
    pub master_edition: Account<'info, MasterEditionAccount>,
    #[account(
        seeds=[b"auth", config.key().as_ref()],
        bump
    )]
    ///CHECK: This is safe. It's just used to sign things
    pub auth: UncheckedAccount<'info>,
    #[account(
        seeds=[b"treasury", config.key().as_ref()],
        bump
    )]
    pub treasury: SystemAccount<'info>,
    #[account(
        init,
        payer = initializer,
        seeds=[b"config", seed.to_le_bytes().as_ref()], 
        bump,
        space = DaoConfig::LEN
    )]
    pub config: Account<'info, DaoConfig>,
    pub metadata_program: Program<'info, Metadata>,
    pub token_program: Interface<'info, TokenInterface>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub system_program: Program<'info, System>
}

impl<'info> Initialize<'info> {
    pub fn init(
        &mut self, 
        seed: u64,
        bumps: &InitializeBumps,
        proposal_fee: u64,
        min_quorum: u8,//0-100
        //Minimum vote threshold
        min_threshold: u64,
        //Maximum expiry time for proposals
        max_expiry: u64,
        //Evaluation phase period for proposals Example 216000 - 1 day in slots.
        evaluation_phase_period: u64,
        proposal_program: Pubkey,
        voting_program: Pubkey,
        staking_program: Pubkey,
        //Specifies the mint of the NFT collection associated with the DAO
        //Required for hybrid and NFT DAO
        collection_mint: Option<Pubkey>,
        //Specifies the mint of the fungible token associated with the DAO.
        //Required for hybrid and FT DAO
        mint: Option<Pubkey>,
        //Minimum staked FT/NFT required to create a proposal
        //Required for FT DAO & NFT DAO 
        min_staked_required_proposal: Option<u64>,
        //Indicates whether sub-DAOs are allowed.
        //set false for ARMADA
        allow_sub_dao: bool,
        // Specifies the minimum stake required to create a sub-DAO.
        //Required for FT DAO & NFT DAO
        min_staked_create_subdao: Option<u64>,
        //Indicates whether the DAO is a hybrid type
        //set true if hybrid
        is_hybrid: bool,
        circulating_supply: u64,

    ) -> Result<()> {
            validate_nft!(
                self.metadata.collection, 
                self.collection
            );
            self.config.check_init_valid_quorum(min_quorum)?;

            msg!("Dao Created with sucess");
            self.config.set_inner(DaoConfig { 
                seed, 
                proposal_fee, 
                min_quorum,
                min_threshold, 
                max_expiry, 
                evaluation_phase_period, 
                proposal_count : 0, 
                proposal_program, 
                voting_program, 
                staking_program, 
                collection_mint, 
                mint, 
                min_staked_required_proposal, 
                allow_sub_dao, 
                min_staked_create_subdao, 
                is_hybrid,
                auth_bump: bumps.auth, 
                config_bump: bumps.config, 
                treasury_bump: bumps.treasury, 
                circulating_supply
            });
            msg!("seed {}", self.config.seed);      
            msg!("proposal fee {}", self.config.proposal_fee);
            msg!("config_bump {}", self.config.config_bump);
            msg!("treasuru_bump {}", self.config.treasury_bump);             

                Ok(())
        
/*             self.config.init(
                seed,
                bumps.auth,
                bumps.config,
                bumps.treasury,
                //settings
                proposal_fee,
                min_quorum,
                min_threshold,
                max_expiry,
                evaluation_phase_period,
                //Programs
                proposal_program,
                voting_program, 
                staking_program,
                //Bumps
                //Optional
                collection_mint,
                //Optional
                mint,
                //Optional
                min_staked_required_proposal,
                //Boolean
                allow_sub_dao,
                //Optional
                min_staked_create_subdao,
                is_hybrid
             )        */      
   
    }
}

//Create SUB Fleets(FT,NFT,Hybrid) FOR DAOS(HYBRIDS AND NFTS) MOTHERSHIPS THAT DONT REQUIRE HAVING min_staked_create_subdao
#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct InitializeSubdao<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        mut,
        associated_token::mint = nft,
        associated_token::authority = owner
    )]
    owner_ata: InterfaceAccount<'info, TokenAccount>,
    nft: InterfaceAccount<'info, Mint>,
    /* #[account(constraint = collection.key() == config.collection_mint.expect("Collection mint not initialized"))] *///this will work when config acc derived correctly 
    collection: InterfaceAccount<'info, Mint>,
    #[account(
        seeds = [
            b"metadata",
            metadata_program.key().as_ref(),
            nft.key().as_ref()
        ],
        seeds::program = metadata_program.key(),
        bump,
        constraint = metadata.collection.as_ref().unwrap().key.as_ref() == collection.key().as_ref(),
        constraint = metadata.collection.as_ref().unwrap().verified == true,
    )]
    metadata: Account<'info, MetadataAccount>,
    #[account(
        seeds = [
            b"metadata",
            metadata_program.key().as_ref(),
            nft.key().as_ref(),
            b"edition"
        ],
        seeds::program = metadata_program.key(),
        bump,
    )]
    master_edition: Account<'info, MasterEditionAccount>,
    #[account(
        seeds=[b"auth", config_sub_dao.key().as_ref()],
        bump
    )]
    ///CHECK: This is safe. It's just used to sign things
    auth: UncheckedAccount<'info>,
    #[account(
        seeds=[b"treasury", config_sub_dao.key().as_ref()],
        bump
    )]
    treasury: SystemAccount<'info>,
    #[account(
        init,
        payer = owner,
        seeds=[b"config", seed.to_le_bytes().as_ref(), config.key().as_ref()],
        bump,
        space = DaoConfig::LEN
    )]
    config_sub_dao: Account<'info, DaoConfig>,
    #[account(
        seeds=[b"config", config.seed.to_le_bytes().as_ref()],
        bump = config.config_bump,
        constraint = config.collection_mint.as_ref().unwrap().key().as_ref() == collection.key().as_ref(),
    )]
    config: Account<'info, DaoConfig>,
    metadata_program: Program<'info, Metadata>,
    token_program: Interface<'info, TokenInterface>,
    associated_token_program: Program<'info, AssociatedToken>,
    system_program: Program<'info, System>
}

impl<'info> InitializeSubdao<'info> {
    pub fn init(
        &mut self, 
        seed: u64,
        bumps: &InitializeSubdaoBumps,
        proposal_fee: u64,
        min_quorum: u8,//0-100
        min_threshold: u64,
        max_expiry: u64,
        evaluation_phase_period: u64,
        //DAO TYPE
        collection_mint: Option<Pubkey>,
        mint: Option<Pubkey>,
        min_staked_required_proposal : Option<u64>,
        is_hybrid: bool,
        circulating_supply: u64,
    ) -> Result<()> {
        
        validate_nft!(
            self.metadata.collection, 
            self.collection
            );
            //Make sure its not staked based to create subdao
            self.config.check_staked_create_subdao()?;   
            self.config.check_allow_sub_dao()?;
            self.config_sub_dao.check_init_valid_quorum(min_quorum)?;       
            self.config_sub_dao.set_inner(DaoConfig 
                { 
                seed, 
                proposal_fee, 
                min_quorum, 
                min_threshold, 
                max_expiry, 
                evaluation_phase_period, 
                proposal_count: 0, 
                proposal_program: self.config.proposal_program, 
                voting_program: self.config.voting_program, 
                staking_program: self.config.staking_program, 
                auth_bump: bumps.auth, 
                config_bump: bumps.config_sub_dao, 
                treasury_bump: bumps.treasury,
                collection_mint,
                mint,
                min_staked_required_proposal,
                allow_sub_dao: false,
                min_staked_create_subdao: None,
                is_hybrid,
                circulating_supply,
            });
                Ok(()) 
   
    }
}

/* // NFT/FT/Hybrid FLEETS - SUB FLEETS - MOTHERSHIPS THAT REQUIRE HAVING min_staked_create_subdao
#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct InitializeSubdaoToken<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        seeds=[b"auth", config_sub_dao.key().as_ref()],
        bump
    )]
    ///CHECK: This is safe. It's just used to sign things
    auth: UncheckedAccount<'info>,
    #[account(
        seeds=[b"treasury", config_sub_dao.key().as_ref()],
        bump
    )]
    treasury: SystemAccount<'info>,
    #[account(
        init,
        payer = owner,
        seeds=[b"config", seed.to_le_bytes().as_ref(), config.key().as_ref()],
        bump,
        space = DaoConfig::LEN
    )]
    config_sub_dao: Account<'info, DaoConfig>,
    #[account(
        seeds=[b"config", config.seed.to_le_bytes().as_ref()],
        bump = config.config_bump
    )]
    config: Account<'info, DaoConfig>,
    #[account(constraint = staking_program.key() == config.staking_program)]
    staking_program: Program<'info, StakingProgram>,
    #[account(
        seeds=[b"stake", config_sub_dao.key().as_ref(), owner.key().as_ref()],
        seeds::program = staking_program.key(),
        bump = stake_state.state_bump,
    )]
    stake_state: Account<'info, StakeState>,
    system_program: Program<'info, System>
}

impl<'info> InitializeSubdaoToken<'info> {
    pub fn init(
        &mut self, 
        seed: u64,
        bumps: &InitializeSubdaoTokenBumps,
        proposal_fee: u64,
        min_quorum: u8,//0-100
        min_threshold: u64,
        max_expiry: u64,
        evaluation_phase_period: u64,
        collection_mint: Option<Pubkey>,
        mint: Option<Pubkey>,
        min_staked_required_proposal : u64,
        is_hybrid: bool,
        circulating_supply: u64,
    ) -> Result<()> {
        
            self.config.check_allow_sub_dao()?;
            self.config.check_min_staked_create_subdao(self.stake_state.amount)?;
            self.config_sub_dao.check_init_valid_quorum(min_quorum)?;       
            self.config_sub_dao.set_inner(DaoConfig 
                { 
                seed, 
                proposal_fee, 
                min_quorum, 
                min_threshold, 
                max_expiry, 
                evaluation_phase_period, 
                proposal_count: 0, 
                proposal_program: self.config.proposal_program, 
                voting_program: self.config.voting_program, 
                staking_program: self.config.staking_program, 
                auth_bump: bumps.auth, 
                config_bump: bumps.config_sub_dao, 
                treasury_bump: bumps.treasury,
                collection_mint, 
                mint,
                min_staked_required_proposal: Some(min_staked_required_proposal),
                allow_sub_dao: false,
                min_staked_create_subdao: None,
                is_hybrid,
                circulating_supply
            });
                Ok(()) 
   
    }
} */