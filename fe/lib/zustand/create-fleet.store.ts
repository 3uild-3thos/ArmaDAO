import { createSelectors } from "@/lib/zustand/createSelectors";
import { create } from "zustand";

interface CreateFleetStore {
  page: number;
}

const useCreateFleetStoreBase = create<CreateFleetStore>((set) => ({
  page: 1,
  setPage: (page: number) => set(() => ({ page })),
}));

export default createSelectors(useCreateFleetStoreBase);
