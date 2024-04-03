use anchor_lang::prelude::*;
pub mod contexts;
pub use contexts::*;
mod errors;
mod helpers;

//testing
pub mod state;
mod constants;

declare_id!("stakyTBmEpbUcxNhjiv16Bvr53RVy68ENBZXPiUzNcF");

#[program]
pub mod staking {
    use super::*;

    // Initialize a stake account for adding DAO tokens
    pub fn init_stake(ctx: Context<InitializeStake>) -> Result<()> {
        // Create a stake account
        ctx.accounts.init(&ctx.bumps)
    }
    
    // Initialize a stake account for adding DAO NFTS
    pub fn init_stake_nft(ctx: Context<InitializeStakeNft>) -> Result<()> {
        // Create a stake account
        ctx.accounts.init(&ctx.bumps)
    }      
    // Stake DAO tokens
    pub fn stake_tokens(ctx: Context<Stake>, amount: u64) -> Result<()> {
        // Deposit tokens, add stake
        ctx.accounts.deposit_tokens(amount)
    }
    // Stake DAO NFTs
    pub fn stake_nft(ctx: Context<StakeNft>) -> Result<()> {
    // Deposit tokens, add stake
        ctx.accounts.deposit_tokens()
    }
    // UnStake DAO tokens
    pub fn unstake_tokens(ctx: Context<Stake>, amount: u64) -> Result<()> {
        // Withdraw tokens, remove stake
        ctx.accounts.withdraw_tokens(amount)
    }
    // UnStake DAO NFTs
    pub fn unstake_nft(ctx: Context<StakeNft>) -> Result<()> {
    // Withdraw tokens, remove stake
        ctx.accounts.withdraw_tokens()
    }

    // Close a stake account when you're done with it
    pub fn close_stake(ctx: Context<CleanupStake>) -> Result<()> {
        // Create a stake account
        ctx.accounts.cleanup_stake(&ctx.bumps)
    }
    // Close a Nft stake account when you're done with it
    pub fn close_stake_nft(ctx: Context<CleanupStakeNft>) -> Result<()> {
    // Create a stake account
        ctx.accounts.cleanup_stake(&ctx.bumps)
    }

    // SubDAO //
    // Initialize a stake account for adding SubDAO tokens
    pub fn init_stake_sub_dao(ctx: Context<InitializeStakeSubDao>) -> Result<()> {
        // Create a stake account
        ctx.accounts.init(&ctx.bumps)
    }
    // Initialize a stake account for adding SubDAO tokens
    pub fn init_stake_sub_dao_nft(ctx: Context<InitializeStakeSubDaoNft>) -> Result<()> {
        // Create a stake account
        ctx.accounts.init(&ctx.bumps)
    }
    // Stake SubDAO tokens
    pub fn stake_tokens_sub_dao(ctx: Context<StakeSubDao>, amount: u64) -> Result<()> {
        // Deposit tokens, add stake
        ctx.accounts.deposit_tokens(amount)
    }
    // Stake SubDAO Nft
    pub fn stake_nft_sub_dao(ctx: Context<StakeSubDaoNft>) -> Result<()> {
        // Deposit tokens, add stake
        ctx.accounts.deposit_tokens()
    }
    // UnStake SubDAO tokens
    pub fn unstake_tokens_sub_dao(ctx: Context<StakeSubDao>, amount: u64) -> Result<()> {
        // Withdraw tokens, remove stake
        ctx.accounts.withdraw_tokens(amount)
    }  
    // UnStake SubDAO tokens
    pub fn unstake_nft_sub_dao(ctx: Context<StakeSubDaoNft>) -> Result<()> {
        // Withdraw tokens, remove stake
        ctx.accounts.withdraw_tokens()
    }        
    // Close a stake account when you're done with it
    pub fn close_stake_sub_dao(ctx: Context<CleanupStakeSubDao>) -> Result<()> {
        // Create a stake account
        ctx.accounts.cleanup_stake(&ctx.bumps)
    } 
    // Close a stake account when you're done with it
    pub fn close_stake_nft_sub_dao(ctx: Context<CleanupStakeNftSubDao>) -> Result<()> {
        // Create a stake account
        ctx.accounts.cleanup_stake(&ctx.bumps)
    }         
    // INSTRUCTIONS CPIS //          
    // ADD ACCOUNT STAKE STATE
    pub fn add_account(
        ctx: Context<StakeHandler>, 
        amount: u64
    ) -> Result<()> {
        ctx.accounts.add_account(amount)?;
        Ok(())
    } 
    // REMOVE ACCOUNT STAKE STATE
    pub fn remove_account(
        ctx: Context<StakeHandler>,
        amount: u64
    ) -> Result<()> {
        ctx.accounts.remove_account(amount)?;
        Ok(())
    }
    // ADD ACCOUNT STAKE STATE SUB DAO
    pub fn add_account_sub_dao(
        ctx: Context<SubDaoStakeHandler>,
        amount: u64
    ) -> Result<()> {
        ctx.accounts.add_account_sub_dao(amount)?;
        Ok(())
    } 
    // REMOVE ACCOUNT STAKE STATE SUB DAO
    pub fn remove_account_sub_dao(
        ctx: Context<SubDaoStakeHandler>,
        amount: u64
    ) -> Result<()> {
        ctx.accounts.remove_account_sub_dao(amount)?;
        Ok(())
    }          
}

