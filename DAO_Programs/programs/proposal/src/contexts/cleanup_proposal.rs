use anchor_lang::{prelude::*, system_program::{Transfer, transfer}};
use daoist_programs::modules::{Proposal, ProposalType, DaoConfig, ExecutableProposal};

#[derive(Accounts)]
pub struct CleanupProposal<'info> {
    #[account(mut)]
    initializer: Signer<'info>,
    #[account(mut)]
    /// CHECK:
    payee: UncheckedAccount<'info>,
    #[account(
        mut,
        close = treasury,
        seeds=[b"proposal", core_config.key().as_ref(), proposal.id.to_le_bytes().as_ref()],
        bump = proposal.bump
    )]
    proposal: Account<'info, Proposal>,
    #[account(
        seeds=[b"core", core_config.seed.to_le_bytes().as_ref()],
        seeds::program = daoist_programs::modules::core_program::ID,
        bump = core_config.config_bump,
    )]
    core_config: Account<'info, DaoConfig>,
    #[account(
        seeds=[b"treasury", core_config.key().as_ref()],
        bump = core_config.treasury_bump
    )]
    treasury: SystemAccount<'info>,
    system_program: Program<'info, System>
}

impl<'info> CleanupProposal<'info> {
    pub fn cleanup_proposal(
        &mut self
    ) -> Result<()> {
        // Try finalize
        self.proposal.try_finalize();
        self.proposal.is_failed()?;
        Ok(())
    }

    pub fn execute_proposal(
        &mut self
    ) -> Result<()> {
        // Try finalize proposal
        self.proposal.try_finalize();
        // Check if the status is successful
        self.proposal.is_succeeded()?;
        match self.proposal.proposal {
            ProposalType::Bounty(payee, payout) => self.payout_bounty(payee, payout),
            ProposalType::Executable(executable_proposal)  => self.execute_tx(executable_proposal),
            ProposalType::Vote => self.finalize_vote(),
            ProposalType::VoteMultipleChoice => self.finalize_vote(),
        }
    }

    pub fn finalize_vote(&self) -> Result<()> {
        msg!("Vote result: {} / {} / {}", self.proposal.votes, self.proposal.quorum, self.proposal.threshold);
        msg!("Vote has {:?}", self.proposal.result);
        Ok(())
    }

    pub fn payout_bounty(
        &self,
        payee: Pubkey,
        payout: u64
    ) -> Result<()> {
        require_keys_eq!(self.payee.key(), payee);

        let accounts = Transfer {
            from: self.treasury.to_account_info(),
            to: self.payee.to_account_info()
        };

        let seeds = &[
            &b"treasury"[..],
            &self.core_config.key().to_bytes()[..],
            &[self.core_config.treasury_bump],
        ];

        let signer_seeds = &[&seeds[..]];

        let ctx = CpiContext::new_with_signer(
            self.system_program.to_account_info(),
            accounts,
            signer_seeds
        );

        transfer(ctx, payout)

    }

    pub fn execute_tx(
        &mut self,
        executable_proposal: ExecutableProposal,
    ) -> Result<()> {
        match executable_proposal {  
            ExecutableProposal::SetProposalFee(amount) => self.core_config.set_proposal_fee(amount),
            ExecutableProposal::SetMaxExpiry(amount) => self.core_config.set_max_expiry(amount),
            ExecutableProposal::SetThreshold(amount) => self.core_config.set_threshold(amount),
            ExecutableProposal::SetQuorum(amount) => self.core_config.set_quorum(amount),
            ExecutableProposal::SetEvaluationPeriod(amount) => self.core_config.set_evaluation_phase_period(amount),
            ExecutableProposal::SetAllowSubDao(value) => self.core_config.set_allow_sub_dao(value)
        }
    }
}