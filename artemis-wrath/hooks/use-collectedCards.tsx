import { create } from 'zustand';

interface Card {
  id: number;
  name: string;
  description: string;
  randomNumber: number;
  image?: string;
  inclination?: string;
}

type CollectedCardStore = {
  cards: Card[];
  collected: boolean;
  addCards: (data: Card[]) => void;
  setCollected: (data: boolean) => void;
};

export const useCollectedCards = create<CollectedCardStore>((set) => ({
  cards: [],
  collected: false,
  setCollected: (data: boolean) => set({ collected: data }),
  addCards: (data: Card[]) => set({ cards: data }),
}));
