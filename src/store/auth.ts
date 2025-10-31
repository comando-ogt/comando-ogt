import type { Session, User } from "@supabase/supabase-js";

import { create } from "zustand";

interface Profile {
  discord_username: string;
  hll_username: string;
  membership_status: string;
  web_role: string;
  avatar_url: string;
  rank: string;
  division: string;
  quote: string;
  bio: string;
  member_url: string;
}

interface AuthStore {
  session: Session | null;
  user: User | null;
  profile: Profile | null;
  isLoading: boolean;

  setSession: (session: Session | null) => void;
  setUser: (user: User | null) => void;
  setProfile: (profile: Profile | null) => void;
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
