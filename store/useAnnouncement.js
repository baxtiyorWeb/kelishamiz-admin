import { create } from "zustand";



export const useAnnoncuments = create((set, get) => ({
    annoncuments:[],

    addAnnoncuments: (announcements) => set(state => {
        const newAnnoncuments = {announcements}
        return {annoncuments: newAnnoncuments}
    }),




}))