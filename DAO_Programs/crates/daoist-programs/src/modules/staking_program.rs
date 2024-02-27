use anchor_lang::{prelude::*, solana_program};
use crate::constants::*;
use crate::errors::CoreError;
use anchor_lang::solana_program::instruction::Instruction;

#[derive(Clone)]
pub struct StakingProgram;

declare_id!("stakyTBmEpbUcxNhjiv16Bvr53RVy68ENBZXPiUzNcF");

#[derive(Accounts)]
pub struct StakeHandler<'info> {
    pub owner: AccountInfo<'info>,
    pub stake_state: AccountInfo<'info>,
    pub core_config: AccountInfo <'info>,
    pub system_program: AccountInfo<'info>
}
#[derive(Accounts)]
pub struct SubDaoStakeHandler<'info> {
    pub owner: AccountInfo<'info>,
    pub stake_state: AccountInfo<'info>,
    pub core_config: AccountInfo <'info>,
    pub config_sub_dao: AccountInfo <'info>,
    pub system_program: AccountInfo<'info>
}

#[derive(Clone, Debug, Default, PartialEq, AnchorSerialize, AnchorDeserialize)]
pub struct StakeState {
    pub owner: Pubkey,
    pub amount: u64,
    pub accounts: u64,
    pub updated: u64,
    pub vault_bump: u8,
    pub auth_bump: u8,
    pub state_bump: u8,
}

impl anchor_lang::AccountDeserialize for StakeState {
    fn try_deserialize(buf: &mut &[u8]) -> anchor_lang::Result<Self> {
        Self::try_deserialize(buf)
    }

    fn try_deserialize_unchecked(buf: &mut &[u8]) -> anchor_lang::Result<Self> {
        Self::try_deserialize_unchecked(buf)
    }
}

impl anchor_lang::AccountSerialize for StakeState {}

impl anchor_lang::Owner for StakeState {
    fn owner() -> Pubkey {
        ID
    }
}


impl StakeState {
    pub const LEN: usize = 8 + PUBKEY_L + 3 * U64_L + 3 * U8_L;

    pub fn init(
        &mut self,  
        owner: Pubkey,
        state_bump: u8,
        vault_bump: u8,
        auth_bump: u8
    ) -> Result<()> {
        self.owner = owner;
        self.amount = 0;
        self.accounts = 0;
        self.state_bump = state_bump;
        self.vault_bump = vault_bump;
        self.auth_bump = auth_bump;
        self.update()
    }
    pub fn stake(
        &mut self,
        amount: u64
    ) -> Result<()> {
        self.amount.checked_add(amount).ok_or(CoreError::Overflow)?;
        self.update()
    }

    pub fn unstake(
        &mut self,
        amount: u64
    ) -> Result<()> {
        self.check_accounts()?;
        self.check_slot()?; // Don't allow staking and unstaking in the same slot
        self.amount = self.amount.checked_sub(amount).ok_or(CoreError::Underflow)?;
        self.update()
    }

    pub fn add_account(&mut self) -> Result<()> {
        self.accounts = self.accounts.checked_add(1).ok_or(CoreError::Overflow)?;
        Ok(())
    }

    pub fn remove_account(&mut self) -> Result<()> {
        self.accounts = self.accounts.checked_sub(1).ok_or(CoreError::Underflow)?;
        Ok(())
    }

    // This might be convenient later, but comment out for now
    // pub fn remove_accounts(&mut self, amount: u64) -> Result<()> {
    //     self.accounts.checked_sub(amount).ok_or(StakeError::Underflow)
    // }
    pub fn update(&mut self) -> Result<()> {
        self.updated = Clock::get()?.slot;
        Ok(())
    }
    // Make sure the user doesn't unstake in the same slot
    pub fn check_slot(&self) -> Result<()> {
        require!(self.updated < Clock::get()?.slot, CoreError::InvalidSlot);
        Ok(())
    }    

