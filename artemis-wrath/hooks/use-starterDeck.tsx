import { create } from 'zustand';

type StarterDeckStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useStarterDeck = create<StarterDeckStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
