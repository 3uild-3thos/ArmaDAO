import {
  IArmadaMintStore,
  armadaMintStore,
} from "@/lib/zustand/armada-mint.store";
import {
  ICreateFleetStore,
  createFleetStore,
} from "@/lib/zustand/create-fleet.store";
import { createSelectors } from "@/lib/zustand/createSelectors";
import { IDaoStore, createDaoStore } from "@/lib/zustand/dao.store";
import { IVotingStore, createVotingStore } from "@/lib/zustand/voting.store";
import { create } from "zustand";

type IStore = ICreateFleetStore & IDaoStore & IVotingStore & IArmadaMintStore;

export const useStoreBase = create<IStore>()((...state) => ({
  ...createFleetStore(...state),
  ...createDaoStore(...state),
  ...createVotingStore(...state),
  ...createVotingStore(...state),
  ...armadaMintStore(...state),
}));

export const useStore = createSelectors(useStoreBase);
