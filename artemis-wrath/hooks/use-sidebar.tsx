import { create } from 'zustand';

type SideBarStore = {
  selected: string;
  mobile: boolean;
  onChange: (newSelected: string) => void;
  toggleMobileOpen: () => void;
  toggleMobileClose: () => void;
};

export const useSideBar = create<SideBarStore>((set) => ({
  selected: '',
  mobile: false,
  onChange: (newSelected: string) => set({ selected: newSelected }),
  toggleMobileOpen: () => set({ mobile: true }),
  toggleMobileClose: () => set({ mobile: false }),
}));
