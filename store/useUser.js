import { create } from "zustand";



export const useUser = create((set, get) => ({
    user:[],

    addUser: (user) => set(state => {
        const newUser = {user}
        return {user: newUser}
    }),




}))