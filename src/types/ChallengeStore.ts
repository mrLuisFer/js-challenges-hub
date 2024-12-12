import type { Challenge } from "./Challenge";

export type ChallengeStore = {
	challenges: Challenge[];
	queryChallenges: string;
	// eslint-disable-next-line no-unused-vars
	setQueryChallenges: (query: string) => void;
	filteredChallenges: Challenge[];
	// eslint-disable-next-line no-unused-vars
	setFilteredChallenges: (filteredChallenges: Challenge[]) => void;
	// eslint-disable-next-line no-unused-vars
	filterChallengesByName: (names: string[]) => void;
	resetFilter: () => void;
};
