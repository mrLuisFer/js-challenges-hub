import { create } from "zustand";
import { Challenge } from "../../components/ChallengeCard";
import { challengesInitialState } from "./challenges";

type Store = {
  challenges: Challenge[];
  challengesQuery: string;
  setQueryChallenges: (query: string) => void;
};

export const useChallengesStore = create<Store>()((set) => ({
  challenges: challengesInitialState,
  challengesQuery: "",
  setQueryChallenges: (query) => {
    set(() => ({ challengesQuery: query }));
  },
}));
