export type Proposal = {
  "version": "0.1.0",
  "name": "proposal",
  "instructions": [
    {
      "name": "createProposal",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ownerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nft",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "metadata",
          "type": "string"
        },
        {
          "name": "proposal",
          "type": {
            "defined": "ProposalType"
          }
        },
        {
          "name": "quorum",
          "type": "u8"
        },
        {
          "name": "threshold",
          "type": "u64"
        },
        {
          "name": "expiry",
          "type": "u64"
        },
        {
          "name": "choices",
          "type": "u8"
        },
        {
          "name": "evaluationPeriod",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createProposalStaked",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "metadata",
          "type": "string"
        },
        {
          "name": "proposal",
          "type": {
            "defined": "ProposalType"
          }
        },
        {
          "name": "quorum",
          "type": "u8"
        },
        {
          "name": "threshold",
          "type": "u64"
        },
        {
          "name": "expiry",
          "type": "u64"
        },
        {
          "name": "choices",
          "type": "u8"
        },
        {
          "name": "evaluationPeriod",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cleanupProposal",
      "accounts": [
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "executeProposal",
      "accounts": [
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createProposalSubDao",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "configSubDao",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "metadata",
          "type": "string"
        },
        {
          "name": "proposal",
          "type": {
            "defined": "ProposalType"
          }
        },
        {
          "name": "quorum",
          "type": "u8"
        },
        {
          "name": "threshold",
          "type": "u64"
        },
        {
          "name": "expiry",
          "type": "u64"
        },
        {
          "name": "choices",
          "type": "u8"
        },
        {
          "name": "evaluationPeriod",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createProposalSubDaoHybrid",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ownerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nft",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "configSubDao",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "metadata",
          "type": "string"
        },
        {
          "name": "proposal",
          "type": {
            "defined": "ProposalType"
          }
        },
        {
          "name": "quorum",
          "type": "u8"
        },
        {
          "name": "threshold",
          "type": "u64"
        },
        {
          "name": "expiry",
          "type": "u64"
        },
        {
          "name": "choices",
          "type": "u8"
        },
        {
          "name": "evaluationPeriod",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cleanupProposalSubDao",
      "accounts": [
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "configSubDao",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "executeProposalSubDao",
      "accounts": [
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "configSubDao",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addVote",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "choice",
          "type": "u8"
        }
      ]
    },
    {
      "name": "removeVote",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "choice",
          "type": "u8"
        }
      ]
    },
    {
      "name": "addVoteSubDao",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "configSubDao",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "choice",
          "type": "u8"
        }
      ]
    },
    {
      "name": "removeVoteSubDao",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "configSubDao",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "choice",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "daoConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seed",
            "type": "u64"
          },
          {
            "name": "authBump",
            "type": "u8"
          },
          {
            "name": "configBump",
            "type": "u8"
          },
          {
            "name": "treasuryBump",
            "type": "u8"
          },
          {
            "name": "proposalFee",
            "type": "u64"
          },
          {
            "name": "minQuorum",
            "type": "u8"
          },
          {
            "name": "minThreshold",
            "type": "u64"
          },
          {
            "name": "maxExpiry",
            "type": "u64"
          },
          {
            "name": "evaluationPhasePeriod",
            "type": "u64"
          },
          {
            "name": "proposalCount",
            "type": "u64"
          },
          {
            "name": "proposalProgram",
            "type": "publicKey"
          },
          {
            "name": "votingProgram",
            "type": "publicKey"
          },
          {
            "name": "stakingProgram",
            "type": "publicKey"
          },
          {
            "name": "collectionMint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "mint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "minStakedRequiredProposal",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "allowSubDao",
            "type": "bool"
          },
          {
            "name": "minStakedCreateSubdao",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "isHybrid",
            "type": "bool"
          },
          {
            "name": "circulatingSupply",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "proposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "metadata",
            "type": "string"
          },
          {
            "name": "proposal",
            "type": {
              "defined": "ProposalType"
            }
          },
          {
            "name": "result",
            "type": {
              "defined": "ProposalStatus"
            }
          },
          {
            "name": "quorum",
            "type": "u8"
          },
          {
            "name": "threshold",
            "type": "u64"
          },
          {
            "name": "votes",
            "type": "u64"
          },
          {
            "name": "expiry",
            "type": "u64"
          },
          {
            "name": "choices",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "createdTime",
            "type": "u64"
          },
          {
            "name": "voteCounts",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "evaluationPeriod",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "stakeState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "lockedAmount",
            "type": "u64"
          },
          {
            "name": "accounts",
            "type": "u64"
          },
          {
            "name": "updated",
            "type": "u64"
          },
          {
            "name": "vaultBump",
            "type": "u8"
          },
          {
            "name": "authBump",
            "type": "u8"
          },
          {
            "name": "stateBump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ExecutableProposal",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "SetProposalFee",
            "fields": [
              "u64"
            ]
          },
          {
            "name": "SetMaxExpiry",
            "fields": [
              "u64"
            ]
          },
          {
            "name": "SetThreshold",
            "fields": [
              "u64"
            ]
          },
          {
            "name": "SetQuorum",
            "fields": [
              "u8"
            ]
          },
          {
            "name": "SetEvaluationPeriod",
            "fields": [
              "u64"
            ]
          },
          {
            "name": "SetAllowSubDao",
            "fields": [
              "bool"
            ]
          }
        ]
      }
    },
    {
      "name": "ProposalStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "EvaluationPhase"
          },
          {
            "name": "Open"
          },
          {
            "name": "Succeeded"
          },
          {
            "name": "Failed"
          }
        ]
      }
    },
    {
      "name": "ProposalType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bounty",
            "fields": [
              "publicKey",
              "u64"
            ]
          },
          {
            "name": "Executable",
            "fields": [
              {
                "defined": "ExecutableProposal"
              }
            ]
          },
          {
            "name": "Vote"
          },
          {
            "name": "VoteMultipleChoice"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "DefaultError",
      "msg": "Default Error"
    },
    {
      "code": 6001,
      "name": "BumpError",
      "msg": "Bump Error"
    },
    {
      "code": 6002,
      "name": "Overflow",
      "msg": "Overflow"
    },
    {
      "code": 6003,
      "name": "Underflow",
      "msg": "Underflow"
    },
    {
      "code": 6004,
      "name": "AccountsOpen",
      "msg": "You can't unstake with open accounts"
    },
    {
      "code": 6005,
      "name": "Expired",
      "msg": "Proposal expired"
    },
    {
      "code": 6006,
      "name": "InvalidSlot",
      "msg": "Invalid slot"
    },
    {
      "code": 6007,
      "name": "InsufficientStake",
      "msg": "Insufficient stake"
    },
    {
      "code": 6008,
      "name": "InvalidName",
      "msg": "Invalid name"
    },
    {
      "code": 6009,
      "name": "InvalidGist",
      "msg": "Invalid gist"
    },
    {
      "code": 6010,
      "name": "InvalidProposalSeed",
      "msg": "Invalid proposal seed"
    },
    {
      "code": 6011,
      "name": "InvalidQuorum",
      "msg": "Invalid quorum"
    },
    {
      "code": 6012,
      "name": "InvalidExpiry",
      "msg": "Invalid expiry"
    },
    {
      "code": 6013,
      "name": "ProposalClosed",
      "msg": "Proposal closed"
    },
    {
      "code": 6014,
      "name": "InvalidVoteAmount",
      "msg": "You can't vote 0!"
    },
    {
      "code": 6015,
      "name": "InvalidProposalStatus",
      "msg": "Invalid proposal status"
    },
    {
      "code": 6016,
      "name": "InvalidStakeAmount",
      "msg": "Invalid stake amount"
    },
    {
      "code": 6017,
      "name": "InvalidThreshold",
      "msg": "Invalid Threshold"
    },
    {
      "code": 6018,
      "name": "InvalidRequiredTime",
      "msg": "Invalid Required Time"
    },
    {
      "code": 6019,
      "name": "InvalidVoteType",
      "msg": "Invalid Vote Type"
    },
    {
      "code": 6020,
      "name": "SingleChoice",
      "msg": "AlreadyVoted"
    },
    {
      "code": 6021,
      "name": "InvalidChoicesAmount",
      "msg": "Invalid choices amount"
    },
    {
      "code": 6022,
      "name": "InvalidChoice",
      "msg": "Invalid choice"
    },
    {
      "code": 6023,
      "name": "CollectionNotSet",
      "msg": "Collection not set"
    },
    {
      "code": 6024,
      "name": "InvalidCollection",
      "msg": "Invalid Collection"
    }
  ]
};

