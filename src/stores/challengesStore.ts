import { challengesInitialState } from "@/constants/challenges";
import type { ChallengeStore } from "@/types/ChallengeStore.ts";
import { create } from "zustand";

export const useChallengesStore = create<ChallengeStore>()((set) => ({
	challenges: challengesInitialState,
	queryChallenges: "",
	setQueryChallenges: (query) => {
		set(() => ({ queryChallenges: query }));
	},
	filteredChallenges: challengesInitialState,
	setFilteredChallenges: (filteredChallenges) => {
		set(() => ({ filteredChallenges }));
	},
	filterChallengesByName: (names: string[]) => {
		set((state) => {
			const filteredChallenges = state.challenges.filter((challenge) =>
				names.every((name) => challenge.tags.includes(name))
			);
			console.log({ state, filteredChallenges });
			return { filteredChallenges };
		});
	},
	resetFilter: () => {
		set(() => ({ filteredChallenges: challengesInitialState }));
	},
}));
