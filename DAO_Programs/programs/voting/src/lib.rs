use anchor_lang::prelude::*;
mod contexts;
use contexts::*;
mod constants;
mod state;
mod errors;

declare_id!("voteUXym9t6h3VzHYumMyMCXmiDoYqMiC2g4JnvdnGC");

#[program]
pub mod voting {
    use super::*;
         // Vote on a proposal
         pub fn vote(ctx: Context<Vote>, amount: u64, choice: u8) -> Result<()> {
            // Increment total number of votes in the proposal
             ctx.accounts.vote(amount, choice, &ctx.bumps)
        }
        // Close a voting position in an active proposal
        pub fn remove_vote(ctx: Context<Unvote>, amount: u64, choice: u8) -> Result<()> {
            // Decrement votes for user and proposal
            ctx.accounts.remove_vote(amount, choice)
        }   
        // Close a voting position after a proposal has passed/expired
        pub fn cleanup_vote(ctx: Context<Unvote>) -> Result<()> {
            // Decrement votes for user
            ctx.accounts.cleanup_vote()
        }  
        //SUB DAOS
        // Vote on a Sub Dao proposal
        pub fn vote_sub_dao(ctx: Context<VoteSubDao>, amount: u64, choice: u8) -> Result<()> {
            // Increment total number of votes in the proposal
             ctx.accounts.vote(amount, choice, &ctx.bumps)
        } 
        // Close a voting position in an active proposal 
        pub fn remove_vote_sub_dao(ctx: Context<UnvoteSubDao>, amount: u64, choice: u8) -> Result<()> {
            // Decrement votes for user and proposal
            ctx.accounts.remove_vote(amount, choice)
        }
        // Close a voting position after a proposal has passed/expired
        pub fn cleanup_vote_sub_dao(ctx: Context<UnvoteSubDao>) -> Result<()> {
            // Decrement votes for user
            ctx.accounts.cleanup_vote()
        }                           
}
