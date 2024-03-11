use anchor_lang::{prelude::*, solana_program};
use crate::constants::*;
use crate::errors::CoreError;
use anchor_lang::solana_program::instruction::Instruction;

#[derive(Clone)]
pub struct ProposalProgram;

declare_id!("propm845StqEBV57ZSnTe8EW8duzAxo5p7h4inhibXV");
#[derive(Accounts)]
pub struct ProposalHandler<'info> {
    pub owner: AccountInfo<'info>,
    pub proposal: AccountInfo<'info>,
    pub core_config: AccountInfo<'info>,
    pub system_program: AccountInfo<'info>,
}
#[derive(Accounts)]
pub struct SubDaoProposalHandler<'info> {
    pub owner: AccountInfo<'info>,
    pub proposal: AccountInfo<'info>,
    pub core_config: AccountInfo<'info>,
    pub config_sub_dao: AccountInfo<'info>,
    pub system_program: AccountInfo<'info>,
}

#[derive(Clone, Debug, Default, PartialEq, AnchorSerialize, AnchorDeserialize)]
pub struct Proposal {
    pub id: u64,      // A unique ID. Can be sequential or random.
    pub name: String, // A proposal name
    pub gist: String, // 72 bytes (39 bytes + / + 32 char ID)
    pub proposal: ProposalType,
    pub result: ProposalStatus,
    pub quorum: u8,
    pub threshold: u64,
    pub votes: u64,
    pub expiry: u64,
    pub choices: u8,
    pub bump: u8,
    pub created_time: u64,
    pub vote_counts: Vec<u64>,
    pub evaluation_period: u64,
}
impl anchor_lang::Owner for Proposal {
    fn owner() -> Pubkey {
        ID
    }
}
impl anchor_lang::AccountDeserialize for Proposal {
    fn try_deserialize(buf: &mut &[u8]) -> anchor_lang::Result<Self> {
        Self::try_deserialize(buf)
    }

    fn try_deserialize_unchecked(buf: &mut &[u8]) -> anchor_lang::Result<Self> {
        Self::try_deserialize_unchecked(buf)
    }
}
impl anchor_lang::AccountSerialize for Proposal {}

impl Proposal {
    //41+1 Enums
    //ProposalType enum  41 bytes
    //ProposalStatus enum 1 byte
    pub const LEN: usize = 8 + 32 + 72 + (41+1) + (U8_L * 3) + (U64_L * 6) +(4 + U64_L * 7) ;
    pub fn init(
        &mut self,
        id: u64,
        name: String,
        gist: String,
        proposal: ProposalType,
        quorum: u8,
        threshold: u64,
        expiry: u64,
        choices: u8,
        evaluation_period: u64,
        bump: u8,
    ) -> Result<()> {
        require!(name.len() < 33, CoreError::InvalidName);
        require!(gist.len() < 73, CoreError::InvalidGist);
        self.id = id;
        self.name = name;
        self.gist = gist;
        self.proposal = proposal;
        self.result = Default::default();
        self.quorum = quorum;
        self.threshold = threshold;
        self.bump = bump;
        self.expiry = Clock::get()?
            .slot
            .checked_add(expiry)
            .ok_or(CoreError::Overflow)?;
        self.choices = choices;
        self.created_time = Clock::get()?.slot;
        self.vote_counts = vec![0; choices as usize];
        self.evaluation_period = evaluation_period;

        Ok(())
    }

    // transition from Evaluation Phase to Open
    pub fn try_initialize(&mut self) {
        if self.result == ProposalStatus::EvaluationPhase && self.is_analysed().is_ok() {
            self.result = ProposalStatus::Open;
        }
    }
    pub fn try_finalize(&mut self) {
        match self.proposal {
            ProposalType::VoteMultipleChoice => {
                // Handle the multiple-choice scenario
                self.finalize_multiple_choice();
            },
            _ => {
                // Handle the preset choice scenario (For, Against, Abstain)
                self.finalize_preset_choice();
            },
        }
    }

