import { PageRoutes } from "@/constants";
import { create } from "zustand";

type State = {
  pageTitle: string;
};

type Actions = {
  setPageTitle: (title: string) => void;
};

export const useAppStore = create<State & Actions>((set) => ({
  pageTitle: PageRoutes.DASHBOARD,
  setPageTitle: (title: string) => set({ pageTitle: title }),
}));
