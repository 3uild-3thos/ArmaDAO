use anchor_lang::prelude::*;
use daoist_programs::modules::{Proposal, ProposalStatus, DaoConfig};

use crate::errors::ProposalError;


#[derive(Accounts)]
#[instruction(id: u64)]
pub struct ProposalHandler<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        mut,
        seeds=[b"proposal", core_config.key().as_ref(), proposal.id.to_le_bytes().as_ref()],
        bump = proposal.bump
    )]
    proposal: Account<'info, Proposal>,
    #[account(
        seeds=[b"core", core_config.seed.to_le_bytes().as_ref()],
        seeds::program = daoist_programs::modules::core_program::ID,
        bump = core_config.config_bump
    )]
    core_config: Account<'info, DaoConfig>,
    system_program: Program<'info, System>
}

impl<'info> ProposalHandler<'info> {
    pub fn  add_vote(
        &mut self,
        amount: u64,
        choice : u8,
    ) -> Result<()> {
        self.proposal.try_initialize();
        require!(self.proposal.result == ProposalStatus::Open, ProposalError::InvalidProposalStatus);
        require!(amount > 0, ProposalError::InvalidVoteAmount);
        require!(choice <= self.proposal.choices, ProposalError::InvalidChoice);
        self.proposal.votes = self.proposal.votes.checked_add(amount).ok_or(ProposalError::Overflow)?;
        self.proposal.vote_counts[choice as usize] = self.proposal.vote_counts[choice as usize].checked_add(amount).ok_or(ProposalError::Overflow)?; 
        self.proposal.try_finalize();
        Ok(())
    }

    pub fn remove_vote(
        &mut self,
        amount: u64,
        choice : u8,
    ) -> Result<()> {
        require!(self.proposal.result == ProposalStatus::Open, ProposalError::InvalidProposalStatus);
        self.proposal.votes = self.proposal.votes.checked_sub(amount).ok_or(ProposalError::Underflow)?;
        self.proposal.vote_counts[choice as usize] = self.proposal.vote_counts[choice as usize].checked_sub(amount).ok_or(ProposalError::Underflow)?; 
        Ok(())
    }
}


#[derive(Accounts)]
#[instruction(id: u64)]
pub struct SubDaoProposalHandler<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        mut,
        seeds=[b"proposal", config_sub_dao.key().as_ref(), proposal.id.to_le_bytes().as_ref()],
        bump = proposal.bump
    )]
    proposal: Account<'info, Proposal>,
    #[account(
        seeds=[b"core", core_config.seed.to_le_bytes().as_ref()],
        seeds::program = daoist_programs::modules::core_program::ID,
        bump = core_config.config_bump
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

impl<'info> SubDaoProposalHandler<'info> {
    pub fn add_vote_sub_dao(
        &mut self,
        amount: u64,
        choice : u8,
    ) -> Result<()> {
        self.proposal.try_initialize();
        require!(self.proposal.result == ProposalStatus::Open, ProposalError::InvalidProposalStatus);
        require!(amount > 0, ProposalError::InvalidVoteAmount);
        require!(choice <= self.proposal.choices, ProposalError::InvalidChoice);
        self.proposal.votes = self.proposal.votes.checked_add(amount).ok_or(ProposalError::Overflow)?;
        self.proposal.vote_counts[choice as usize] = self.proposal.vote_counts[choice as usize].checked_add(amount).ok_or(ProposalError::Overflow)?; 
        self.proposal.try_finalize();
        Ok(())
    }

    pub fn remove_vote_sub_dao(
        &mut self,
        amount: u64,
        choice : u8,
    ) -> Result<()> {
        require!(self.proposal.result == ProposalStatus::Open, ProposalError::InvalidProposalStatus);
        self.proposal.votes = self.proposal.votes.checked_sub(amount).ok_or(ProposalError::Underflow)?;
        self.proposal.vote_counts[choice as usize] = self.proposal.vote_counts[choice as usize].checked_sub(amount).ok_or(ProposalError::Underflow)?; 
        Ok(())
    }
}
