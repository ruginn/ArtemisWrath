import { create } from 'zustand';

type crystalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setCrystalAmount: (number: number) => void;

  crystalAmount: number;
};

export const useCrystalModal = create<crystalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setCrystalAmount: (number) => set({ crystalAmount: number }),

  crystalAmount: 0,
}));