    // Make sure the user doesn't have any open accounts
    pub fn check_accounts(&self) -> Result<()> {
        require!(self.accounts == 0, CoreError::AccountsOpen);
        Ok(())
    }

    // Ensure staked amount > 0
    pub fn check_stake(&self) -> Result<()> {
        require!(self.amount > 0, CoreError::InsufficientStake);
        Ok(())
    }

    // Ensure staked amount > X
    pub fn check_stake_amount(&self, amount: u64) -> Result<()> {
        require!(self.amount >= amount, CoreError::InsufficientStake);
        Ok(())
    }
}    

impl anchor_lang::Id for StakingProgram {
    fn id() -> Pubkey {
        ID
    }
}

// Instructions
pub fn add_account<'info>(
    ctx: CpiContext<'_, '_, '_, 'info, StakeHandler<'info>>
) -> Result<()> {
    
    // let mut data = hash(b"global:add_account").to_bytes()[..8].to_vec();
    let data = vec![0x34, 0xAC, 0xFC, 0x03, 0x26, 0xa8, 0xD1, 0x09];

    let ix = Instruction::new_with_borsh(ID, &data, ctx.accounts.to_account_metas(None));

    solana_program::program::invoke_signed(
        &ix,
        &[
            ctx.accounts.owner.clone(),
            ctx.accounts.stake_state.clone(),
            ctx.accounts.core_config.clone(),
            ctx.accounts.system_program.clone(),
        ],
        ctx.signer_seeds,
    )
    .map_err(Into::into)
}

pub fn remove_account<'info>(
    ctx: CpiContext<'_, '_, '_, 'info, StakeHandler<'info>>
) -> Result<()> {
    
    // let mut data = hash(b"global:remove_account").to_bytes()[..8].to_vec();
    let data = vec![0x7D, 0xA0, 0xFF, 0xB2, 0xC8, 0xB8, 0x9D, 0x4C];

    let ix = Instruction::new_with_borsh(ID, &data, ctx.accounts.to_account_metas(None));

    solana_program::program::invoke_signed(
        &ix,
        &[
            ctx.accounts.owner.clone(),
            ctx.accounts.stake_state.clone(),
            ctx.accounts.core_config.clone(),
            ctx.accounts.system_program.clone(),
        ],
        ctx.signer_seeds,
    )
    .map_err(Into::into)
}

//SubDAOS
// Instructions
pub fn add_account_sub_dao<'info>(
    ctx: CpiContext<'_, '_, '_, 'info, SubDaoStakeHandler<'info>>
) -> Result<()> {
    
    // let mut data = hash(b"global:add_account_sub_dao").to_bytes()[..8].to_vec();
    let data = vec![0x8c, 0x90, 0xe0, 0x5c, 0x4c, 0xbe, 0x8e, 0xa2];

    let ix = Instruction::new_with_borsh(ID, &data, ctx.accounts.to_account_metas(None));

    solana_program::program::invoke_signed(
        &ix,
        &[
            ctx.accounts.owner.clone(),
            ctx.accounts.stake_state.clone(),
            ctx.accounts.core_config.clone(),
            ctx.accounts.system_program.clone(),
        ],
        ctx.signer_seeds,
    )
    .map_err(Into::into)
}
pub fn remove_account_sub_dao<'info>(
    ctx: CpiContext<'_, '_, '_, 'info, SubDaoStakeHandler<'info>>
) -> Result<()> {
    
    // let mut data = hash(b"global:remove_account_sub_dao").to_bytes()[..8].to_vec();
    let data = vec![0x54, 0xa1, 0x34, 0xb4, 0xfd, 0xae, 0x08, 0x45];

    let ix = Instruction::new_with_borsh(ID, &data, ctx.accounts.to_account_metas(None));

    solana_program::program::invoke_signed(
        &ix,
        &[
            ctx.accounts.owner.clone(),
            ctx.accounts.stake_state.clone(),
            ctx.accounts.core_config.clone(),
            ctx.accounts.system_program.clone(),
        ],
        ctx.signer_seeds,
    )
    .map_err(Into::into)
}