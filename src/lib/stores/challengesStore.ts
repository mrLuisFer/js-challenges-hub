import { create } from "zustand";
import { Challenge } from "../../components/Dashboard/ChallengeCard";
import { challengesInitialState } from "../../constants/challenges";

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
