use anchor_lang::prelude::*;
mod contexts;
use contexts::*;
mod constants;
mod errors;
mod helpers;

declare_id!("daoSYkGVA6pu5CxknvVMMTc8nFAGsYzfQt2jK5CgC5V");

#[program]
pub mod dao {

    use super::*;

    // Instantiate a new DAO Config ACC using the DAO2023 program
    pub fn initialize(
        ctx: Context<Initialize>,
        seed: u64,
        proposal_fee: u64,
        min_quorum: u8,
        min_threshold: u64,
        max_expiry: u64,
        min_prevoting_period: u64,
        proposal_program: Pubkey,
        voting_program:Pubkey,
        staking_program: Pubkey,
        collection_mint: Option<Pubkey>,
        mint: Option<Pubkey>, 
        min_staked_required_proposal: Option<u64>,
        allow_sub_dao: bool,
        min_staked_create_subdao: Option<u64>
    ) -> Result<()> {
        ctx.accounts.init(
            seed, 
            &ctx.bumps, 
            proposal_fee, 
            min_quorum, 
            min_threshold, 
            max_expiry,  
            min_prevoting_period,
            proposal_program, 
            voting_program,
            staking_program,
            collection_mint,
            mint,
            min_staked_required_proposal,
            allow_sub_dao,
            min_staked_create_subdao
        )
    }
    pub fn initialize_sub_dao(
        ctx: Context<InitializeSubdao>,
        seed: u64,
        proposal_fee: u64,
        min_quorum: u8,
        min_threshold: u64,
        max_expiry: u64,
        min_prevoting_period: u64,
        mint: Pubkey,
        min_staked_required_proposal: u64
    ) -> Result<()> {
        ctx.accounts.init(
            seed, 
            &ctx.bumps, 
            proposal_fee, 
            min_quorum, 
            min_threshold, 
            max_expiry,  
            min_prevoting_period,
            mint,
            min_staked_required_proposal
        )
    }
    pub fn initialize_sub_dao_token(
        ctx: Context<InitializeSubdaoToken>,
        seed: u64,
        proposal_fee: u64,
        min_quorum: u8,
        min_threshold: u64,
        max_expiry: u64,
        min_prevoting_period: u64,
        mint: Pubkey,
        min_staked_required_proposal: u64
    ) -> Result<()> {
        ctx.accounts.init(
            seed, 
            &ctx.bumps, 
            proposal_fee, 
            min_quorum, 
            min_threshold, 
            max_expiry,  
            min_prevoting_period,
            mint,
            min_staked_required_proposal
        )
    }
    // Instruction CPI
    // ADD PROPOSAL
    pub fn add_proposal(
        ctx: Context<CoreHandler>,
        id: u64
    ) -> Result<()> {
        ctx.accounts.add_proposal(id)
    }

    pub fn add_proposal_sub_dao(
        ctx: Context<SubDaoHandler>,
        id: u64
    ) -> Result<()> {
        ctx.accounts.add_proposal_sub_dao(id)
    }


}