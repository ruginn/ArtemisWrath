import { create } from 'zustand';

type CardDetailStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useCardModal = create<CardDetailStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