    pub fn finalize_multiple_choice(&mut self) {
        // First, check if the proposal has expired.
        if self.check_expiry().is_err() {
            // If the proposal has expired, it fails regardless of the votes.
            self.result = ProposalStatus::Failed;
            return;
        }
        // Assuming the proposal has not expired, proceed to check for the winning choice.
        if let Some((_choice, &votes)) = self.vote_counts.iter().enumerate().max_by_key(|&(_idx, &votes)| votes) {
            // Calculate the quorum.
            let quorum_votes = (self.votes as u128 * (self.quorum / 100) as u128) as u64 ;

            // Check if the winning choice meets or exceeds the quorum.
            if votes >= quorum_votes && self.votes >= self.threshold {
                // If the winning choice meets the quorum, the proposal succeeds.
                self.result = ProposalStatus::Succeeded;
        }
        }
    }

    pub fn finalize_preset_choice(&mut self) {
        //vote_counts[0] = for, vote_counts[1] = Against vote_counts[2]  = Abstain
        // Calculate the quorum.
        let quorum: u64 =
            ((self.votes - self.vote_counts[2]) as u128 * (self.quorum / 100) as u128) as u64;
        // Check if the winning choice meets or exceeds the quorum.    
        if self.votes >= self.threshold
            && self.vote_counts[0] >= quorum
            && self.check_expiry().is_ok()
        {
            self.result = ProposalStatus::Succeeded
        } else if self.votes < self.threshold && self.check_expiry().is_err()
            || self.vote_counts[1] >= quorum
        {
            self.result = ProposalStatus::Failed
        }
    }


    pub fn check_expiry(&self) -> Result<()> {
        require!(Clock::get()?.slot < self.expiry, CoreError::Expired);
        Ok(())
    }
    pub fn is_analysed(&self) -> Result<()> {
        require!(
            Clock::get()?.slot >= self.created_time + self.evaluation_period,
            CoreError::InvalidRequiredTime
        );
        Ok(())
    }
    // Internal is_failed cleanup_proposal
    pub fn is_failed(&self) -> Result<()> {
        require!(
            self.result == ProposalStatus::Failed,
            CoreError::InvalidProposalStatus
        );
        Ok(())
    }
    // Internal is_succeeded cleanup_proposal
    pub fn is_succeeded(&self) -> Result<()> {
        require!(
            self.result == ProposalStatus::Succeeded,
            CoreError::InvalidProposalStatus
        );
        Ok(())
    }
    // is open
    pub fn is_open(&self) -> Result<()> {
        require!(
            self.result == ProposalStatus::Open,
            CoreError::InvalidProposalStatus
        );
        Ok(())
    }
    pub fn is_open_and_expiry(&self) -> Result<()> {
        if self.is_open().is_ok() && self.check_expiry().is_ok() {
            return err!(CoreError::InvalidProposalStatus);
        }
        Ok(())
    }
    pub fn check_choices(&self) -> Result<()> {
        match self.proposal {
            ProposalType::Bounty(_, _) | ProposalType::Executable(_) | ProposalType::Vote => {
                if self.choices >= 1 && self.choices <= 3 {
                    Ok(())
                } else {
                    err!(CoreError::InvalidChoicesAmount)
                }
            },
            ProposalType::VoteMultipleChoice => {
                if self.choices >= 1 && self.choices <= 6 {
                    Ok(())
                } else {
                    err!(CoreError::InvalidChoicesAmount)
                }
            },
        }
    }
}

#[derive(AnchorSerialize, AnchorDeserialize, Copy, Clone, Debug, PartialEq, Eq)]
pub enum ProposalType {
    Bounty(Pubkey, u64), // Pay an address some amount of SOL
    Executable(ExecutableProposal),// Sign some kind of instruction(s) with an accounts struct, etc
    Vote, // We just want to know what people think. No money involved
    VoteMultipleChoice, // We just want to know what people think. No money involved
}

impl Default for ProposalType {
    fn default() -> Self {
        ProposalType::Vote
    }
}

#[derive(AnchorSerialize, AnchorDeserialize, Copy, Clone, Debug, PartialEq, Eq)]
pub enum ExecutableProposal {
    SetProposalFee(u64),
    SetMaxExpiry(u64),
    SetThreshold(u64),
    SetQuorum(u8),
    SetEvaluationPeriod(u64),
    SetAllowSubDao(bool)
}

#[derive(AnchorSerialize, AnchorDeserialize, Copy, Clone, Debug, PartialEq, Eq)]
pub enum ProposalStatus {
    EvaluationPhase,
    Open,
    Succeeded,
    Failed,
}

