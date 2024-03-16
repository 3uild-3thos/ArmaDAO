use anchor_lang::prelude::*;
use anchor_spl::{
    token_interface::{TokenAccount, Mint, TokenInterface, TransferChecked, transfer_checked}, 
    associated_token::AssociatedToken,
   /*  metadata::{Metadata, MetadataAccount, MasterEditionAccount} */
};
use daoist_programs::modules::{StakeState, DaoConfig};
/* use crate::validate_nft;
use crate::errors::StakeError; */

#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct Stake<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        mut,
        associated_token::mint = mint,
        associated_token::authority = owner
    )]
    owner_ata: Box<InterfaceAccount<'info, TokenAccount>>,
    #[account(
        mut,
        seeds = [b"vault", core_config.key().as_ref(), owner.key().as_ref()],
        bump = stake_state.vault_bump,
        token::mint = mint,
        token::authority = stake_auth
    )]
    stake_ata: Box<InterfaceAccount<'info, TokenAccount>>,
    #[account(
        seeds=[b"auth", core_config.key().as_ref(), owner.key().as_ref()],
        bump = stake_state.auth_bump
    )]
    ///CHECK: This is safe. It's just used to sign things
    stake_auth: UncheckedAccount<'info>,
    #[account(constraint = mint.key() == core_config.mint.expect("Mint not initialized"))]
    mint: InterfaceAccount<'info, Mint>,
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
    token_program: Interface<'info, TokenInterface>,
    associated_token_program: Program<'info, AssociatedToken>,
    system_program: Program<'info, System>
}

impl<'info> Stake<'info> {
    pub fn deposit_tokens(
        &mut self,
        amount: u64
    ) -> Result<()> {
        self.stake_state.stake(amount)?;

        let accounts = TransferChecked {
            from: self.owner_ata.to_account_info(),
            to: self.stake_ata.to_account_info(),
            authority: self.owner.to_account_info(),
            mint: self.mint.to_account_info(),

        };

        let ctx = CpiContext::new(
            self.token_program.to_account_info(),
            accounts
        );
        transfer_checked(ctx, amount, self.mint.decimals)
    }

    pub fn withdraw_tokens(
        &mut self,
        amount: u64
    ) -> Result<()> {
        self.stake_state.unstake(amount)?;

        let accounts = TransferChecked {
            from: self.stake_ata.to_account_info(),
            to: self.owner_ata.to_account_info(),
            authority: self.stake_auth.to_account_info(),
            mint: self.mint.to_account_info()
        };

        let seeds = &[
            &b"auth"[..],
            &self.core_config.key().to_bytes()[..],
            &self.owner.key().to_bytes()[..],
            &[self.stake_state.auth_bump],
        ];

        let signer_seeds = &[&seeds[..]];

        let ctx = CpiContext::new_with_signer(
            self.token_program.to_account_info(),
            accounts,
            signer_seeds
        );

        transfer_checked(ctx, amount, self.mint.decimals)
    }
}

/* #[derive(Accounts)]
#[instruction(seed: u64)]
pub struct StakeNft<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        mut,
        associated_token::mint = nft,
        associated_token::authority = owner
    )]
    owner_ata: Box<InterfaceAccount<'info, TokenAccount>>,
    #[account(
        mut,
        seeds = [b"vault", core_config.key().as_ref(), owner.key().as_ref()],
        bump = stake_state.vault_bump,
        token::mint = nft,
        token::authority = stake_auth
    )]
    stake_ata: Box<InterfaceAccount<'info, TokenAccount>>,
    #[account(
        seeds=[b"auth", core_config.key().as_ref(), owner.key().as_ref()],
        bump = stake_state.auth_bump
    )]
    ///CHECK: This is safe. It's just used to sign things
    stake_auth: UncheckedAccount<'info>,
    #[account(constraint = collection.key() == core_config.collection_mint.expect("Collection mint not initialized"))]
    collection: InterfaceAccount<'info, Mint>,
    nft: InterfaceAccount<'info, Mint>,
    #[account(
        seeds = [
            b"metadata",
            metadata_program.key().as_ref(),
            nft.key().as_ref()
        ],
        seeds::program = metadata_program.key(),
        bump,
        constraint = metadata.collection.as_ref().unwrap().key.as_ref() == collection.key().as_ref(),
        constraint = metadata.collection.as_ref().unwrap().verified == true,
    )]
    metadata: Account<'info, MetadataAccount>,
    #[account(
        seeds = [
            b"metadata",
            metadata_program.key().as_ref(),
            nft.key().as_ref(),
            b"edition"
        ],
        seeds::program = metadata_program.key(),
        bump,
    )]
    master_edition: Account<'info, MasterEditionAccount>,
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
    metadata_program: Program<'info, Metadata>,
    token_program: Interface<'info, TokenInterface>,
    associated_token_program: Program<'info, AssociatedToken>,
    system_program: Program<'info, System>
}

impl<'info> StakeNft<'info> {
    pub fn deposit_tokens(
        &mut self,
        amount: u64
    ) -> Result<()> {
        // Check if NFT is Verified
        validate_nft!(
            self.metadata.collection, 
            self.collection
            );
        self.stake_state.stake(amount)?;

        let accounts = TransferChecked {
            from: self.owner_ata.to_account_info(),
            to: self.stake_ata.to_account_info(),
            authority: self.owner.to_account_info(),
            mint: self.nft.to_account_info(),

        };

        let ctx = CpiContext::new(
            self.token_program.to_account_info(),
            accounts
        );
        transfer_checked(ctx, amount, self.nft.decimals)
    }

    pub fn withdraw_tokens(
        &mut self,
        amount: u64
    ) -> Result<()> {
        self.stake_state.unstake(amount)?;

        let accounts = TransferChecked {
            from: self.stake_ata.to_account_info(),
            to: self.owner_ata.to_account_info(),
            authority: self.stake_auth.to_account_info(),
            mint: self.nft.to_account_info()
        };

        let seeds = &[
            &b"auth"[..],
            &self.core_config.key().to_bytes()[..],
            &self.owner.key().to_bytes()[..],
            &[self.stake_state.auth_bump],
        ];

        let signer_seeds = &[&seeds[..]];

        let ctx = CpiContext::new_with_signer(
            self.token_program.to_account_info(),
            accounts,
            signer_seeds
        );

        transfer_checked(ctx, amount, self.nft.decimals)
    }
} */