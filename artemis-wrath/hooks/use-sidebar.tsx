import {create} from 'zustand'

type SideBarStore = {
    selected: string;
    onChange: (newSelected:string) => void
}


export const useSideBar = create<SideBarStore>((set) => ({
    selected: '',
    onChange: (newSelected:string) => set({selected: newSelected})
}))