export type STAKING_IDL_TYPE = {
  version: "0.1.0";
  name: "staking";
  instructions: [
    {
      name: "initStake";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "ownerAta";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stakeAuth";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "coreConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "initStakeNft";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "ownerAta";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stakeAuth";
          isMut: false;
          isSigner: false;
        },
        {
          name: "nft";
          isMut: false;
          isSigner: false;
        },
        {
          name: "collection";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "coreConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "metadata";
          isMut: false;
          isSigner: false;
        },
        {
          name: "metadataProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "stakeTokens";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "ownerAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stakeAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "auth";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "coreConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "stakeNft";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "ownerAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stakeAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stakeAuth";
          isMut: false;
          isSigner: false;
        },
        {
          name: "nft";
          isMut: false;
          isSigner: false;
        },
        {
          name: "collection";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "coreConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "metadata";
          isMut: false;
          isSigner: false;
        },
        {
          name: "metadataProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "unstakeTokens";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "ownerAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stakeAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "auth";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "coreConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "unstakeNft";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "ownerAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stakeAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stakeAuth";
          isMut: false;
          isSigner: false;
        },
        {
          name: "nft";
          isMut: false;
          isSigner: false;
        },
        {
          name: "collection";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "coreConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "metadata";
          isMut: false;
          isSigner: false;
        },
        {
          name: "metadataProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "closeStake";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "stakeAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stakeAuth";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "coreConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "closeStakeNft";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "stakeAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stakeAuth";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "nft";
          isMut: false;
          isSigner: false;
        },
        {
          name: "collection";
          isMut: false;
          isSigner: false;
        },
        {
          name: "coreConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "addAccount";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "stakeState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "coreConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "removeAccount";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "stakeState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "coreConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "DaoConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "seed";
            type: "u64";
          },
          {
            name: "proposalFee";
            type: "u64";
          },
          {
            name: "minQuorum";
            type: "u64";
          },
          {
            name: "minThreshold";
            type: "u64";
          },
          {
            name: "maxExpiry";
            type: "u64";
          },
          {
            name: "minStake";
            type: "u64";
          },
          {
            name: "minPrevotingPeriod";
            type: "u64";
          },
          {
            name: "proposalCount";
            type: "u64";
          },
          {
            name: "proposalProgram";
            type: "publicKey";
          },
          {
            name: "votingProgram";
            type: "publicKey";
          },
          {
            name: "stakingProgram";
            type: "publicKey";
          },
          {
            name: "authBump";
            type: "u8";
          },
          {
            name: "configBump";
            type: "u8";
          },
          {
            name: "treasuryBump";
            type: "u8";
          },
          {
            name: "collectionMint";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "StakeState";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "publicKey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "accounts";
            type: "u64";
          },
          {
            name: "updated";
            type: "u64";
          },
          {
            name: "vaultBump";
            type: "u8";
          },
          {
            name: "authBump";
            type: "u8";
          },
          {
            name: "stateBump";
            type: "u8";
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "DefaultError";
      msg: "Default Error";
    },
    {
      code: 6001;
      name: "BumpError";
      msg: "Bump Error";
    },
    {
      code: 6002;
      name: "Overflow";
      msg: "Overflow";
    },
    {
      code: 6003;
      name: "Underflow";
      msg: "Underflow";
    },
    {
      code: 6004;
      name: "AccountsOpen";
      msg: "You can't unstake with open accounts";
    },
    {
      code: 6005;
      name: "Expired";
      msg: "Proposal expired";
    },
    {
      code: 6006;
      name: "InvalidSlot";
      msg: "Invalid slot";
    },
    {
      code: 6007;
      name: "InsufficientStake";
      msg: "Insufficient stake";
    },
    {
      code: 6008;
      name: "InvalidName";
      msg: "Invalid name";
    },
    {
      code: 6009;
      name: "InvalidGist";
      msg: "Invalid gist";
    },
    {
      code: 6010;
      name: "InvalidProposalSeed";
      msg: "Invalid proposal seed";
    },
    {
      code: 6011;
      name: "InvalidQuorum";
      msg: "Invalid quorum";
    },
    {
      code: 6012;
      name: "InvalidExpiry";
      msg: "Invalid expiry";
    },
    {
      code: 6013;
      name: "ProposalClosed";
      msg: "Proposal closed";
    },
    {
      code: 6014;
      name: "InvalidVoteAmount";
      msg: "You can't vote 0!";
    },
    {
      code: 6015;
      name: "InvalidProposalStatus";
      msg: "Invalid proposal status";
    },
    {
      code: 6016;
      name: "InvalidStakeAmount";
      msg: "Invalid stake amount";
    },
    {
      code: 6017;
      name: "InvalidThreshold";
      msg: "Invalid Threshold";
    },
    {
      code: 6018;
      name: "InvalidRequiredTime";
      msg: "Invalid Required Time";
    },
    {
      code: 6019;
      name: "InvalidVoteType";
      msg: "Invalid Vote Type";
    },
    {
      code: 6020;
      name: "SingleChoice";
      msg: "AlreadyVoted";
    },
    {
      code: 6021;
      name: "InvalidChoicesAmount";
      msg: "Invalid choices amount";
    },
    {
      code: 6022;
      name: "InvalidChoice";
      msg: "Invalid choice";
    },
    {
      code: 6023;
      name: "CollectionNotSet";
      msg: "Collection not set";
    },
    {
      code: 6024;
      name: "InvalidCollection";
      msg: "Invalid Collection";
    }
  ];
};

