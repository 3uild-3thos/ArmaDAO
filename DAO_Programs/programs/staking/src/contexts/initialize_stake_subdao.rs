use anchor_lang::prelude::*;
use anchor_spl::{
    token_interface::{TokenAccount, Mint, TokenInterface},  
    associated_token::AssociatedToken
};
use daoist_programs::modules::{StakeState,DaoConfig};


#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct InitializeStakeSubDao<'info> {
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
        seeds = [b"vault", config_sub_dao.key().as_ref(), owner.key().as_ref()],
        bump,
        token::mint = mint,
        token::authority = stake_auth
    )]
    stake_ata: InterfaceAccount<'info, TokenAccount>,
    #[account(
        seeds=[b"auth", config_sub_dao.key().as_ref(), owner.key().as_ref()],
        bump
    )]
    ///CHECK: This is safe. It's just used to sign things
    stake_auth: UncheckedAccount<'info>,
    #[account(constraint = mint.key() == config_sub_dao.mint.expect("Mint not initialized"))]
    mint: InterfaceAccount<'info, Mint>,
    #[account(
        init,
        payer = owner,
        seeds=[b"stake", config_sub_dao.key().as_ref(), owner.key().as_ref()],
        bump,
        space = StakeState::LEN
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