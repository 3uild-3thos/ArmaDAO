use anchor_lang::prelude::*;
use anchor_spl::{token_interface::{Mint, TokenAccount, TokenInterface, CloseAccount, close_account}, associated_token::AssociatedToken};
use daoist_programs::modules::{StakeState, DaoConfig};

use crate::errors::StakeError;

#[derive(Accounts)]
pub struct CleanupStake<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        mut,
        seeds = [b"vault", config.key().as_ref(), owner.key().as_ref()],
        bump = stake_state.vault_bump,
        token::mint = mint,
        token::authority = stake_auth
    )]
    stake_ata: InterfaceAccount<'info, TokenAccount>,
    #[account(
        seeds=[b"auth", config.key().as_ref(), owner.key().as_ref()],
        bump = stake_state.auth_bump
    )]
    ///CHECK: This is safe. It's just used to sign things
    stake_auth: UncheckedAccount<'info>,
    #[account(constraint = mint.key() == config.mint.expect("Mint not initialized"))]
    mint: InterfaceAccount<'info, Mint>,
    #[account(
        mut,
        close = owner,
        seeds=[b"stake", config.key().as_ref(), owner.key().as_ref()],
        bump = stake_state.state_bump
    )]
    stake_state: Account<'info, StakeState>,
    #[account(
        seeds=[b"core", config.seed.to_le_bytes().as_ref()],
        seeds::program = daoist_programs::modules::core_program::ID,
        bump = config.config_bump,
    )]
    config: Account<'info, DaoConfig>,
    #[account(
        seeds=[b"treasury", config.key().as_ref()],
        bump = config.treasury_bump
    )]
    treasury: SystemAccount<'info>,
    token_program: Interface<'info, TokenInterface>,
    associated_token_program: Program<'info, AssociatedToken>,
    system_program: Program<'info, System>
}

impl<'info> CleanupStake<'info> {
    pub fn cleanup_stake(
        &mut self,
        _bumps: &CleanupStakeBumps,
    ) -> Result<()> {
        self.close_stake_ata()?;
        match self.stake_state.check_stake() {
            Ok(_) => err!(StakeError::InvalidStakeAmount),
            Err(_) => Ok(())
        }
    }

    pub fn close_stake_ata(
        &self
    ) -> Result<()> {
        let accounts = CloseAccount {
            account: self.stake_ata.to_account_info(),
            destination: self.owner.to_account_info(),
            authority: self.stake_auth.to_account_info()
        };

        let seeds = &[
            &b"auth"[..],
            &self.config.key().to_bytes()[..],
            &self.owner.key().to_bytes()[..],
            &[self.stake_state.auth_bump],
        ];

        let signer_seeds = &[&seeds[..]];

        let ctx = CpiContext::new_with_signer(
            self.token_program.to_account_info(), 
            accounts, 
            signer_seeds
        );

        close_account(ctx)
    }


}
#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct CleanupStakeNft<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        mut,
        seeds = [b"vault", config.key().as_ref(), owner.key().as_ref()],
        bump,
        token::mint = nft,
        token::authority = stake_auth
    )]
    stake_ata: InterfaceAccount<'info, TokenAccount>,
    #[account(
        seeds=[b"auth", config.key().as_ref(), owner.key().as_ref()],
        bump = stake_state.auth_bump
    )]
    ///CHECK: This is safe. It's just used to sign things
    stake_auth: UncheckedAccount<'info>,
    nft: InterfaceAccount<'info, Mint>,
    #[account(constraint = collection.key() == config.collection_mint.expect("Collection mint not initialized"))]
    collection: InterfaceAccount<'info, Mint>,
    #[account(
        mut,
        close = owner,
        seeds=[b"stake", config.key().as_ref(), owner.key().as_ref()],
        bump = stake_state.state_bump
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
    token_program: Interface<'info, TokenInterface>,
    associated_token_program: Program<'info, AssociatedToken>,
    system_program: Program<'info, System>
}

impl<'info> CleanupStakeNft<'info> {
    pub fn cleanup_stake(
        &mut self,
        _bumps: &CleanupStakeNftBumps,
    ) -> Result<()> {
        self.close_stake_ata()?;
        match self.stake_state.check_stake() {
            Ok(_) => err!(StakeError::InvalidStakeAmount),
            Err(_) => Ok(())
        }
    }

    pub fn close_stake_ata(
        &self
    ) -> Result<()> {
        let accounts = CloseAccount {
            account: self.stake_ata.to_account_info(),
            destination: self.owner.to_account_info(),
            authority: self.stake_auth.to_account_info()
        };

        let seeds = &[
            &b"auth"[..],
            &self.config.key().to_bytes()[..],
            &self.owner.key().to_bytes()[..],
            &[self.stake_state.auth_bump],
        ];

        let signer_seeds = &[&seeds[..]];

        let ctx = CpiContext::new_with_signer(
            self.token_program.to_account_info(), 
            accounts, 
            signer_seeds
        );

        close_account(ctx)
    }


}