export const STAKING_IDL: STAKING_IDL_TYPE = {
  version: "0.1.0",
  name: "staking",
  instructions: [
    {
      name: "initStake",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "ownerAta",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakeAuth",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "coreConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "initStakeNft",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "ownerAta",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakeAuth",
          isMut: false,
          isSigner: false,
        },
        {
          name: "nft",
          isMut: false,
          isSigner: false,
        },
        {
          name: "collection",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "coreConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "metadata",
          isMut: false,
          isSigner: false,
        },
        {
          name: "metadataProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "stakeTokens",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "ownerAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakeAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "auth",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "coreConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "stakeNft",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "ownerAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakeAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakeAuth",
          isMut: false,
          isSigner: false,
        },
        {
          name: "nft",
          isMut: false,
          isSigner: false,
        },
        {
          name: "collection",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "coreConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "metadata",
          isMut: false,
          isSigner: false,
        },
        {
          name: "metadataProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "unstakeTokens",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "ownerAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakeAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "auth",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "coreConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "unstakeNft",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "ownerAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakeAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakeAuth",
          isMut: false,
          isSigner: false,
        },
        {
          name: "nft",
          isMut: false,
          isSigner: false,
        },
        {
          name: "collection",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "coreConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "metadata",
          isMut: false,
          isSigner: false,
        },
        {
          name: "metadataProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "closeStake",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "stakeAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakeAuth",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "coreConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "closeStakeNft",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "stakeAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakeAuth",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "nft",
          isMut: false,
          isSigner: false,
        },
        {
          name: "collection",
          isMut: false,
          isSigner: false,
        },
        {
          name: "coreConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "addAccount",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "stakeState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "coreConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "removeAccount",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "stakeState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "coreConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "DaoConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "seed",
            type: "u64",
          },
          {
            name: "proposalFee",
            type: "u64",
          },
          {
            name: "minQuorum",
            type: "u64",
          },
          {
            name: "minThreshold",
            type: "u64",
          },
          {
            name: "maxExpiry",
            type: "u64",
          },
          {
            name: "minStake",
            type: "u64",
          },
          {
            name: "minPrevotingPeriod",
            type: "u64",
          },
          {
            name: "proposalCount",
            type: "u64",
          },
          {
            name: "proposalProgram",
            type: "publicKey",
          },
          {
            name: "votingProgram",
            type: "publicKey",
          },
          {
            name: "stakingProgram",
            type: "publicKey",
          },
          {
            name: "authBump",
            type: "u8",
          },
          {
            name: "configBump",
            type: "u8",
          },
          {
            name: "treasuryBump",
            type: "u8",
          },
          {
            name: "collectionMint",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "StakeState",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: "publicKey",
          },
          {
            name: "amount",
            type: "u64",
          },
          {
            name: "accounts",
            type: "u64",
          },
          {
            name: "updated",
            type: "u64",
          },
          {
            name: "vaultBump",
            type: "u8",
          },
          {
            name: "authBump",
            type: "u8",
          },
          {
            name: "stateBump",
            type: "u8",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "DefaultError",
      msg: "Default Error",
    },
    {
      code: 6001,
      name: "BumpError",
      msg: "Bump Error",
    },
    {
      code: 6002,
      name: "Overflow",
      msg: "Overflow",
    },
    {
      code: 6003,
      name: "Underflow",
      msg: "Underflow",
    },
    {
      code: 6004,
      name: "AccountsOpen",
      msg: "You can't unstake with open accounts",
    },
    {
      code: 6005,
      name: "Expired",
      msg: "Proposal expired",
    },
    {
      code: 6006,
      name: "InvalidSlot",
      msg: "Invalid slot",
    },
    {
      code: 6007,
      name: "InsufficientStake",
      msg: "Insufficient stake",
    },
    {
      code: 6008,
      name: "InvalidName",
      msg: "Invalid name",
    },
    {
      code: 6009,
      name: "InvalidGist",
      msg: "Invalid gist",
    },
    {
      code: 6010,
      name: "InvalidProposalSeed",
      msg: "Invalid proposal seed",
    },
    {
      code: 6011,
      name: "InvalidQuorum",
      msg: "Invalid quorum",
    },
    {
      code: 6012,
      name: "InvalidExpiry",
      msg: "Invalid expiry",
    },
    {
      code: 6013,
      name: "ProposalClosed",
      msg: "Proposal closed",
    },
    {
      code: 6014,
      name: "InvalidVoteAmount",
      msg: "You can't vote 0!",
    },
    {
      code: 6015,
      name: "InvalidProposalStatus",
      msg: "Invalid proposal status",
    },
    {
      code: 6016,
      name: "InvalidStakeAmount",
      msg: "Invalid stake amount",
    },
    {
      code: 6017,
      name: "InvalidThreshold",
      msg: "Invalid Threshold",
    },
    {
      code: 6018,
      name: "InvalidRequiredTime",
      msg: "Invalid Required Time",
    },
    {
      code: 6019,
      name: "InvalidVoteType",
      msg: "Invalid Vote Type",
    },
    {
      code: 6020,
      name: "SingleChoice",
      msg: "AlreadyVoted",
    },
    {
      code: 6021,
      name: "InvalidChoicesAmount",
      msg: "Invalid choices amount",
    },
    {
      code: 6022,
      name: "InvalidChoice",
      msg: "Invalid choice",
    },
    {
      code: 6023,
      name: "CollectionNotSet",
      msg: "Collection not set",
    },
    {
      code: 6024,
      name: "InvalidCollection",
      msg: "Invalid Collection",
    },
  ],
};
