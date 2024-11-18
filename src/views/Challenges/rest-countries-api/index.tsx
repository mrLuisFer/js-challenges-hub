import { useEffect } from 'react';
import Countries from './components/Countries';
import Header from './components/Header';
import RegionFilter from './components/RegionFilter';
import Searchbox from './components/Searchbox';
import { api } from './api.ts';
import { useCountriesStore } from './context/useCountriesStore.ts';

export default function RestCountriesApi() {
	const { setCountries } = useCountriesStore();

	useEffect(() => {
		setCountries(api);
	}, [setCountries]);


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
