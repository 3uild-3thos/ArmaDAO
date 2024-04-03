use crate::constants::*;
use anchor_lang::prelude::*;

#[account]
pub struct VoteState {
    pub owner: Pubkey,
    pub amount: u64,
    pub choice: u8,
    pub bump: u8
}

impl VoteState {
    pub const LEN: usize = 8 + PUBKEY_L + U64_L + (2 * U8_L);
}

