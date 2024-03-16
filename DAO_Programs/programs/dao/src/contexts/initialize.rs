use anchor_lang::prelude::*;

use daoist_programs::modules::DaoConfig;
use anchor_spl::{
    token_interface::{TokenAccount, Mint, TokenInterface}, 
    metadata::{Metadata, MetadataAccount,MasterEditionAccount}, 
    associated_token::AssociatedToken
};
use crate::validate_nft;
use crate::errors::DaoError;


#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct Initialize<'info> {
    #[account(mut)]
    initializer: Signer<'info>,
    #[account(
        seeds=[b"auth", config.key().as_ref()],
        bump
    )]
    ///CHECK: This is safe. It's just used to sign things
    auth: UncheckedAccount<'info>,
    #[account(
        seeds=[b"treasury", config.key().as_ref()],
        bump
    )]
    treasury: SystemAccount<'info>,
    #[account(
        init,
        payer = initializer,
        seeds=[b"config", seed.to_le_bytes().as_ref()],
        bump,
        space = DaoConfig::LEN
    )]
    config: Account<'info, DaoConfig>,
    system_program: Program<'info, System>
}

impl<'info> Initialize<'info> {
    pub fn init(
        &mut self, 
        seed: u64,
        bumps: &InitializeBumps,
        proposal_fee: u64,
        min_quorum: u8,//0-100
        min_threshold: u64,
        max_expiry: u64,
        evaluation_phase_period: u64,
        proposal_program: Pubkey,
        voting_program: Pubkey,
        staking_program: Pubkey,
        collection_mint: Option<Pubkey>,
        mint: Option<Pubkey>,
        min_staked_required_proposal: Option<u64>,
        allow_sub_dao: bool,
        min_staked_create_subdao: Option<u64>,
        is_hybrid: bool
    ) -> Result<()> {

            self.config.check_init_valid_quorum(min_quorum)?;
        
            self.config.init(
                seed,
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
                bumps.auth,
                bumps.config,
                bumps.treasury,
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
             )             
   
    }
}

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
    #[account(constraint = collection.key() == config.collection_mint.expect("Collection mint not initialized"))]
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
        seeds=[b"auth", config.key().as_ref()],
        bump = config.auth_bump
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
        is_hybrid: bool
    ) -> Result<()> {
        
        validate_nft!(
            self.metadata.collection, 
            self.collection
            );
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
                auth_bump: self.config.auth_bump, 
                config_bump: bumps.config_sub_dao, 
                treasury_bump: bumps.treasury,
                collection_mint,
                mint,
                min_staked_required_proposal,
                allow_sub_dao: false,
                min_staked_create_subdao: None,
                is_hybrid
            });
                Ok(()) 
   
    }
}
