import { create } from 'zustand';
import { Card } from '@/types/CardType';

type cardPackStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  cards: Card[];
  addCards: (data: Card[]) => void;
};

export const useCardPackModal = create<cardPackStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  cards: [],
  addCards: (data: Card[]) => set({ cards: data }),
}));
