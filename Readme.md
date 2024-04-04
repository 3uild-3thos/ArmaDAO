# **ArmaDAO**
A Modern, Modular, Membership Anchor-based DAO
## Features

- **Membership Types:**
  - Token-based membership
  - NFT-based membership
  - Flexible Hybrid membership

- **Proposals Threshold:**  
  - Required Staked-based Amount to Create proposals 
  - Holding NFT-based  to create Proposal

- **Voting Threshold:**
  - Minimum number of votes required for a proposal to be considered valid.

- **Quorum Threshold:** 
   - Minimum number of votes required for a choice to succeed, based on the circulating supply.

- **Allow SubDAOs Feature:**
  - NFT Ownership Based
  - Token Staked Amount Based

- **SubDAOs - Membership:**
  - Token-based membership
  - NFT-based membership
  - Flexible Hybrid membership

# **Proposals**

## Proposal Life Cycle:
Proposals in the ArmaDAO system go through different phases during their lifetime. Here's an overview of the stages a proposal may undergo:
  - **Evaluation Phase:** The proposal is under evaluation, undergoing analysis by the community members.
  - **Open:** After evaluation, the proposal is open for voting by the community.
  - **Succeeded:** If the proposal receives sufficient votes and meets the predefined criteria, it is marked as successful.
  - **Failed:** If the proposal fails to meet the voting threshold or other requirements, it is marked as failed.

## Proposal Types
There are different types of proposals that can be created in the ArmaDAO system. Here are the main types:

- **Bounty:** Proposals to pay a certain amount to a specific address.
- **Executable:** Proposals to execute specific instructions on the blockchain. This can include setting fees, adjusting thresholds, and more.
- **Vote:** Proposals intended solely to gather community opinions, without involving financial transactions.
- **Vote Multiple Choice:** MultiChoice Proposals intended solely to gather community opinions, without involving financial transactions.

These are the common proposal types in our system, each serving its own purpose and functionality.  

## **Voting**
- **Staked-based Voting:** Our voting mechanism is staked-based, meaning that voters must stake a certain amount of tokens or nfts to participate in the decision-making process. This staked-based approach adds an additional layer of security to the voting process, making it resistant to flash loan attacks and ensuring that only committed participants have a say in the DAO's governance.

## **SubDAOs**
- **SubDAOs** are a key feature of our ArmaDAO tooling, designed to promote modularity, scalability, and community engagement. SubDAOs enable members to create specialized branches within the main DAO, each with its own governance structure, membership requirements, and decision-making processes. These SubDAOs are token-based or NFT-based, allowing for diverse membership models and participation mechanisms. By allowing the creation of SubDAOs, our system fosters innovation, empowers community-driven initiatives, and accommodates a wide range of interests and objectives within the ArmaDAO ecosystem.

# **Setup**
Some basic ground rules in order to keep our tests, `Anchor.toml` and `lib.rs` in sync:

### 1. Create a symlink to your wallet
Make sure to create a symlink to your Solana keypair in the root directory, like so:
`ln -s /Users/dean/.config/solana/id.json ./wallet.json`

While this wallet won't be committed to the repo as it is currently included in the `.gitignore`, so your funds should be `#SAFU`, it is recommended to spin up a new, specific wallet that you don't care about just for testing just in case.

### 2. Deploy and use the existing keypairs on Localnet
We are syncing the locally used keypairs:


dao2:     `daoSYkGVA6pu5CxknvVMMTc8nFAGsYzfQt2jK5CgC5V`

proposal: `propm845StqEBV57ZSnTe8EW8duzAxo5p7h4inhibXV`

vote:     `voteUXym9t6h3VzHYumMyMCXmiDoYqMiC2g4JnvdnGC`

stake:    `stakyTBmEpbUcxNhjiv16Bvr53RVy68ENBZXPiUzNcF`

All keypairs in the `/target/deploy` directory should be considered doxed and unsafe for public use.

We will deploy to devnet and mainnet with a different set of keys which will be determined at a later date and held by the POC responsible for deployments.

## Additional Resources

- [Solana Documentation](https://docs.solana.com/)
- [Anchor Framework Documentation](https://project-serum.github.io/anchor/)
- [Web3 Builders Alliance](https://www.web3builders.dev/)
