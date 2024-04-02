use anchor_lang::{prelude::*, system_program::{Transfer, transfer}};
use daoist_programs::modules::{CoreProgram, DaoConfig, StakingProgram, StakeState, Proposal, ProposalType};
use anchor_spl::{
    token_interface::{TokenAccount, Mint, TokenInterface}, 
    metadata::{Metadata, MetadataAccount,MasterEditionAccount}, 
    associated_token::AssociatedToken
};
use crate::validate_nft;
use crate::errors::ProposalError;


#[derive(Accounts)]
#[instruction(id: u64)]
pub struct CreateProposal<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        mut,
        associated_token::mint = nft,
        associated_token::authority = owner
    )]
    owner_ata: InterfaceAccount<'info, TokenAccount>,
    nft: InterfaceAccount<'info, Mint>,
    #[account(constraint = collection.key() == config.collection_mint.expect("Collection mint not initialized"))]
    collection: InterfaceAccount<'info, Mint>,
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
        init,
        payer = owner,
        seeds=[b"proposal", config.key().as_ref(), id.to_le_bytes().as_ref()],
        bump,
        space = Proposal::LEN
    )]
    proposal: Account<'info, Proposal>,
    core_program: Program<'info, CoreProgram>,
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
    metadata_program: Program<'info, Metadata>,
    token_program: Interface<'info, TokenInterface>,
    associated_token_program: Program<'info, AssociatedToken>,
    system_program: Program<'info, System>,
}
impl<'info> CreateProposal<'info> {    
    pub fn create_proposal(
        &mut self,
        id: u64,
        name: String,
        metadata: String,
        proposal: ProposalType,
        quorum: u8,
        threshold: u64,
        expiry: u64,
        choices:u8,
        evaluation_period: u64,
        bumps: &CreateProposalBumps,
    ) -> Result<()> {
        // Check if NFT is Verified
        validate_nft!(
            self.metadata.collection, 
            self.collection
            );
        //Make sure its not staked based
        self.config.check_staked_create_proposal_is_none()?;    
        // Make sure quorum is valid    
        self.config.check_valid_quorum(quorum)?;                 
        // Check Minimum threshold
        self.config.check_min_threshold(threshold)?;
        // Check Max Expiry
        self.config.check_max_expiry(expiry)?;
        // Check Min Pre Voting Period
        self.config.check_evaluation_phase_period(evaluation_period)?;
        // Check Minimum Choices
        self.proposal.check_choices()?;

        let check_id_add_proposal_accounts = dao::cpi::accounts::CoreHandler {
            owner: self.owner.to_account_info(),
            config: self.config.to_account_info(),
        };
        let cpi_context = CpiContext::new(
            self.core_program.to_account_info(),
            check_id_add_proposal_accounts
        );
            
        dao::cpi::add_proposal(cpi_context, id)?;

/*         // Check ID and add proposal change state
        let check_id_add_proposal_accounts = CoreHandler {
            owner: self.owner.to_account_info(),
            config: self.config.to_account_info(),
            system_program: self.system_program.to_account_info(),
        };
        let cpi_context = CpiContext::new(
        self.core_program.to_account_info(),
        check_id_add_proposal_accounts
        );
        add_proposal(cpi_context, id)?;       */                                   
        // Initialize the proposal
       self.proposal.init(
            id,
            name, // A proposal name
            metadata, // 72 bytes (39 bytes + / + 32 byte ID)
            proposal,
            quorum,
            threshold,
            expiry,
            choices,
            evaluation_period,
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
        transfer(ctx, self.config.proposal_fee)
    }
}

#[derive(Accounts)]
#[instruction(id: u64)]
pub struct StakeCreateProposal<'info> {
    #[account(mut)]
    owner: Signer<'info>,
    #[account(
        init,
        payer = owner,
        seeds=[b"proposal", config.key().as_ref(), id.to_le_bytes().as_ref()],
        bump,
        space = Proposal::LEN
    )]
    proposal: Account<'info, Proposal>,
    core_program: Program<'info, CoreProgram>,
    #[account(
        seeds=[b"config", config.seed.to_le_bytes().as_ref()],
        seeds::program = daoist_programs::modules::core_program::ID,
        bump = config.config_bump,
    )]
    config: Account<'info, DaoConfig>,
    #[account(constraint = staking_program.key() == config.staking_program)]
    staking_program: Program<'info, StakingProgram>,
    #[account(
        seeds=[b"stake", config.key().as_ref(), owner.key().as_ref()],
        seeds::program = staking_program.key(),
        bump = stake_state.state_bump,
    )]
    stake_state: Account<'info, StakeState>,
    #[account(
        seeds=[b"treasury", config.key().as_ref()],
        bump = config.treasury_bump
    )]
    treasury: SystemAccount<'info>,
    system_program: Program<'info, System>,
}
impl<'info> StakeCreateProposal<'info> {    
    pub fn create_proposal(
        &mut self,
        id: u64,
        name: String,
        metadata: String,
        proposal: ProposalType,
        quorum: u8,
        threshold: u64,
        expiry: u64,
        choices:u8,
        evaluation_period: u64,
        bumps: &StakeCreateProposalBumps,
    ) -> Result<()> {
        // Make sure user has staked the required amount
        self.config.check_min_staked_required_proposal(self.stake_state.amount)?;
        // Make sure quorum is valid
        self.config.check_valid_quorum(quorum)?;                 
        // Check Minimum threshold
        self.config.check_min_threshold(threshold)?;
        // Check Max Expiry
        self.config.check_max_expiry(expiry)?;
        // Check Min Pre Voting Period
        self.config.check_evaluation_phase_period(evaluation_period)?;
        // Check Minimum Choices
        self.proposal.check_choices()?; 

        let check_id_add_proposal_accounts = dao::cpi::accounts::CoreHandler {
            owner: self.owner.to_account_info(),
            config: self.config.to_account_info(),
        };
        let cpi_context = CpiContext::new(
            self.core_program.to_account_info(),
            check_id_add_proposal_accounts
        );
            
        dao::cpi::add_proposal(cpi_context, id)?;


/*         // Check ID and add proposal change state
        let check_id_add_proposal_accounts = CoreHandler {
            owner: self.owner.to_account_info(),
            config: self.config.to_account_info(),
            system_program: self.system_program.to_account_info(),
        };
        let cpi_context = CpiContext::new(
        self.core_program.to_account_info(),
        check_id_add_proposal_accounts
        );
        add_proposal(cpi_context, id)?;    */                                     
        // Initialize the proposal
       self.proposal.init(
            id,
            name, // A proposal name
            metadata, // 72 bytes (39 bytes + / + 32 byte ID)
            proposal,
            quorum,
            threshold,
            expiry,
            choices,
            evaluation_period,
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
        transfer(ctx, self.config.proposal_fee)
    }
}