use anchor_lang::prelude::error_code;

#[error_code]
pub enum CoreError {
    #[msg("Default Error")]
    DefaultError,
    #[msg("Bump Error")]
    BumpError,
    #[msg("Overflow")]
    Overflow,
    #[msg("Underflow")]
    Underflow,
    #[msg("You can't unstake with open accounts")]
    AccountsOpen,
    #[msg("Proposal expired")]
    Expired,
    #[msg("Invalid slot")]
    InvalidSlot,
    #[msg("Insufficient stake")]
    InsufficientStake,
    #[msg("Invalid name")]
    InvalidName,
    #[msg("Invalid gist")]
    InvalidGist,
    #[msg("Invalid proposal seed")]
    InvalidProposalSeed,
    #[msg("Invalid quorum")]
    InvalidQuorum,
    #[msg("Invalid expiry")]
    InvalidExpiry,
    #[msg("Proposal closed")]
    ProposalClosed,
    #[msg("You can't vote 0!")]
    InvalidVoteAmount,
    #[msg("Invalid proposal status")]
    InvalidProposalStatus,
    #[msg("Invalid stake amount")]
    InvalidStakeAmount,
    #[msg("Invalid Threshold")]
    InvalidThreshold,
    #[msg("Invalid Required Time")]
    InvalidRequiredTime,
    #[msg("Invalid Vote Type")]
    InvalidVoteType,
    #[msg("AlreadyVoted")]
    SingleChoice,
    #[msg("Invalid choices amount")]
    InvalidChoicesAmount,
    #[msg("Invalid choice")]
    InvalidChoice,
    #[msg("Subdao Disabled")]
    InvalidAllowSubDao,
    #[msg("InvalidDaoType")]
    InvalidDaoType,
}


