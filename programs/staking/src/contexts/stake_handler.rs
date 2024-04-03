use anchor_lang::prelude::*;
/* use daoist_programs::modules::{StakeState, /* DaoConfig */}; */
use dao::state::DaoConfig;
use crate::errors::StakeError;
use crate::state::{StakeState, /* StakingProgram */};
#[derive(Accounts)]
pub struct StakeHandler<'info> {
    #[account(mut)]
    owner: AccountInfo<'info>,
    #[account(
        mut,
        seeds=[b"stake", config.key().as_ref(), owner.key().as_ref()],
        bump = stake_state.state_bump
    )]
    stake_state: Account<'info, StakeState>,
    #[account(
        seeds=[b"config", config.seed.to_le_bytes().as_ref()],
        seeds::program = dao::state::config::ID,
        bump = config.config_bump,
    )]
    config: Account<'info, DaoConfig>,
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
pub struct SubDaoStakeHandler<'info> {
    #[account(mut)]
    owner: AccountInfo<'info>,
    #[account(
        mut,
        seeds=[b"stake", config_sub_dao.key().as_ref(), owner.key().as_ref()],
        bump = stake_state.state_bump
    )]
    stake_state: Account<'info, StakeState>,
    #[account(
        seeds=[b"config", config.seed.to_le_bytes().as_ref()],
        seeds::program = dao::state::config::ID,
        bump = config.config_bump,
    )]
    config: Account<'info, DaoConfig>,
    #[account(
        seeds=[b"config", config_sub_dao.seed.to_le_bytes().as_ref(), config.key().as_ref()],
        seeds::program = dao::state::config::ID,
        bump = config_sub_dao.config_bump,
    )]
    config_sub_dao: Account<'info, DaoConfig>,
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
        seeds::program = dao::state::config::ID,
        bump = config.config_bump,
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