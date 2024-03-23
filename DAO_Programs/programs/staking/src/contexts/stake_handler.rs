use anchor_lang::prelude::*;
use daoist_programs::modules::{StakeState, DaoConfig};

use crate::errors::StakeError;

#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct StakeHandler<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        mut,
        seeds=[b"stake", core_config.key().as_ref(), owner.key().as_ref()],
        bump = stake_state.state_bump
    )]
    stake_state: Account<'info, StakeState>,
    #[account(
        seeds=[b"core", core_config.seed.to_le_bytes().as_ref()],
        seeds::program = daoist_programs::modules::core_program::ID,
        bump = core_config.config_bump,
    )]
    core_config: Account<'info, DaoConfig>,
    system_program: Program<'info, System>
}

impl<'info> StakeHandler<'info> {
    // Add a vote account to the stake state
    pub fn add_account(&mut self, amount: u64) -> Result<()> {
        self.stake_state.accounts = self.stake_state.accounts.checked_add(1).ok_or(StakeError::Overflow)?;
        self.stake_state.accounts = self.stake_state.locked_amount.checked_add(amount).ok_or(StakeError::Overflow)?;
        Ok(())
    }
    // Remove a vote account from the stake state
    pub fn remove_account(&mut self, amount: u64) -> Result<()> {
        self.stake_state.accounts = self.stake_state.accounts.checked_sub(1).ok_or(StakeError::Underflow)?;
        self.stake_state.accounts = self.stake_state.locked_amount.checked_sub(amount).ok_or(StakeError::Underflow)?;
        Ok(())
    }    


}

#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct SubDaoStakeHandler<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        mut,
        seeds=[b"stake", config_sub_dao.key().as_ref(), owner.key().as_ref()],
        bump = stake_state.state_bump
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

impl<'info> SubDaoStakeHandler<'info> {
    // Add a vote account to the stake state
    pub fn add_account_sub_dao(&mut self, amount: u64) -> Result<()> {
        self.stake_state.accounts = self.stake_state.accounts.checked_add(1).ok_or(StakeError::Overflow)?;
        self.stake_state.accounts = self.stake_state.locked_amount.checked_add(amount).ok_or(StakeError::Overflow)?;
        Ok(())
    }
    // Remove a vote account from the stake state
    pub fn remove_account_sub_dao(&mut self, amount: u64) -> Result<()> {
        self.stake_state.accounts = self.stake_state.accounts.checked_sub(1).ok_or(StakeError::Underflow)?;
        self.stake_state.accounts = self.stake_state.locked_amount.checked_sub(amount).ok_or(StakeError::Underflow)?;
        Ok(())
    }    


}