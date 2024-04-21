import {
  getAllDaoConfig,
  getAllProposal,
  getAllStakeState,
  getAllVoteState,
} from "@/programs/voting";
import { AnchorProvider, ProgramAccount } from "@coral-xyz/anchor";
import { StateCreator } from "zustand";

interface IVotingStoreState {
  daoConfigs: ProgramAccount[];
  stakeStates: ProgramAccount[];
  proposals: ProgramAccount[];
  voteStates: ProgramAccount[];
}

interface IVotingStoreActions {
  getAllDaoConfig: (provider: AnchorProvider) => Promise<void>;
  getAllStakeState: (provider: AnchorProvider) => Promise<void>;
  getAllProposal: (provider: AnchorProvider) => Promise<void>;
  getAllVoteState: (provider: AnchorProvider) => Promise<void>;
}

export type IVotingStore = IVotingStoreState & IVotingStoreActions;

const initialState: IVotingStoreState = {
  daoConfigs: [],
  stakeStates: [],
  proposals: [],
  voteStates: [],
};

export const createVotingStore: StateCreator<IVotingStore> = (set) => ({
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
});
