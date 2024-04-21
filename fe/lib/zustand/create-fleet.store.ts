import {
  FleetConfigDefaults,
  FleetInfoDefaults,
  FleetTeamDefaults,
  IFleetConfig,
  IFleetInfo,
  IFleetTeam,
} from "@/lib/schema/fleet.schema";
import { StateCreator } from "zustand";

interface IState {
  page: number;
  fleetInfo: IFleetInfo;
  logoPreview: string;
  bannerPreview: string;
  fleetConfig: IFleetConfig;
  fleetTeam: IFleetTeam;
}

interface IActions {
  setPage: (page: number) => void;
  handleNextPage: () => void;
  handleBackPage: () => void;
  setFleetInfo: (fleetInfo: IFleetInfo) => void;
  setLogoPreview: (logoPreview: string) => void;
  setBannerPreview: (bannerPreview: string) => void;
  setFleetConfig: (fleetConfig: IFleetConfig) => void;
  setFleetTeam: (fleetTeam: IFleetTeam) => void;
}

export type ICreateFleetStore = IState & IActions;

export const createFleetStore: StateCreator<ICreateFleetStore> = (set) => ({
  page: 0,
  setPage: (page: number) => set(() => ({ page })),
  handleNextPage: () => set((state) => ({ page: state.page + 1 })),
  handleBackPage: () => set((state) => ({ page: state.page - 1 })),
  fleetInfo: FleetInfoDefaults,
  setFleetInfo: (fleetInfo: IFleetInfo) => set(() => ({ fleetInfo })),
  logoPreview: "",
  setLogoPreview: (logoPreview: string) => set(() => ({ logoPreview })),
  bannerPreview: "",
  setBannerPreview: (bannerPreview: string) => set(() => ({ bannerPreview })),
  fleetConfig: FleetConfigDefaults,
  setFleetConfig: (fleetConfig: IFleetConfig) => set(() => ({ fleetConfig })),
  fleetTeam: FleetTeamDefaults,
  setFleetTeam: (fleetTeam: IFleetTeam) => set(() => ({ fleetTeam })),
});
