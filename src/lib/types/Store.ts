import { Challenge } from './Challenge';

export type Store = {
	challenges: Challenge[];
	queryChallenges: string;
	setQueryChallenges: (query: string) => void;
	filteredChallenges: Challenge[];
	setFilteredChallenges: (filteredChallenges: Challenge[]) => void;
};
