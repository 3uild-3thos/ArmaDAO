use anchor_lang::prelude::*;
use daoist_programs::modules::{add_account_sub_dao, add_vote_sub_dao, DaoConfig, Proposal, ProposalProgram, StakeState, StakingProgram, SubDaoProposalHandler, SubDaoStakeHandler};
use crate::state::VoteState;

#[derive(Accounts)]
pub struct VoteSubDao<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        init,
        payer = owner,
        seeds=[b"vote", owner.key().as_ref(), proposal.key().as_ref()],
        bump,
        space = VoteState::LEN,
    )]
    vote: Account<'info, VoteState>,
    #[account(constraint = proposal_program.key() == config_sub_dao.proposal_program)]
    proposal_program: Program<'info, ProposalProgram>,
    #[account(
        seeds=[b"proposal", config_sub_dao.key().as_ref(), proposal.id.to_le_bytes().as_ref()],
        seeds::program = proposal_program.key(),
        bump = proposal.bump,
    )]
    proposal: Account<'info, Proposal>,
    #[account(constraint = staking_program.key() == config_sub_dao.staking_program)]
    staking_program: Program<'info, StakingProgram>,
    #[account(
        seeds=[b"stake", config_sub_dao.key().as_ref(), owner.key().as_ref()],
        seeds::program = staking_program.key(),
        bump = stake_state.state_bump,
    )]
    stake_state: Account<'info, StakeState>,
    #[account(
        seeds=[b"core", core_config.seed.to_le_bytes().as_ref()],
        seeds::program = daoist_programs::modules::core_program::ID,
        bump = core_config.config_bump,
    )]
    core_config: Account<'info, DaoConfig>,
    #[account(
        seeds=[b"core", config_sub_dao.seed.to_le_bytes().as_ref(), core_config.key().as_ref()],
        seeds::program = daoist_programs::modules::core_program::ID,
        bump = config_sub_dao.config_bump,
    )]
    config_sub_dao: Account<'info, DaoConfig>,
    system_program: Program<'info, System>
}

impl<'info> VoteSubDao<'info> {
    pub fn vote(
        &mut self,
        amount: u64,
        choice: u8,
        bumps: &VoteSubDaoBumps,
    ) -> Result<()> {
        //Check if actual time >= self.proposal.created_time + self.proposal.prevoting_period
        self.proposal.is_analysed()?;
        // Check proposal expiry
        self.proposal.check_expiry()?;
        // Add vote to proposal change state
        let add_vote_accounts= SubDaoProposalHandler {
            owner: self.owner.to_account_info(),
            proposal: self.proposal.to_account_info(),
            core_config: self.core_config.to_account_info(),
            config_sub_dao: self.config_sub_dao.to_account_info(),
            system_program: self.system_program.to_account_info(),
        };

        let cpi_context = CpiContext::new(
        self.proposal_program.to_account_info(),
            add_vote_accounts 
        );

        add_vote_sub_dao(cpi_context, amount, choice)?;

        // Make sure user has staked
        self.stake_state.check_stake_amount(amount)?;

        // Add a vote account to the stake state changestate
        let add_account_accounts= SubDaoStakeHandler {
            owner: self.owner.to_account_info(),
            stake_state: self.stake_state.to_account_info(),
            core_config: self.core_config.to_account_info(),
            config_sub_dao: self.config_sub_dao.to_account_info(),
            system_program: self.system_program.to_account_info(),
        };

        let cpi_context = CpiContext::new(
        self.staking_program.to_account_info(),
        add_account_accounts );

        add_account_sub_dao(cpi_context)?;

        self.vote.set_inner(VoteState { 
            owner: self.owner.key(), 
            amount, 
            choice, 
            bump: bumps.vote });

            Ok(())
    }
}
