import { getAllDaoConfig, getAllStakeState } from "@/programs/dao";
import { AnchorProvider, ProgramAccount } from "@coral-xyz/anchor";
import { StateCreator } from "zustand";

interface IDaoStoreState {
  daoConfigs: ProgramAccount[];
  stakeStates: ProgramAccount[];
}

interface IDaoStoreActions {
  getAllDaoConfig: (provider: AnchorProvider) => Promise<void>;
  getAllStakeState: (provider: AnchorProvider) => Promise<void>;
}

export type IDaoStore = IDaoStoreState & IDaoStoreActions;

const initialState: IDaoStoreState = {
  daoConfigs: [],
  stakeStates: [],
};

export const createDaoStore: StateCreator<IDaoStore> = (set) => ({
  getAllDaoConfig: async (provider: AnchorProvider) => {
    const accounts = await getAllDaoConfig(provider);
    console.log(accounts);

    return set(() => ({ daoConfigs: accounts }));
  },
  getAllStakeState: async (provider: AnchorProvider) => {
    const accounts = await getAllStakeState(provider);
    console.log(accounts);
    return set(() => ({ stakeStates: accounts }));
  },

  ...initialState,
});
