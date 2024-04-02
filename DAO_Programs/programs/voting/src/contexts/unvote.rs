use anchor_lang::prelude::*;
use daoist_programs::modules::{ProposalProgram, Proposal, StakingProgram, StakeState, DaoConfig,};

use crate::state::VoteState;

#[derive(Accounts)]

pub struct Unvote<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        mut,
        close = treasury,
        seeds=[b"vote", owner.key().as_ref(), proposal.key().as_ref()],
        bump = vote.bump
        )]
    vote: Account<'info, VoteState>,    
    #[account(constraint = proposal_program.key() == config.proposal_program)]
    proposal_program: Program<'info, ProposalProgram>,
    #[account(
        seeds=[b"proposal", config.key().as_ref(), proposal.id.to_le_bytes().as_ref()],
        seeds::program = proposal_program.key(),
        bump = proposal.bump,
    )]
    proposal: Account<'info, Proposal>,
    #[account(constraint = staking_program.key() == config.staking_program)]
    staking_program: Program<'info, StakingProgram>,
    #[account(
        seeds=[b"stake", config.key().as_ref(), owner.key().as_ref()],
        seeds::program = staking_program.key(),
        bump = stake_state.state_bump,
    )]
    stake_state: Account<'info, StakeState>,
    #[account(
        seeds=[b"config", config.seed.to_le_bytes().as_ref()],
        seeds::program = daoist_programs::modules::core_program::ID,
        bump = config.config_bump,
    )]
    config: Account<'info, DaoConfig>,
    #[account(
        seeds=[b"treasury", config.key().as_ref()],
        bump = config.treasury_bump
    )]
    treasury: SystemAccount<'info>,
    system_program: Program<'info, System>,

}   

impl<'info> Unvote<'info> {
    pub fn cleanup_vote(
        &mut self,
        amount: u64  
    ) -> Result<()> {
        // check if proposal is open and expiry
        self.proposal.is_open_and_expiry()?;

        
        let remove_account_accounts = staking::cpi::accounts::StakeHandler {
            owner: self.owner.to_account_info(),
            stake_state: self.stake_state.to_account_info(),
            config: self.config.to_account_info(),
        };

        let cpi_context = CpiContext::new(
            self.staking_program.to_account_info(),
            remove_account_accounts );
        staking::cpi::remove_account(cpi_context, amount)
        
        
/*         // Remove a vote account from the stake state
        let remove_account_accounts= StakeHandler {
            owner: self.owner.to_account_info(),
            stake_state: self.stake_state.to_account_info(),
            config: self.config.to_account_info(),
            system_program: self.system_program.to_account_info(),
        };

        let cpi_context = CpiContext::new(
        self.staking_program.to_account_info(),
        remove_account_accounts );

        remove_account(cpi_context, amount) */
    }
    pub fn remove_vote(
        &mut self,
        amount: u64,
        choice: u8,
    ) -> Result<()> {
        // check if proposal is open
        self.proposal.is_open()?;
        // check if proposal has expired
        self.proposal.check_expiry()?;

        let remove_vote_accounts =  proposal::cpi::accounts::ProposalHandler{
            owner: self.owner.to_account_info(),
            proposal: self.proposal.to_account_info(),
            config: self.config.to_account_info(),
        };

        let cpi_context = CpiContext::new(
            self.proposal_program.to_account_info(),
                remove_vote_accounts 
            );
        proposal::cpi::remove_vote(cpi_context, amount, choice)?;

/*         // Remove vote to proposal
        let remove_vote_accounts= ProposalHandler {
            owner: self.owner.to_account_info(),
            proposal: self.proposal.to_account_info(),
            config:self.config.to_account_info(),
            system_program: self.system_program.to_account_info(),
        };
        let cpi_context = CpiContext::new(
        self.proposal_program.to_account_info(),
        remove_vote_accounts );

        remove_vote(cpi_context, amount, choice)?; */

        let remove_account_accounts = staking::cpi::accounts::StakeHandler {
            owner: self.owner.to_account_info(),
            stake_state: self.stake_state.to_account_info(),
            config: self.config.to_account_info(),
        };

        let cpi_context = CpiContext::new(
            self.staking_program.to_account_info(),
            remove_account_accounts );
        staking::cpi::remove_account(cpi_context, amount)


        /*       
        // Remove a vote account from the stake state
        let remove_account_accounts= StakeHandler {
            owner: self.owner.to_account_info(),
            stake_state: self.stake_state.to_account_info(),
            config: self.config.to_account_info(),
            system_program: self.system_program.to_account_info(),
        };

        let cpi_context = CpiContext::new(
        self.staking_program.to_account_info(),
        remove_account_accounts );

        remove_account(cpi_context, amount) */
        
    }
}