use anchor_lang::prelude::*;

use daoist_programs::modules::DaoConfig;

#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct Initialize<'info> {
    #[account(mut)]
    initializer: Signer<'info>,
    #[account(
        seeds=[b"auth", config.key().as_ref()],
        bump
    )]
    ///CHECK: This is safe. It's just used to sign things
    auth: UncheckedAccount<'info>,
    #[account(
        seeds=[b"treasury", config.key().as_ref()],
        bump
    )]
    treasury: SystemAccount<'info>,
    #[account(
        init,
        payer = initializer,
        seeds=[b"config", seed.to_le_bytes().as_ref()],
        bump,
        space = DaoConfig::LEN
    )]
    config: Account<'info, DaoConfig>,
    system_program: Program<'info, System>
}

impl<'info> Initialize<'info> {
    pub fn init(
        &mut self, 
        seed: u64,
        bumps: &InitializeBumps,
        proposal_fee: u64,
        min_quorum: u8,//0-100
        min_threshold: u64,
        max_expiry: u64,
        evaluation_phase_period: u64,
        proposal_program: Pubkey,
        voting_program: Pubkey,
        staking_program: Pubkey,
        collection_mint: Option<Pubkey>,
        mint: Option<Pubkey>,
        min_staked_required_proposal: Option<u64>,
        allow_sub_dao: bool,
        min_staked_create_subdao: Option<u64>
    ) -> Result<()> {

            self.config.check_init_valid_quorum(min_quorum)?;
        
            self.config.init(
                seed,
                //settings
                proposal_fee,
                min_quorum,
                min_threshold,
                max_expiry,
                evaluation_phase_period,
                //Programs
                proposal_program,
                voting_program, 
                staking_program,
                //Bumps
                bumps.auth,
                bumps.config,
                bumps.treasury,
                //Optional
                collection_mint,
                //Optional
                mint,
                //Optional
                min_staked_required_proposal,
                //Boolean
                allow_sub_dao,
                //Optional
                min_staked_create_subdao,
             )             
   
    }
}