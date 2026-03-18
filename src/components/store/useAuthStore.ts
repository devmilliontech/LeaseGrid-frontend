import { create } from "zustand";
import type { ListViewDataProps } from "../appShell/compilance/ListView";

interface user{
    name: string;
    email: string;
    password: string;
    role: string;
}
interface notification{
    id: number;
    title: string;
    description: string;
    time: string;
    read: boolean;
}
interface selectIteam{
    count:number;
    total:number;
    item:ListViewDataProps[]
    selectAll: boolean;
    
}
interface AuthState {
    isAuthenticated: boolean;
    user:user|null;
    notification:notification[];
    selectIteam:selectIteam;
    login: () => void;  
    logout: () => void;
    SetUser:(user:user)=> void;  
    setNotification:(notification:notification[])=> void;
    setSelectIteam:(selectIteam:selectIteam)=> void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user:null,
    notification:[],
    selectIteam:{
        count:0,
        total:0,
        item:[],
        selectAll:false,
    },
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false,user:null }),
    SetUser:(user:user)=> set({ user }),
    setNotification:(notification:notification[])=> set({ notification }),
    setSelectIteam:(selectIteam:selectIteam)=> set({ selectIteam }),
}));    