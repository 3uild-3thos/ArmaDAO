use anchor_lang::prelude::*;
use anchor_spl::{
    token_interface::{TokenAccount, Mint, TokenInterface},  
    associated_token::AssociatedToken,
    metadata::{Metadata, MetadataAccount}, 
};
use daoist_programs::modules::{StakeState,DaoConfig};


#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct InitializeStake<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        associated_token::mint = mint,
        associated_token::authority = owner
    )]
    owner_ata: InterfaceAccount<'info, TokenAccount>,
    #[account(
        init,
        payer = owner,
        seeds = [b"vault", config.key().as_ref(), owner.key().as_ref()],
        bump,
        token::mint = mint,
        token::authority = stake_auth
    )]
    stake_ata: InterfaceAccount<'info, TokenAccount>,
    #[account(
        seeds=[b"auth", config.key().as_ref(), owner.key().as_ref()],
        bump
    )]
    ///CHECK: This is safe. It's just used to sign things
    stake_auth: UncheckedAccount<'info>,
    #[account(constraint = mint.key() == config.mint.expect("Mint not initialized"))]
    mint: InterfaceAccount<'info, Mint>,
    #[account(
        init,
        payer = owner,
        seeds=[b"stake", config.key().as_ref(), owner.key().as_ref()],
        bump,
        space = StakeState::LEN
    )]
    stake_state: Account<'info, StakeState>,
    #[account(
        seeds=[b"config", config.seed.to_le_bytes().as_ref()],
        seeds::program = daoist_programs::modules::core_program::ID,
        bump = config.config_bump,
    )]
    config: Account<'info, DaoConfig>,
    token_program: Interface<'info, TokenInterface>,
    associated_token_program: Program<'info, AssociatedToken>,
    system_program: Program<'info, System>
}

impl<'info> InitializeStake<'info> {
    pub fn init(
        &mut self,
        bumps: &InitializeStakeBumps
    ) -> Result<()> {
        self.stake_state.init(
            self.owner.key(),
            bumps.stake_state,
            bumps.stake_ata,
            bumps.stake_auth
        )
    }
}

#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct InitializeStakeNft<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        associated_token::mint = nft,
        associated_token::authority = owner
    )]
    owner_ata: InterfaceAccount<'info, TokenAccount>,
    #[account(
        init,
        payer = owner,
        seeds = [b"vault", config.key().as_ref(), owner.key().as_ref()],
        bump,
        token::mint = nft,
        token::authority = stake_auth
    )]
    stake_ata: InterfaceAccount<'info, TokenAccount>,
    #[account(
        seeds=[b"auth", config.key().as_ref(), owner.key().as_ref()],
        bump
    )]
    ///CHECK: This is safe. It's just used to sign things
    stake_auth: UncheckedAccount<'info>,
    #[account(constraint = collection.key() == config.collection_mint.expect("Collection mint not initialized"))]
    collection: InterfaceAccount<'info, Mint>,
    nft: InterfaceAccount<'info, Mint>,
    #[account(
        init,
        payer = owner,
        seeds=[b"stake", config.key().as_ref(), owner.key().as_ref()],
        bump,
        space = StakeState::LEN
    )]
    stake_state: Account<'info, StakeState>,
    #[account(
        seeds=[b"config", config.seed.to_le_bytes().as_ref()],
        seeds::program = daoist_programs::modules::core_program::ID,
        bump = config.config_bump,
    )]
    config: Account<'info, DaoConfig>,
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
    metadata_program: Program<'info, Metadata>,
    token_program: Interface<'info, TokenInterface>,
    associated_token_program: Program<'info, AssociatedToken>,
    system_program: Program<'info, System>
}

impl<'info> InitializeStakeNft<'info> {
    pub fn init(
        &mut self,
        bumps: &InitializeStakeNftBumps
    ) -> Result<()> {
        self.stake_state.init(
            self.owner.key(),
            bumps.stake_state,
            bumps.stake_ata,
            bumps.stake_auth
        )
    }
}