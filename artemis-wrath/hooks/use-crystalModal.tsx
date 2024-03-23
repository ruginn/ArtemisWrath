import { create } from 'zustand';

type crystalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useCrystalModal = create<crystalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
