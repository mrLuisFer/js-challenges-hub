import { create } from 'zustand';
import { Countries } from '../types/Api';

interface ThemeStore {
	countries: Countries | undefined;
	setCountries: (newCountries: Countries) => void;
	regionSelected: string | undefined;
	setRegionSelected: (newRegion: string | undefined) => void;
	countrySearch: string | undefined;
	setCountrySearch: (newValue: string | undefined) => void;
}

export const useCountriesStore = create<ThemeStore>((set) => ({
	countries: [],
	setCountries: (newCountries) => {
		set(() => ({ countries: newCountries }));
	},
	regionSelected: '',
	setRegionSelected: (newRegion) => {
		set(() => ({ regionSelected: newRegion }));
	},
	countrySearch: '',
	setCountrySearch: (newValue) => {
		set(() => ({ countrySearch: newValue }));
	},
}));
