use anchor_lang::prelude::*;
pub mod contexts;
pub use contexts::*;
mod errors;
mod helpers;
use daoist_programs::modules::ProposalType;

declare_id!("propm845StqEBV57ZSnTe8EW8duzAxo5p7h4inhibXV");

#[program]
pub mod proposal {
    use super::*;
     
    // Create a proposal Hybrid
    pub fn create_proposal(
        ctx: Context<CreateProposal>, 
        id: u64, 
        name: String, 
        gist: String, 
        proposal: ProposalType,
        quorum: u8, 
        threshold: u64,
        expiry: u64,
        choices:u8,
        evaluation_period:u64,

    ) -> Result<()> {
        // Pay a proposal fee to DAO treasury
        ctx.accounts.pay_proposal_fee()?;

        // Ensure user has actually got tokens staked and create a new proposal
        ctx.accounts.create_proposal(
            id, 
            name, 
            gist,
            proposal,
            quorum,
            threshold,
            expiry,
            choices,
            evaluation_period,
            &ctx.bumps
        )
    }
    // Create a proposal staked based
    pub fn create_proposal_staked(
        ctx: Context<StakeCreateProposal>, 
        id: u64, 
        name: String, 
        gist: String, 
        proposal: ProposalType,
        quorum: u8, 
        threshold: u64,
        expiry: u64,
        choices:u8,
        evaluation_period:u64,
    ) -> Result<()> {
        // Pay a proposal fee to DAO treasury
        ctx.accounts.pay_proposal_fee()?;

        // Ensure user has actually got tokens staked and create a new proposal
        ctx.accounts.create_proposal(
            id, 
            name, 
            gist,
            proposal,
            quorum,
            threshold,
            expiry,
            choices,
            evaluation_period,
            &ctx.bumps
        )
    }
    // Cleanup a proposal
    pub fn cleanup_proposal(
        ctx: Context<CleanupProposal>,
    ) -> Result<()> {
        ctx.accounts.cleanup_proposal()
    }

    // execute a proposal
    pub fn execute_proposal(
        ctx: Context<CleanupProposal>,
    ) -> Result<()> {   
        ctx.accounts.execute_proposal()
    }   
    // Create a SubDao Proposal
    pub fn create_proposal_sub_dao(
        ctx: Context<CreateProposalSubDao>, 
        id: u64, 
        name: String, 
        gist: String, 
        proposal: ProposalType,
        quorum: u8, 
        threshold: u64,
        expiry: u64,
        choices:u8,
        evaluation_period:u64,

    ) -> Result<()> {
        // Pay a proposal fee to DAO treasury
        ctx.accounts.pay_proposal_fee()?;

        // Ensure user has actually got tokens staked and create a new proposal
        ctx.accounts.create_proposal_sub_dao(
            id, 
            name, 
            gist,
            proposal,
            quorum,
            threshold,
            expiry,
            choices,
            evaluation_period,
            &ctx.bumps
        )
    } 
    // Cleanup a proposal
    pub fn cleanup_proposal_sub_dao(
        ctx: Context<CleanupProposalSubDao>,
    ) -> Result<()> {
        ctx.accounts.cleanup_proposal_sub_dao()
    }
    // execute a proposal_sub_dao
    pub fn execute_proposal_sub_dao(
        ctx: Context<CleanupProposalSubDao>,
    ) -> Result<()> {   
        ctx.accounts.execute_proposal()
    } 
    // INSTRUCTIONS CPIS
    // ADD VOTE
    pub fn add_vote(
        ctx: Context<ProposalHandler>,
        amount: u64, 
        choice: u8
    ) -> Result<()> {
        ctx.accounts.add_vote(amount, choice)
    }
    // REMOVE VOTE
    pub fn remove_vote(
        ctx: Context<ProposalHandler>,
        amount: u64, 
        choice: u8
    ) -> Result<()> {
        ctx.accounts.remove_vote(amount, choice)
    }
    // ADD VOTE
    pub fn add_vote_sub_dao(
        ctx: Context<SubDaoProposalHandler>,
        amount: u64, 
        choice: u8
    ) -> Result<()> {
        ctx.accounts.add_vote_sub_dao(amount, choice)
    }
    // REMOVE VOTE
    pub fn remove_vote_sub_dao(
        ctx: Context<SubDaoProposalHandler>,
        amount: u64, 
        choice: u8
    ) -> Result<()> {
        ctx.accounts.remove_vote_sub_dao(amount, choice)
    }
}

