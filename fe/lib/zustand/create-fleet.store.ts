import {
  FleetConfigDefaults,
  FleetInfoDefaults,
  FleetTeamDefaults,
  IFleetConfig,
  IFleetInfo,
  IFleetTeam,
} from "@/lib/schema/fleet.schema";
import { StateCreator } from "zustand";

export interface ICreateFleetStore {
  page: number;
  setPage: (page: number) => void;
  handleNextPage: () => void;
  handleBackPage: () => void;
  fleetInfo: IFleetInfo;
  setFleetInfo: (fleetInfo: IFleetInfo) => void;
  logoPreview: string;
  setLogoPreview: (logoPreview: string) => void;
  bannerPreview: string;
  setBannerPreview: (bannerPreview: string) => void;
  fleetConfig: IFleetConfig;
  setFleetConfig: (fleetConfig: IFleetConfig) => void;
  fleetTeam: IFleetTeam;
  setFleetTeam: (fleetTeam: IFleetTeam) => void;
}

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
