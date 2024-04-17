import {
  ICreateFleetStore,
  createFleetStore,
} from "@/lib/zustand/create-fleet.store";
import { createSelectors } from "@/lib/zustand/createSelectors";
import { IDaoStore, createDaoStore } from "@/lib/zustand/dao.store";
import { IVotingStore, createVotingStore } from "@/lib/zustand/voting.store";
import { create } from "zustand";

export const useStoreBase = create<
  ICreateFleetStore & IDaoStore & IVotingStore
>()((...state) => ({
  ...createFleetStore(...state),
  ...createDaoStore(...state),
  ...createVotingStore(...state),
}));

export const useStore = createSelectors(useStoreBase);
