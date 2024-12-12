import { challengesInitialState } from "@/constants/challenges";
import type { Store } from "@/types/Store";
import { create } from "zustand";

export const useChallengesStore = create<Store>()((set) => ({
	challenges: challengesInitialState,
	queryChallenges: "",
	setQueryChallenges: (query) => {
		set(() => ({ queryChallenges: query }));
	},
	filteredChallenges: challengesInitialState,
	setFilteredChallenges: (filteredChallenges) => {
		set(() => ({ filteredChallenges }));
	},
}));