impl Default for ProposalStatus {
    fn default() -> Self {
        ProposalStatus::EvaluationPhase
    }
}

impl anchor_lang::Id for ProposalProgram {
    fn id() -> Pubkey {
        ID
    }
}

// Instructions
pub fn add_vote<'info>(
    ctx: CpiContext<'_, '_, '_, 'info, ProposalHandler<'info>>,
    amount: u64,
    choice: u8,
) -> Result<()> {
    // let mut data = hash(b"global:add_vote").to_bytes()[..8].to_vec();
    let mut data = vec![0x51, 0x24, 0xdd, 0x73, 0x48, 0xa8, 0xde, 0x2b];
    data.extend_from_slice(&amount.to_le_bytes());
    data.extend_from_slice(&[choice]);

    let ix = Instruction::new_with_borsh(ID, &data, ctx.accounts.to_account_metas(None));

    solana_program::program::invoke_signed(
        &ix,
        &[
            ctx.accounts.owner.clone(),
            ctx.accounts.proposal.clone(),
            ctx.accounts.core_config.clone(),
            ctx.accounts.system_program.clone(),
        ],
        ctx.signer_seeds,
    )
    .map_err(Into::into)
}

pub fn remove_vote<'info>(
    ctx: CpiContext<'_, '_, '_, 'info, ProposalHandler<'info>>,
    amount: u64,
    choice: u8,
) -> Result<()> {
    // let mut data = hash(b"global:remove_vote").to_bytes()[..8].to_vec();
    let mut data = vec![0x20, 0xBB, 0x17, 0x03, 0x9C, 0xE8, 0x37, 0xB1];
    data.extend_from_slice(&amount.to_le_bytes());
    data.extend_from_slice(&[choice]);

    let ix = Instruction::new_with_borsh(ID, &data, ctx.accounts.to_account_metas(None));

    solana_program::program::invoke_signed(
        &ix,
        &[
            ctx.accounts.owner.clone(),
            ctx.accounts.proposal.clone(),
            ctx.accounts.core_config.clone(),
            ctx.accounts.system_program.clone(),
        ],
        ctx.signer_seeds,
    )
    .map_err(Into::into)
}
//SUB DAO
//Instructions
pub fn add_vote_sub_dao<'info>(
    ctx: CpiContext<'_, '_, '_, 'info, SubDaoProposalHandler<'info>>,
    amount: u64,
    choice: u8,
) -> Result<()> {
    // let mut data = hash(b"global:add_vote_sub_dao").to_bytes()[..8].to_vec();
    let mut data = vec![0x32, 0x7d, 0x77, 0x7b, 0xf6, 0x66, 0xef, 0x4b];
    data.extend_from_slice(&amount.to_le_bytes());
    data.extend_from_slice(&[choice]);

    let ix = Instruction::new_with_borsh(ID, &data, ctx.accounts.to_account_metas(None));

    solana_program::program::invoke_signed(
        &ix,
        &[
            ctx.accounts.owner.clone(),
            ctx.accounts.proposal.clone(),
            ctx.accounts.core_config.clone(),
            ctx.accounts.config_sub_dao.clone(),
            ctx.accounts.system_program.clone(),
        ],
        ctx.signer_seeds,
    )
    .map_err(Into::into)
}
pub fn remove_vote_sub_dao<'info>(
    ctx: CpiContext<'_, '_, '_, 'info, SubDaoProposalHandler<'info>>,
    amount: u64,
    choice: u8,
) -> Result<()> {
    // let mut data = hash(b"global:remove_vote_sub_dao").to_bytes()[..8].to_vec();
    let mut data = vec![0x5d, 0xa0, 0x87, 0x76, 0xf8, 0xc6, 0x0d, 0x11];
    data.extend_from_slice(&amount.to_le_bytes());
    data.extend_from_slice(&[choice]);

    let ix = Instruction::new_with_borsh(ID, &data, ctx.accounts.to_account_metas(None));

    solana_program::program::invoke_signed(
        &ix,
        &[
            ctx.accounts.owner.clone(),
            ctx.accounts.proposal.clone(),
            ctx.accounts.core_config.clone(),
            ctx.accounts.system_program.clone(),
        ],
        ctx.signer_seeds,
    )
    .map_err(Into::into)
}