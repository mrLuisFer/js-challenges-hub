import { Link, useLocation } from 'react-router-dom';
import { api } from '../api.ts';
import { sanitizeText } from '../../../../utils/sanitizeText.ts';
import { useMemo } from 'react';
import Header from '../components/Header';
import { IoIosArrowRoundBack } from 'react-icons/io';
import CountryLabel from '../components/CountryLabel.tsx';
import { useNumberFormat } from '../hooks/useNumberFormat.ts';
import { AllRoutes } from '../../../../lib/enums/AllRoutes.ts';

export default function DetailView() {
	const location = useLocation();
	const countryParam = location.pathname.split('/')[2];
	const country = useMemo(() => {
		return api?.find(({ name }) => {
			const countryName = sanitizeText(name);
			return countryName.includes(countryParam) || countryName === countryParam;
		});
	}, [countryParam]);
	const population = useNumberFormat(country?.population ?? 0);
	const currencies = country?.currencies?.map((currency) => currency.name).join(', ') ?? '';
	const languages = country?.languages?.map((language) => language.name).join(', ') ?? '';

	return (
		<div>
			<Header />
			<div className="bg-[var(--rest-very-light-gray)] dark:bg-[var(--rest-very-dark-value)] min-h-screen px-4 py-7 lg:px-14">
				<Link
					to={AllRoutes.restCountries}
					className="bg-[var(--rest-white)] flex items-center gap-1 justify-center px-5 shadow-md py-1 rounded-md transform active:scale-95 transition dark:bg-[var(--rest-dark-blue)] dark:text-[var(--rest-white)] w-fit"
				>
					<IoIosArrowRoundBack size="25px" />
					<span className="text-sm">Back</span>
				</Link>
				<div className="flex flex-col sm:flex-row sm:items-start sm:justify-center md:justify-between xl:justify-around gap-7 pt-16 dark:text-[var(--rest-white)]">
					<img
						src={country?.flag}
						alt={country?.name}
						className="rounded-sm shadow-lg hover:shadow-xl transition md:max-w-80 sm:max-w-96 lg:max-w-full lg:w-[500px] xl:w-2/5"
					/>
					<div className="flex flex-col">
						<h2 className="font-bold text-xl sm:text-2xl mb-6">{country?.name}</h2>
						<div className="flex flex-col gap-7 sm:gap-0 sm:flex-row sm:justify-between">
							<div className="flex flex-col gap-2 text-sm">
								<CountryLabel label="Native Name" value={country?.nativeName} />
								<CountryLabel label="Population" value={population} />
								<CountryLabel label="Region" value={country?.region} />
								<CountryLabel label="Sub Region" value={country?.subregion} />
								<CountryLabel label="Capital" value={country?.capital} />
							</div>
							<div className="flex flex-col gap-2 text-sm">
								<CountryLabel label="Top Level Domain" value={country?.topLevelDomain} />
								<CountryLabel label="Currencies" value={currencies} />
								<CountryLabel label="Languages" value={languages} />
							</div>
						</div>
						{country?.borders ? (
							<div className="mt-8 sm:flex gap-3">
								<h2 className="font-bold mb-3 sm:text-sm sm:mb-0">Border Countries:</h2>
								<div className="flex gap-4 sm:gap-2 flex-wrap">
									{country?.borders.map((border) => (
										<div
											key={border}
											className="bg-[var(--rest-white)] dark:bg-[var(--rest-dark-blue)] shadow-sm hover:shadow-md dark:shadow-lg dark:hover:shadow-xl px-6 rounded text-sm py-1 transition sm:text-sm"
										>
											{border}
										</div>
									))}
								</div>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
