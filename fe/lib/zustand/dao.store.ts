import { createSelectors } from "@/lib/zustand/createSelectors";
import { getAllDaoConfig, getAllStakeState } from "@/programs/dao";
import { AnchorProvider, ProgramAccount } from "@coral-xyz/anchor";
import { create } from "zustand";

interface DaoStoreState {
  daoConfigs: ProgramAccount[];
  stakeStates: ProgramAccount[];
}

interface DaoStoreActions {
  getAllDaoConfig: (provider: AnchorProvider) => Promise<void>;
  getAllStakeState: (provider: AnchorProvider) => Promise<void>;
}

type DaoStore = DaoStoreState & DaoStoreActions;

const initialState: DaoStoreState = {
  daoConfigs: [],
  stakeStates: [],
};

const useDaoStoreBase = create<DaoStore>((set) => ({
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
}));

export default createSelectors(useDaoStoreBase);
