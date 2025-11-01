import type { Session, User } from "@supabase/supabase-js";

import type { DBProfile } from "../utils/profile";
import { create } from "zustand";

interface AuthStore {
  session: Session | null;
  user: User | null;
  profile: DBProfile | null;
  isLoading: boolean;

  setSession: (session: Session | null) => void;
  setUser: (user: User | null) => void;
  setProfile: (profile: DBProfile | null) => void;
  setIsLoading: (loading: boolean) => void;
  clear: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  session: null,
  user: null,
  profile: null,
  isLoading: true,

  setSession: (session) => set({ session }),
  setUser: (user) => set({ user }),
  setProfile: (profile) => set({ profile }),
  setIsLoading: (isLoading) => set({ isLoading }),
  clear: () => set({ session: null, user: null, isLoading: true }),
}));
