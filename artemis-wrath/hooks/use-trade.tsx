import { create } from 'zustand';

interface cardIdQty {
  cardId: string;
  qty: number;
}

interface tradeData {
  offerCards: string[];
  wantedCards: string[];
  addOfferCards: (id: string) => any;
  removeOfferCards: (id: string) => void;
  addWantedCards: (id: string) => void;
  removeWantedCards: (id: string) => void;
}

// create item with qty and string
// update qty to remove by pressing 1 if 0 it will fail backend will get a array of ids and qty

export const useTradeData = create<tradeData>((set) => ({
  offerCards: [],
  wantedCards: [],
  addOfferCards: (string) =>
    set((state) => ({ offerCards: [...state.offerCards, string] })),
  removeOfferCards: (string) =>
    set((state) => ({
      offerCards: state.offerCards.filter((card) => card !== string),
    })),
  addWantedCards: (string) =>
    set((state) => ({ wantedCards: [...state.wantedCards, string] })),
  removeWantedCards: (string) =>
    set((state) => ({
      wantedCards: state.wantedCards.filter((card) => card !== string),
    })),
}));
