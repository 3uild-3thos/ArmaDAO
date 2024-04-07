use anchor_lang::prelude::*;
use dao::state::DaoConfig;
use crate::state::VoteState;
use proposal::state::{Proposal, ProposalProgram};
use staking::state::{StakeState, StakingProgram};

#[derive(Accounts)]

pub struct UnvoteSubDao<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        mut,
        close = treasury,
        seeds=[b"vote", owner.key().as_ref(), proposal.key().as_ref()],
        bump = vote.bump
        )]
    vote: Account<'info, VoteState>,    
    proposal_program: Program<'info, ProposalProgram>,
    #[account(
        mut,
        seeds=[b"proposal", config_sub_dao.key().as_ref(), proposal.id.to_le_bytes().as_ref()],
        seeds::program = proposal_program.key(),
        bump = proposal.bump,
    )]
    proposal: Account<'info, Proposal>,
    staking_program: Program<'info, StakingProgram>,
    #[account(
        mut,
        seeds=[b"stake", config_sub_dao.key().as_ref(), owner.key().as_ref()],
        seeds::program = staking_program.key(),
        bump = stake_state.state_bump,
    )]
    stake_state: Account<'info, StakeState>,
    #[account(
        seeds=[b"config", config.seed.to_le_bytes().as_ref()],
        seeds::program = dao::state::config::ID,
        bump = config.config_bump,
    )]
    config: Account<'info, DaoConfig>,
    #[account(
        mut,
        seeds=[b"treasury", config_sub_dao.key().as_ref()],
        seeds::program = dao::state::config::ID,
        bump = config_sub_dao.treasury_bump
    )]
    treasury: SystemAccount<'info>,
    #[account(
        seeds=[b"config", config_sub_dao.seed.to_le_bytes().as_ref(), config.key().as_ref()],
        seeds::program = dao::state::config::ID,
        bump = config_sub_dao.config_bump,
        has_one = staking_program,
        has_one = proposal_program
    )]
    config_sub_dao: Account<'info, DaoConfig>,
    system_program: Program<'info, System>,

}   

impl<'info> UnvoteSubDao<'info> {
    pub fn cleanup_vote(
        &mut self,
        amount: u64       
    ) -> Result<()> {
        // check if proposal is open and expiry
        self.proposal.is_open_and_expiry()?;

        let remove_account_accounts = staking::cpi::accounts::SubDaoStakeHandler {
            owner: self.owner.to_account_info(),
            stake_state: self.stake_state.to_account_info(),
            config: self.config.to_account_info(),
            config_sub_dao: self.config_sub_dao.to_account_info()
        };

        let cpi_context = CpiContext::new(
            self.staking_program.to_account_info(),
            remove_account_accounts );
        staking::cpi::remove_account_sub_dao(cpi_context, amount)
        
/*         // Remove a vote account from the stake state
        let remove_account_accounts= SubDaoStakeHandler {
            owner: self.owner.to_account_info(),
            stake_state: self.stake_state.to_account_info(),
            config: self.config.to_account_info(),
            config_sub_dao: self.config_sub_dao.to_account_info(),
            system_program: self.system_program.to_account_info(),
        };

        let cpi_context = CpiContext::new(
        self.staking_program.to_account_info(),
        remove_account_accounts );

        remove_account_sub_dao(cpi_context, amount) */
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

        let remove_vote_accounts =  proposal::cpi::accounts::SubDaoProposalHandler{
            owner: self.owner.to_account_info(),
            proposal: self.proposal.to_account_info(),
            config: self.config.to_account_info(),
            config_sub_dao: self.config_sub_dao.to_account_info()
        };

        let cpi_context = CpiContext::new(
            self.proposal_program.to_account_info(),
                remove_vote_accounts 
            );
        proposal::cpi::remove_vote_sub_dao(cpi_context, amount, choice)?;

/*         // Remove vote to proposal
        let remove_vote_accounts= SubDaoProposalHandler {
            owner: self.owner.to_account_info(),
            proposal: self.proposal.to_account_info(),
            config:self.config.to_account_info(),
            config_sub_dao: self.config_sub_dao.to_account_info(),
            system_program: self.system_program.to_account_info(),
        };
        let cpi_context = CpiContext::new(
        self.proposal_program.to_account_info(),
        remove_vote_accounts );

        remove_vote_sub_dao(cpi_context, amount, choice)?; */
        
        let remove_account_accounts = staking::cpi::accounts::SubDaoStakeHandler {
            owner: self.owner.to_account_info(),
            stake_state: self.stake_state.to_account_info(),
            config: self.config.to_account_info(),
            config_sub_dao: self.config_sub_dao.to_account_info()
        };

        let cpi_context = CpiContext::new(
            self.staking_program.to_account_info(),
            remove_account_accounts );
        staking::cpi::remove_account_sub_dao(cpi_context, amount)
/* 
        // Remove a vote account from the stake state
        let remove_account_accounts= SubDaoStakeHandler {
            owner: self.owner.to_account_info(),
            stake_state: self.stake_state.to_account_info(),
            config: self.config.to_account_info(),
            config_sub_dao: self.config_sub_dao.to_account_info(),
            system_program: self.system_program.to_account_info(),
        };

        let cpi_context = CpiContext::new(
        self.staking_program.to_account_info(),
        remove_account_accounts );

        remove_account_sub_dao(cpi_context, amount) */
    }
}