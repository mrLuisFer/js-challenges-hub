import { useEffect } from 'react';
import Countries from './components/Countries';
import Header from './components/Header';
import RegionFilter from './components/RegionFilter';
import Searchbox from './components/Searchbox';
import './styles.css';
import { useThemeStore } from './context/useThemeStore';
import { Theme, ThemeKeys } from './enums/Theme';
import { api } from './api';
import { useCountriesStore } from './context/useCountriesStore';

export default function RestCount() {
	const { theme, setLight, setTheme } = useThemeStore();
	const localTheme = localStorage.getItem(Theme.key);
	const { setCountries } = useCountriesStore();

	useEffect(() => {
		setCountries(api);
	}, [setCountries]);

	useEffect(() => {
		if (!localTheme) setLight();
		else setTheme(localTheme as ThemeKeys);
	}, [theme, setLight, setTheme, localTheme]);

	return (
		<section>
			<Header />
			<main className="bg-[var(--rest-very-light-gray)] dark:bg-[var(--rest-very-dark-value)] px-4 py-7 min-h-screen md:px-0">
				<div className="flex flex-col gap-7">
					<div className="flex flex-col gap-6 sm:flex-row md:px-14 md:justify-between">
						<Searchbox />
						<RegionFilter />
					</div>
					<Countries />
				</div>
			</main>
		</section>
	);
}
