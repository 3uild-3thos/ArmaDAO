import { createSelectors } from "@/lib/zustand/createSelectors";
import {
  getAllDaoConfig,
  getAllProposal,
  getAllStakeState,
  getAllVoteState,
} from "@/programs/voting";
import { AnchorProvider, ProgramAccount } from "@coral-xyz/anchor";
import { create } from "zustand";

interface VotingStoreState {
  daoConfigs: ProgramAccount[];
  stakeStates: ProgramAccount[];
  proposals: ProgramAccount[];
  voteStates: ProgramAccount[];
}

interface VotingStoreActions {
  getAllDaoConfig: (provider: AnchorProvider) => Promise<void>;
  getAllStakeState: (provider: AnchorProvider) => Promise<void>;
  getAllProposal: (provider: AnchorProvider) => Promise<void>;
  getAllVoteState: (provider: AnchorProvider) => Promise<void>;
}

type VotingStore = VotingStoreState & VotingStoreActions;

const initialState: VotingStoreState = {
  daoConfigs: [],
  stakeStates: [],
  proposals: [],
  voteStates: [],
};

const useVotingStoreBase = create<VotingStore>((set) => ({
  getAllDaoConfig: async (provider: AnchorProvider) => {
    const accounts = await getAllDaoConfig(provider);
    return set(() => ({ daoConfigs: accounts }));
  },
  getAllStakeState: async (provider: AnchorProvider) => {
    const accounts = await getAllStakeState(provider);
    return set(() => ({ stakeStates: accounts }));
  },
  getAllProposal: async (provider: AnchorProvider) => {
    const accounts = await getAllProposal(provider);
    return set(() => ({ proposals: accounts }));
  },
  getAllVoteState: async (provider: AnchorProvider) => {
    const accounts = await getAllVoteState(provider);
    return set(() => ({ voteStates: accounts }));
  },
  ...initialState,
}));

export default createSelectors(useVotingStoreBase);
