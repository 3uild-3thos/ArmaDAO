import { StateCreator } from "zustand";

interface IState {
  isLoading: boolean;
  armadaNftName: string;
  txHash: string;
}

interface IActions {
  setIsLoading: (isLoading: boolean) => void;
  setArmadaNftName: (armadaNftName: string) => void;
  setTxHash: (txHash: string) => void;
}

export type IArmadaMintStore = IState & IActions;

export const armadaMintStore: StateCreator<IArmadaMintStore> = (set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
  armadaNftName: "",
  setArmadaNftName: (armadaNftName: string) => set(() => ({ armadaNftName })),
  txHash: "",
  setTxHash: (txHash: string) => set(() => ({ txHash })),
});
