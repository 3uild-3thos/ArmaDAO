import { createSelectors } from "@/lib/zustand/createSelectors";
import { create } from "zustand";

interface CreateFleetStore {
  page: number;
  setPage: (page: number) => void;
  handleNextPage: () => void;
  handleBackPage: () => void;
}

const useCreateFleetStoreBase = create<CreateFleetStore>((set) => ({
  page: 1,
  setPage: (page: number) => set(() => ({ page })),
  handleNextPage: () => set((state) => ({ page: state.page + 1 })),
  handleBackPage: () => set((state) => ({ page: state.page - 1 })),
}));

export default createSelectors(useCreateFleetStoreBase);
