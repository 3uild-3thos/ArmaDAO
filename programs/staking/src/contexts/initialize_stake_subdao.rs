use anchor_lang::prelude::*;
use anchor_spl::{
    token_interface::{TokenAccount, Mint, TokenInterface},  
    associated_token::AssociatedToken,
    metadata::{Metadata, MetadataAccount}, 
};
/* use daoist_programs::modules::{StakeState,/* DaoConfig */}; */
use dao::state::DaoConfig;
use crate::state::StakeState;

#[derive(Accounts)]
pub struct InitializeStakeSubDao<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        associated_token::mint = mint,
        associated_token::authority = owner
    )]
    owner_ata: Box<InterfaceAccount<'info, TokenAccount>>,
    #[account(
        init,
        payer = owner,
        seeds = [b"vault", config_sub_dao.key().as_ref(), owner.key().as_ref(), mint.key().as_ref()],
        bump,
        token::mint = mint,
        token::authority = stake_auth
    )]
    stake_ata: Box<InterfaceAccount<'info, TokenAccount>>,
    #[account(
        seeds=[b"auth", config_sub_dao.key().as_ref(), owner.key().as_ref()],
        bump
    )]
    ///CHECK: This is safe. It's just used to sign things
    stake_auth: UncheckedAccount<'info>,
    mint: Box<InterfaceAccount<'info, Mint>>,
    #[account(
        init,
        payer = owner,
        seeds=[b"stake", config_sub_dao.key().as_ref(), owner.key().as_ref()],
        bump,
        space = StakeState::LEN
    )]
    stake_state: Box<Account<'info, StakeState>>,
    #[account(
        seeds=[b"config", config.seed.to_le_bytes().as_ref()],
        seeds::program = dao::state::config::ID,
        bump = config.config_bump,
    )]
    config: Box<Account<'info, DaoConfig>>,
    #[account(
        seeds=[b"config", config_sub_dao.seed.to_le_bytes().as_ref(), config.key().as_ref()],
        seeds::program = dao::state::config::ID,
        bump = config_sub_dao.config_bump,
        constraint = config_sub_dao.mint.as_ref().unwrap().key().as_ref() == mint.key().as_ref(),
    )]
    config_sub_dao: Box<Account<'info, DaoConfig>>,
    token_program: Interface<'info, TokenInterface>,
    associated_token_program: Program<'info, AssociatedToken>,
    system_program: Program<'info, System>
}

impl<'info> InitializeStakeSubDao<'info> {
    pub fn init(
        &mut self,
        bumps: &InitializeStakeSubDaoBumps
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
pub struct InitializeStakeSubDaoNft<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        associated_token::mint = nft,
        associated_token::authority = owner
    )]
    owner_ata: Box<InterfaceAccount<'info, TokenAccount>>,
    #[account(
        init,
        payer = owner,
        seeds = [b"vault", config_sub_dao.key().as_ref(), owner.key().as_ref(), nft.key().as_ref()],
        bump,
        token::mint = nft,
        token::authority = stake_auth
    )]
    stake_ata: Box<InterfaceAccount<'info, TokenAccount>>,
    #[account(
        seeds=[b"auth", config_sub_dao.key().as_ref(), owner.key().as_ref()],
        bump
    )]
    ///CHECK: This is safe. It's just used to sign things
    stake_auth: UncheckedAccount<'info>,
    #[account(constraint = collection.key() == config_sub_dao.collection_mint.expect("Collection mint not initialized"))]
    collection: InterfaceAccount<'info, Mint>,
    nft: InterfaceAccount<'info, Mint>,
    #[account(
        init_if_needed,
        payer = owner,
        seeds=[b"stake", config_sub_dao.key().as_ref(), owner.key().as_ref()],
        bump,
        space = StakeState::LEN
    )]
    stake_state: Box<Account<'info, StakeState>>,
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

impl<'info> InitializeStakeSubDaoNft<'info> {
    pub fn init(
        &mut self,
        bumps: &InitializeStakeSubDaoNftBumps
    ) -> Result<()> {
        // Make sure its NFT based DAO
        self.config_sub_dao.ensure_not_hybrid ()?;
        self.stake_state.init(
            self.owner.key(),
            bumps.stake_state,
            bumps.stake_ata,
            bumps.stake_auth
        )
    }
}