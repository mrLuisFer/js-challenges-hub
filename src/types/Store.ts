import type { Challenge } from "./Challenge";

export type Store = {
	challenges: Challenge[];
	queryChallenges: string;
	// eslint-disable-next-line no-unused-vars
	setQueryChallenges: (query: string) => void;
	filteredChallenges: Challenge[];
	// eslint-disable-next-line no-unused-vars
	setFilteredChallenges: (filteredChallenges: Challenge[]) => void;
};
