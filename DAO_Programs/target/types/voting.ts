export type Voting = {
  "version": "0.1.0",
  "name": "voting",
  "instructions": [
    {
      "name": "vote",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
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
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
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
      "name": "cleanupVote",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
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
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "voteSubDao",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
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
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
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
      "name": "cleanupVoteSubDao",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
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
    },
    {
      "name": "voteState",
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
            "name": "choice",
            "type": "u8"
          },
          {
            "name": "bump",
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
    }
  ]
};

export const IDL: Voting = {
  "version": "0.1.0",
  "name": "voting",
  "instructions": [
    {
      "name": "vote",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
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
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
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
      "name": "cleanupVote",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
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
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "voteSubDao",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
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
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
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
      "name": "cleanupVoteSubDao",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proposalProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
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
    },
    {
      "name": "voteState",
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
            "name": "choice",
            "type": "u8"
          },
          {
            "name": "bump",
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
    }
  ]
};
