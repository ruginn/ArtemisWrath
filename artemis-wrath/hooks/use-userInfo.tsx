import { create } from 'zustand';

type UserInfo = {
  name: string;
  userId: string;
  lastPackDate: string;
  starterDeck: boolean;
  createdAt: string;
  crystals: number;
  username: string;
  UpdateAll: (object: userObject) => void;
  UpdateLastPack: (newDate: string) => void;
  decrementCrystalAmount: (number: number) => void;
  incrementCrystalAmount: (number: number) => void;
};

interface userObject {
  name: string;
  id: string;
  lastPackDate: string;
  starterDeck: boolean;
  createdAt: string;
  crystals: number;
  username: string;
}

export const useUserInfo = create<UserInfo>((set) => ({
  name: '',
  userId: '',
  lastPackDate: '',
  createdAt: '',
  username: '',
  crystals: 0,
  starterDeck: false,
  UpdateAll: (object: userObject) =>
    set({
      name: object.name,
      userId: object.id,
      lastPackDate: object.lastPackDate,
      starterDeck: object.starterDeck,
      createdAt: object.createdAt,
      crystals: object.crystals,
      username: object.username,
    }),
  decrementCrystalAmount: (number) =>
    set((state) => ({ crystals: state.crystals - number })),
  incrementCrystalAmount: (number) =>
    set((state) => ({ crystals: state.crystals + number })),
  UpdateLastPack: (newDate: string) => set({ lastPackDate: newDate }),
}));
