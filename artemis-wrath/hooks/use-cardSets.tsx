import { create } from 'zustand';

interface Card {
  id: number;
  name: string;
  description: string;
  randomNumber: number;
  image?: string;
  inclination: 'Love' | 'Wisdom' | 'Wrath' | 'Pride' | 'Mischief';
  inclination2?: 'Love' | 'Wisdom' | 'Wrath' | 'Pride' | 'Mischief';
  effect?: string;
  biome?:
    | 'Jungle'
    | 'Tundra'
    | 'Alpine'
    | 'Forest'
    | 'Wetland'
    | 'Grassland'
    | 'Aquatic'
    | 'Island'
    | 'Cave'
    | 'Desert'
    | '';
  effectFunction?: string;
  rarity?: 'Common' | 'Uncommon' | 'Rare' | 'SuperRare' | 'Nectar';
  type?: string;
  attackPower?: number;
  hp?: number;
}

type CardSetStore = {
  cards: Card[];
  collected: boolean;
  addCards: (data: Card[]) => void;
  setCollected: (data: boolean) => void;
};

export const useCardSet = create<CardSetStore>((set) => ({
  cards: [],
  collected: false,
  setCollected: (data: boolean) => set({ collected: data }),
  addCards: (data: Card[]) => set({ cards: data }),
}));
