import { create } from "zustand";

interface user{
    name: string;
    email: string;
    password: string;
    role: string;
}
interface AuthState {
    isAuthenticated: boolean;
    user:user|null;
    login: () => void;  
    logout: () => void;
    SetUser:(user:user)=> void;  
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user:null,
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false,user:null }),
    SetUser:(user:user)=> set({ user }),
}));    