export const IDL: Proposal = {
  "version": "0.1.0",
  "name": "proposal",
  "instructions": [
    {
      "name": "createProposal",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ownerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nft",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "metadata",
          "type": "string"
        },
        {
          "name": "proposal",
          "type": {
            "defined": "ProposalType"
          }
        },
        {
          "name": "quorum",
          "type": "u8"
        },
        {
          "name": "threshold",
          "type": "u64"
        },
        {
          "name": "expiry",
          "type": "u64"
        },
        {
          "name": "choices",
          "type": "u8"
        },
        {
          "name": "evaluationPeriod",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createProposalStaked",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "metadata",
          "type": "string"
        },
        {
          "name": "proposal",
          "type": {
            "defined": "ProposalType"
          }
        },
        {
          "name": "quorum",
          "type": "u8"
        },
        {
          "name": "threshold",
          "type": "u64"
        },
        {
          "name": "expiry",
          "type": "u64"
        },
        {
          "name": "choices",
          "type": "u8"
        },
        {
          "name": "evaluationPeriod",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cleanupProposal",
      "accounts": [
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "executeProposal",
      "accounts": [
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createProposalSubDao",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "configSubDao",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "metadata",
          "type": "string"
        },
        {
          "name": "proposal",
          "type": {
            "defined": "ProposalType"
          }
        },
        {
          "name": "quorum",
          "type": "u8"
        },
        {
          "name": "threshold",
          "type": "u64"
        },
        {
          "name": "expiry",
          "type": "u64"
        },
        {
          "name": "choices",
          "type": "u8"
        },
        {
          "name": "evaluationPeriod",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createProposalSubDaoHybrid",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ownerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nft",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collection",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "configSubDao",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "metadata",
          "type": "string"
        },
        {
          "name": "proposal",
          "type": {
            "defined": "ProposalType"
          }
        },
        {
          "name": "quorum",
          "type": "u8"
        },
        {
          "name": "threshold",
          "type": "u64"
        },
        {
          "name": "expiry",
          "type": "u64"
        },
        {
          "name": "choices",
          "type": "u8"
        },
        {
          "name": "evaluationPeriod",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cleanupProposalSubDao",
      "accounts": [
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "configSubDao",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "executeProposalSubDao",
      "accounts": [
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "configSubDao",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addVote",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "choice",
          "type": "u8"
        }
      ]
    },
    {
      "name": "removeVote",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "choice",
          "type": "u8"
        }
      ]
    },
    {
      "name": "addVoteSubDao",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "configSubDao",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "choice",
          "type": "u8"
        }
      ]
    },
    {
      "name": "removeVoteSubDao",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "configSubDao",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "choice",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "daoConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seed",
            "type": "u64"
          },
          {
            "name": "authBump",
            "type": "u8"
          },
          {
            "name": "configBump",
            "type": "u8"
          },
          {
            "name": "treasuryBump",
            "type": "u8"
          },
          {
            "name": "proposalFee",
            "type": "u64"
          },
          {
            "name": "minQuorum",
            "type": "u8"
          },
          {
            "name": "minThreshold",
            "type": "u64"
          },
          {
            "name": "maxExpiry",
            "type": "u64"
          },
          {
            "name": "evaluationPhasePeriod",
            "type": "u64"
          },
          {
            "name": "proposalCount",
            "type": "u64"
          },
          {
            "name": "proposalProgram",
            "type": "publicKey"
          },
          {
            "name": "votingProgram",
            "type": "publicKey"
          },
          {
            "name": "stakingProgram",
            "type": "publicKey"
          },
          {
            "name": "collectionMint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "mint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "minStakedRequiredProposal",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "allowSubDao",
            "type": "bool"
          },
          {
            "name": "minStakedCreateSubdao",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "isHybrid",
            "type": "bool"
          },
          {
            "name": "circulatingSupply",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "proposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "metadata",
            "type": "string"
          },
          {
            "name": "proposal",
            "type": {
              "defined": "ProposalType"
            }
          },
          {
            "name": "result",
            "type": {
              "defined": "ProposalStatus"
            }
          },
          {
            "name": "quorum",
            "type": "u8"
          },
          {
            "name": "threshold",
            "type": "u64"
          },
          {
            "name": "votes",
            "type": "u64"
          },
          {
            "name": "expiry",
            "type": "u64"
          },
          {
            "name": "choices",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "createdTime",
            "type": "u64"
          },
          {
            "name": "voteCounts",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "evaluationPeriod",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "stakeState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "lockedAmount",
            "type": "u64"
          },
          {
            "name": "accounts",
            "type": "u64"
          },
          {
            "name": "updated",
            "type": "u64"
          },
          {
            "name": "vaultBump",
            "type": "u8"
          },
          {
            "name": "authBump",
            "type": "u8"
          },
          {
            "name": "stateBump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ExecutableProposal",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "SetProposalFee",
            "fields": [
              "u64"
            ]
          },
          {
            "name": "SetMaxExpiry",
            "fields": [
              "u64"
            ]
          },
          {
            "name": "SetThreshold",
            "fields": [
              "u64"
            ]
          },
          {
            "name": "SetQuorum",
            "fields": [
              "u8"
            ]
          },
          {
            "name": "SetEvaluationPeriod",
            "fields": [
              "u64"
            ]
          },
          {
            "name": "SetAllowSubDao",
            "fields": [
              "bool"
            ]
          }
        ]
      }
    },
    {
      "name": "ProposalStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "EvaluationPhase"
          },
          {
            "name": "Open"
          },
          {
            "name": "Succeeded"
          },
          {
            "name": "Failed"
          }
        ]
      }
    },
    {
      "name": "ProposalType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bounty",
            "fields": [
              "publicKey",
              "u64"
            ]
          },
          {
            "name": "Executable",
            "fields": [
              {
                "defined": "ExecutableProposal"
              }
            ]
          },
          {
            "name": "Vote"
          },
          {
            "name": "VoteMultipleChoice"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "DefaultError",
      "msg": "Default Error"
    },
    {
      "code": 6001,
      "name": "BumpError",
      "msg": "Bump Error"
    },
    {
      "code": 6002,
      "name": "Overflow",
      "msg": "Overflow"
    },
    {
      "code": 6003,
      "name": "Underflow",
      "msg": "Underflow"
    },
    {
      "code": 6004,
      "name": "AccountsOpen",
      "msg": "You can't unstake with open accounts"
    },
    {
      "code": 6005,
      "name": "Expired",
      "msg": "Proposal expired"
    },
    {
      "code": 6006,
      "name": "InvalidSlot",
      "msg": "Invalid slot"
    },
    {
      "code": 6007,
      "name": "InsufficientStake",
      "msg": "Insufficient stake"
    },
    {
      "code": 6008,
      "name": "InvalidName",
      "msg": "Invalid name"
    },
    {
      "code": 6009,
      "name": "InvalidGist",
      "msg": "Invalid gist"
    },
    {
      "code": 6010,
      "name": "InvalidProposalSeed",
      "msg": "Invalid proposal seed"
    },
    {
      "code": 6011,
      "name": "InvalidQuorum",
      "msg": "Invalid quorum"
    },
    {
      "code": 6012,
      "name": "InvalidExpiry",
      "msg": "Invalid expiry"
    },
    {
      "code": 6013,
      "name": "ProposalClosed",
      "msg": "Proposal closed"
    },
    {
      "code": 6014,
      "name": "InvalidVoteAmount",
      "msg": "You can't vote 0!"
    },
    {
      "code": 6015,
      "name": "InvalidProposalStatus",
      "msg": "Invalid proposal status"
    },
    {
      "code": 6016,
      "name": "InvalidStakeAmount",
      "msg": "Invalid stake amount"
    },
    {
      "code": 6017,
      "name": "InvalidThreshold",
      "msg": "Invalid Threshold"
    },
    {
      "code": 6018,
      "name": "InvalidRequiredTime",
      "msg": "Invalid Required Time"
    },
    {
      "code": 6019,
      "name": "InvalidVoteType",
      "msg": "Invalid Vote Type"
    },
    {
      "code": 6020,
      "name": "SingleChoice",
      "msg": "AlreadyVoted"
    },
    {
      "code": 6021,
      "name": "InvalidChoicesAmount",
      "msg": "Invalid choices amount"
    },
    {
      "code": 6022,
      "name": "InvalidChoice",
      "msg": "Invalid choice"
    },
    {
      "code": 6023,
      "name": "CollectionNotSet",
      "msg": "Collection not set"
    },
    {
      "code": 6024,
      "name": "InvalidCollection",
      "msg": "Invalid Collection"
    }
  ]
};
