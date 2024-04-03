use anchor_lang::{prelude::*, system_program::{Transfer, transfer}};
use crate::state::{Proposal, ExecutableProposal, ProposalType};
use dao::state::DaoConfig;
#[derive(Accounts)]
pub struct CleanupProposalSubDao<'info> {
    #[account(mut)]
    initializer: Signer<'info>,
    #[account(mut)]
    /// CHECK:
    payee: UncheckedAccount<'info>,
    #[account(
        mut,
        close = treasury,
        seeds=[b"proposal", config_sub_dao.key().as_ref(), proposal.id.to_le_bytes().as_ref()],
        bump = proposal.bump
    )]
    proposal: Account<'info, Proposal>,
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
        seeds=[b"treasury", config_sub_dao.key().as_ref()],
        bump = config_sub_dao.treasury_bump
    )]
    treasury: SystemAccount<'info>,
    system_program: Program<'info, System>
}

impl<'info> CleanupProposalSubDao<'info> {
    pub fn cleanup_proposal_sub_dao(
        &mut self
    ) -> Result<()> {
        // Try finalize
        self.proposal.try_finalize(self.config_sub_dao.circulating_supply);
        self.proposal.is_failed()?;
        Ok(())
    }

    pub fn execute_proposal(
        &mut self
    ) -> Result<()> {
        // Try finalize proposal
        self.proposal.try_finalize(self.config_sub_dao.circulating_supply);
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
            &self.config_sub_dao.key().to_bytes()[..],
            &[self.config_sub_dao.treasury_bump],
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
            ExecutableProposal::SetProposalFee(amount) => self.config_sub_dao.set_proposal_fee(amount),
            ExecutableProposal::SetMaxExpiry(amount) => self.config_sub_dao.set_max_expiry(amount),
            ExecutableProposal::SetThreshold(amount) => self.config_sub_dao.set_threshold(amount),
            ExecutableProposal::SetQuorum(amount) => self.config_sub_dao.set_quorum(amount),
            ExecutableProposal::SetEvaluationPeriod(amount) => self.config_sub_dao.set_evaluation_phase_period(amount),
            ExecutableProposal::SetAllowSubDao(_value) => {Ok(())}
        }
    }   
}