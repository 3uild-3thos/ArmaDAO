use anchor_lang::{prelude::*, solana_program};
use anchor_lang::solana_program::instruction::Instruction;
use crate::constants::*;
use crate::errors::CoreError;


#[derive(Clone)]
pub struct CoreProgram;

declare_id!("daoSYkGVA6pu5CxknvVMMTc8nFAGsYzfQt2jK5CgC5V");

#[derive(Accounts)]
pub struct CoreHandler<'info> {
    pub owner: AccountInfo<'info>,
    pub config: AccountInfo<'info>,
    pub system_program: AccountInfo<'info>
}
#[derive(Accounts)]
pub struct SubDaoHandler<'info> {
    pub owner: AccountInfo<'info>,
    pub config: AccountInfo<'info>,
    pub config_sub_dao: AccountInfo<'info>,
    pub system_program: AccountInfo<'info>
}

#[derive(Clone, Debug, Default, PartialEq, AnchorSerialize, AnchorDeserialize)]

pub struct DaoConfig {
    pub seed: u64,
    pub auth_bump: u8,
    pub config_bump: u8,
    pub treasury_bump: u8,
    pub proposal_fee: u64,
    pub min_quorum: u8,
    pub min_threshold: u64,
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
}

impl anchor_lang::Owner for DaoConfig {
    fn owner() -> Pubkey {
        ID
    }
}

impl anchor_lang::AccountDeserialize for DaoConfig {
    fn try_deserialize(buf: &mut &[u8]) -> anchor_lang::Result<Self> {
        /* Self::try_deserialize(buf) */
        Ok(Self::deserialize(buf)?)
       /*  DaoConfig::try_deserialize_unchecked(buf) */

    }

    fn try_deserialize_unchecked(buf: &mut &[u8]) -> anchor_lang::Result<Self> {
        /* Self::try_deserialize_unchecked(buf) */
        Ok(Self::try_deserialize(buf)?)
        /* Ok(Self::deserialize(buf)?) */
        /* DaoConfig::try_deserialize(buf)   */    
    }
}
impl anchor_lang::AccountSerialize for DaoConfig {}

impl DaoConfig {
    pub const LEN: usize = 8 + (6 * U64_L) + (4 * U8_L) + (3 * PUBKEY_L) + (1 + U64_L) + (1 + PUBKEY_L) + (1 + PUBKEY_L) + 1 + (1 + U64_L) + 1  ;

/*     pub fn init(
        &mut self,
        seed: u64,
        auth_bump: u8,
        config_bump: u8,
        treasury_bump: u8,
        proposal_fee: u64,
        min_quorum: u8,
        min_threshold: u64,
        max_expiry: u64,
        evaluation_phase_period: u64,
        proposal_program: Pubkey,
        voting_program: Pubkey,
        staking_program: Pubkey,
        collection_mint: Option<Pubkey>,
        mint: Option<Pubkey>,
        min_staked_required_proposal: Option<u64>, 
        allow_sub_dao: bool,
        min_staked_create_subdao: Option<u64>,
        is_hybrid: bool
                
    ) -> Result<()> {
        self.seed = seed;
        self.auth_bump = auth_bump;
        self.config_bump = config_bump;
        self.treasury_bump = treasury_bump;
        self.proposal_fee = proposal_fee;
        self.min_quorum = min_quorum;
        self.min_threshold = min_threshold;
        self.max_expiry = max_expiry;
        self.evaluation_phase_period = evaluation_phase_period;
        self.proposal_count = 0;
        self.proposal_program = proposal_program;
        self.voting_program = voting_program;
        self.staking_program = staking_program;
        self.collection_mint = collection_mint;
        self.mint = mint;
        self.min_staked_required_proposal = min_staked_required_proposal;
        self.allow_sub_dao = allow_sub_dao;
        self.min_staked_create_subdao = min_staked_create_subdao;
        self.is_hybrid = is_hybrid;
        msg!("seed = {}", seed);
        
        Ok(())
    } */



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
        require!(self.evaluation_phase_period <= evaluation_period, CoreError::InvalidExpiry);
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

impl anchor_lang::Id for CoreProgram {
    fn id() -> Pubkey {
        ID
    }
}

// Instructions
pub fn add_proposal<'info>(
    ctx: CpiContext<'_, '_, '_, 'info, CoreHandler<'info>>,
    id: u64,
) -> Result<()> {
    
    // let mut data = hash(b"global:add_proposal").to_bytes()[..8].to_vec();
    let mut data = vec![0x82, 0x8B, 0xD6, 0x6B, 0x5D, 0x0D, 0x54, 0x98];
    data.extend_from_slice(&id.to_le_bytes());

    let ix = Instruction::new_with_borsh(ID, &data, ctx.accounts.to_account_metas(None));

    solana_program::program::invoke_signed(
        &ix,
        &[
            ctx.accounts.owner.clone(),
            ctx.accounts.config.clone(),
            ctx.accounts.system_program.clone(),
        ],
        ctx.signer_seeds,
    )
    .map_err(Into::into)
}

pub fn add_proposal_sub_dao<'info>(
    ctx: CpiContext<'_, '_, '_, 'info, SubDaoHandler<'info>>,
    id: u64,
) -> Result<()> {
    
    // let mut data = hash(b"global:add_proposal_sub_dao").to_bytes()[..8].to_vec();
    let mut data = vec![0x68, 0xc6, 0x54, 0x41, 0x07, 0x18, 0xf2, 0xaa];
    data.extend_from_slice(&id.to_le_bytes());

    let ix = Instruction::new_with_borsh(ID, &data, ctx.accounts.to_account_metas(None));

    solana_program::program::invoke_signed(
        &ix,
        &[
            ctx.accounts.owner.clone(),
            ctx.accounts.config.clone(),
            ctx.accounts.config_sub_dao.clone(),
            ctx.accounts.system_program.clone(),
        ],
        ctx.signer_seeds,
    )
    .map_err(Into::into)
}
