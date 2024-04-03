#[macro_export]
macro_rules! validate_nft {
    ($metadata:expr,$collection_mint:expr) => {
        require!(
            $metadata.is_some(),
            ProposalError::CollectionNotSet
        );

        require_keys_eq!(
            $metadata.clone().unwrap().key,
            $collection_mint.key(),
            ProposalError::InvalidCollection
        );

        require!(
            $metadata.clone().unwrap().verified,
            ProposalError::InvalidCollection
        );
    };
}