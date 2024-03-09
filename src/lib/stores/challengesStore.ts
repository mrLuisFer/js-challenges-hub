import { create } from 'zustand';
import { challengesInitialState } from '../../constants/challenges';
import { Store } from '../types/Store';

export const useChallengesStore = create<Store>()((set) => ({
	challenges: challengesInitialState,
	queryChallenges: '',
	setQueryChallenges: (query) => {
		set(() => ({ queryChallenges: query }));
	},
	filteredChallenges: challengesInitialState,
	setFilteredChallenges: (filteredChallenges) => {
		set(() => ({ filteredChallenges }));
	},
}));
