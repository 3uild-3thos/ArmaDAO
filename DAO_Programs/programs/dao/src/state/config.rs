use crate::{constants::*, errors::CoreError};
use anchor_lang::prelude::*;

#[derive(Clone)]
pub struct CoreProgram;

declare_id!("daoSYkGVA6pu5CxknvVMMTc8nFAGsYzfQt2jK5CgC5V");

impl anchor_lang::Id for CoreProgram {
    fn id() -> Pubkey {
        ID
    }
}
#[account]
pub struct DaoConfig {
    pub seed: u64,
    pub auth_bump: u8,
    pub config_bump: u8,
    pub treasury_bump: u8,
    pub proposal_fee: u64,
    pub min_quorum: u8,  //percentage of circulating supply _supply // we receive a u8 0-100
    pub min_threshold: u64, //total number of votes
    pub max_expiry: u64,
    pub evaluation_phase_period: u64,
    pub proposal_count: u64,
    pub proposal_program: Pubkey,
    pub voting_program: Pubkey,
    pub staking_program: Pubkey,
    pub collection_mint: Option<Pubkey>,
    pub mint:Option<Pubkey>,    
    pub min_staked_required_proposal: Option<u64>,
    pub allow_sub_dao: bool,
    pub min_staked_create_subdao: Option<u64>,
    pub is_hybrid: bool,
    pub circulating_supply: u64,
}


impl DaoConfig {
    pub const LEN: usize = 8 + (6 * U64_L) + (4 * U8_L) + (3 * PUBKEY_L) + (1 + U64_L) + (1 + PUBKEY_L) + (1 + PUBKEY_L) + 1 + (1 + U64_L) + 1 + (1 + U64_L) ;

    
    pub fn check_hybrid(&self) -> Result<()> {
        require!(
            self.is_hybrid == true,
            CoreError::InvalidDaoType
        );
        Ok(())
    }
    pub fn ensure_not_hybrid(&self) -> Result<()> {
        require!(
            self.is_hybrid == false,
            CoreError::InvalidDaoType
        );
        Ok(())
    }
    //check 
    pub fn check_staked_create_proposal_is_none(&self) -> Result<()> {
        require!(self.min_staked_required_proposal.is_none(), CoreError::InvalidStakeAmount);
        Ok(())
    } 


    pub fn check_staked_create_subdao(&self) -> Result<()> {
        require!(self.min_staked_create_subdao.is_none(), CoreError::InvalidStakeAmount);
        Ok(())
    } 

    pub fn check_min_staked_create_subdao(&self, amount: u64) -> Result<()> {
        require!(self.min_staked_required_proposal.unwrap() <= amount, CoreError::InvalidStakeAmount);
        Ok(())
    } 

    pub fn check_allow_sub_dao(&self) -> Result<()> {
        require!(
            self.allow_sub_dao == true,
            CoreError::InvalidAllowSubDao
        );
        Ok(())
    }
    pub fn check_min_staked_required_proposal(&self, amount: u64) -> Result<()> {
        require!(self.min_staked_required_proposal.unwrap() <= amount, CoreError::InvalidStakeAmount);
        Ok(())
    } 
    pub fn check_min_threshold(&self, threshold: u64) -> Result<()> {
        require!(self.min_threshold <= threshold, CoreError::InvalidThreshold);
        Ok(())
    }
    pub fn check_valid_quorum(&self, quorum: u8) -> Result<()> {
        require!(self.min_quorum <= quorum && quorum <= 100, CoreError::InvalidQuorum);
        Ok(())
    }
    pub fn check_init_valid_quorum(&self, min_quorum: u8) -> Result<()> {
        require!(
            min_quorum <= 100,
            CoreError::InvalidQuorum
        );
        Ok(())
    }
    pub fn check_max_expiry(&self, expiry: u64) -> Result<()> {
        require!(self.max_expiry >= expiry, CoreError::InvalidExpiry);
        Ok(())
    }
    // Check min pre-voting
    pub fn check_evaluation_phase_period(&self, evaluation_period: u64)-> Result<()> {
        require!(self.evaluation_phase_period <= evaluation_period, CoreError::InvalidEvaluationPeriod);
        Ok(())
    }
     //Set Allowence Sub Dao
    pub fn set_allow_sub_dao(&mut self, value: bool) -> Result<()> {
        self.allow_sub_dao = value;
        Ok(())
    }

    //Proposal Fee
    pub fn set_proposal_fee(&mut self, amount: u64) -> Result<()> {
        self.proposal_fee = amount;
        //VALIDATIONS
        Ok(())
    }
    //Expiry
    pub fn set_max_expiry(&mut self, amount: u64) -> Result<()> {
        self.max_expiry = amount;
        //VALIDATIONS
        Ok(())
    }
    //Threshold
    pub fn set_threshold(&mut self, amount: u64) -> Result<()> {
        self.min_threshold = amount;
        //VALIDATIONS
        Ok(())
    
    }
    //Quorum
    pub fn set_quorum(&mut self, amount: u8) -> Result<()> {
        require!(
            amount <= 100,
            CoreError::InvalidQuorum
        );
        self.min_quorum = amount;
        //VALIDATIONS
        Ok(())  
    }
    //Analyzing Proposal Period
    pub fn set_evaluation_phase_period(&mut self, amount: u64) -> Result<()> {
        self.evaluation_phase_period = amount;
        //VALIDATIONS
        Ok(()) 
    }

}

