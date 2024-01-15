import {create} from 'zustand'

interface Card {
    id: number, 
    name: string, 
    description: string, 
    randomNumber: number,
    image?: string, 
    inclination?: string
}

type SideBarStore = {
    cards: Card[];
    collected: boolean
    addCards: (data:Card[]) => void
    setCollected: (data:boolean) => void
}


export const useCollectedCards = create<SideBarStore>((set) => ({
    cards: [],
    collected: false,
    setCollected: (data:boolean) => set({collected:data}),
    addCards: (data:Card[]) => set({cards: data})
}))