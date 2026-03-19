import { create } from "zustand";
import type { ListViewDataProps } from "../appShell/compilance/ListView";
import type { Notification } from "../data/notifiacation";

interface user{
    name: string;
    email: string;
    password: string;
    role: string;
}
interface selectIteam{
    count:number;
    total:number;
    item:ListViewDataProps[]
    selectAll: boolean;
    
}
interface selectNotification{
    notification:Notification[]|null;
}

interface AuthState {
    isAuthenticated: boolean;
    user:user|null;
    notification:selectNotification
    selectIteam:selectIteam;
    login: () => void;  
    logout: () => void;
    SetUser:(user:user)=> void;  
    setNotification:(notification:Notification[])=> void;
    setSelectIteam:(selectIteam:selectIteam)=> void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user:null,
    notification:{notification:null},
    selectIteam:{
        count:0,
        total:0,
        item:[],
        selectAll:false,
    },
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false,user:null }),
    SetUser:(user:user)=> set({ user }),
    setNotification:(notification:Notification[])=> set({ notification: { notification } }),
    setSelectIteam:(selectIteam:selectIteam)=> set({ selectIteam }),
}));    