import { create } from 'zustand';
import { challengesInitialState } from '../../constants/challenges';
import { Store } from '../types/Store';

export const useChallengesStore = create<Store>()((set) => ({
	challenges: challengesInitialState,
	challengesQuery: '',
	setQueryChallenges: (query) => {
		set(() => ({ challengesQuery: query }));
	},
	filteredChallenges: challengesInitialState,
	setFilteredChallenges: (filteredChallenges) => {
		set(() => ({ filteredChallenges }));
	},
}));
