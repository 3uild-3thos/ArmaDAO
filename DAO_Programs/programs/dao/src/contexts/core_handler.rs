use anchor_lang::prelude::*;
use daoist_programs::modules::DaoConfig;

use crate::errors::DaoError;

#[derive(Accounts)]
pub struct CoreHandler<'info> {
    #[account(mut)]
    owner: AccountInfo<'info>,
    #[account(
        mut,
        seeds=[b"config", config.seed.to_le_bytes().as_ref()],
        bump = config.config_bump
    )]
    config: Account<'info, DaoConfig>,
}

impl<'info> CoreHandler<'info> {

    pub fn add_proposal(&mut self, id: u64) -> Result<()> {
        self.config.proposal_count = self.config.proposal_count.checked_add(1).ok_or(DaoError::Overflow)?;
        require!(self.config.proposal_count == id, DaoError::InvalidProposalSeed);
        Ok(())
    }

}

#[derive(Accounts)]
pub struct SubDaoHandler<'info> {
    #[account(mut)]
    owner: AccountInfo<'info>,
    #[account(
        seeds=[b"config", config.seed.to_le_bytes().as_ref()],
        bump = config.config_bump
    )]
    config: Account<'info, DaoConfig>,
    #[account(
        mut,
        seeds=[b"config", config_sub_dao.seed.to_le_bytes().as_ref(), config.key().as_ref()],
        bump = config_sub_dao.config_bump
    )]
    config_sub_dao: Account<'info, DaoConfig>,
}
impl<'info> SubDaoHandler<'info> {

    pub fn add_proposal_sub_dao(&mut self, id: u64) -> Result<()> {
        self.config_sub_dao.proposal_count = self.config_sub_dao.proposal_count.checked_add(1).ok_or(DaoError::Overflow)?;
        require!(self.config_sub_dao.proposal_count == id, DaoError::InvalidProposalSeed);
        Ok(())
    }

}