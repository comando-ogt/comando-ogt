import type { Member } from "../types/members";
import { create } from "zustand";

interface MembersStore {
  members: Member[];
  isLoading: boolean;

  setMembers: (members: Member[]) => void;
  setIsLoading: (loading: boolean) => void;

  getRandomMembers: (count: number) => Member[];
}

export const useMembersStore = create<MembersStore>((set, get) => ({
  members: [],
  isLoading: true,

  setMembers: (members) => set({ members }),
  setIsLoading: (isLoading) => set({ isLoading }),

  getRandomMembers: (count: number) => {
    const { members } = get();

    if (members.length === 0) return [];

    const shuffled = [...members].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, count);
  },
}));
