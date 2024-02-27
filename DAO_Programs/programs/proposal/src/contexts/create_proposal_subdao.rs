use anchor_lang::{prelude::*, system_program::{Transfer, transfer}};
use daoist_programs::modules::{CoreProgram, DaoConfig, StakingProgram, StakeState, SubDaoHandler, Proposal, ProposalType, add_proposal_sub_dao};

#[derive(Accounts)]
#[instruction(id: u64)]
pub struct CreateProposalSubDao<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        init,
        payer = owner,
        seeds=[b"proposal", config_sub_dao.key().as_ref(), id.to_le_bytes().as_ref()],
        bump,
        space = Proposal::LEN
    )]
    proposal: Account<'info, Proposal>,
    core_program: Program<'info, CoreProgram>,
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
    #[account(constraint = staking_program.key() == core_config.staking_program)]
    staking_program: Program<'info, StakingProgram>,
    #[account(
        seeds=[b"stake", config_sub_dao.key().as_ref(), owner.key().as_ref()],
        seeds::program = staking_program.key(),
        bump = stake_state.state_bump,
    )]
    stake_state: Account<'info, StakeState>,
    #[account(
        seeds=[b"treasury", config_sub_dao.key().as_ref()],
        bump = config_sub_dao.treasury_bump
    )]
    treasury: SystemAccount<'info>,
    system_program: Program<'info, System>,
}
impl<'info> CreateProposalSubDao<'info> {    
    pub fn create_proposal_sub_dao(
        &mut self,
        id: u64,
        name: String,
        gist: String,
        proposal: ProposalType,
        quorum: u8,
        threshold: u64,
        expiry: u64,
        choices:u8,
        prevoting_period: u64,
        bumps: &CreateProposalSubDaoBumps,
    ) -> Result<()> {
        // Make sure user has staked the required amount
        self.config_sub_dao.check_min_staked_required_proposal(self.stake_state.amount)?;
        // Make sure quorum is valid
        self.config_sub_dao.check_valid_quorum(quorum)?;               
        // Check Minimum threshold
        self.core_config.check_min_threshold(threshold)?;
        // Check Max Expiry
        self.core_config.check_max_expiry(expiry)?;
        // Check Min Pre Voting Period
        self.core_config.check_min_pre_voting(prevoting_period)?;
        // Check Minimum Choices
        self.proposal.check_choices()?; 
        // Check ID and add proposal change state
        let check_id_add_proposal_accounts = SubDaoHandler {
            owner: self.owner.to_account_info(),
            config: self.core_config.to_account_info(),
            config_sub_dao: self.config_sub_dao.to_account_info(),
            system_program: self.system_program.to_account_info(),
        };
        let cpi_context = CpiContext::new(
        self.core_program.to_account_info(),
        check_id_add_proposal_accounts
        );
        add_proposal_sub_dao(cpi_context, id)?;                                        
        // Initialize the proposal
       self.proposal.init(
            id,
            name, // A proposal name
            gist, // 72 bytes (39 bytes + / + 32 byte ID)
            proposal,
            quorum,
            threshold,
            expiry,
            choices,
            prevoting_period,
            bumps.proposal
        )
    }
    pub fn pay_proposal_fee(
        &mut self
    ) -> Result<()> {       
        let accounts = Transfer {
            from: self.owner.to_account_info(),
            to: self.treasury.to_account_info()
        };
        let ctx = CpiContext::new(
            self.system_program.to_account_info(),
            accounts
        );
        transfer(ctx, self.config_sub_dao.proposal_fee)
    }
}