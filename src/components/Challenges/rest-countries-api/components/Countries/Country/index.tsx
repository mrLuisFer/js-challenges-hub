import { Link } from "react-router-dom";
import type { Country as CountryType } from "../../../types/Api.js";
import CountryLabel from "../../CountryLabel.js";
import { sanitizeText } from "../../../../../../utils/sanitizeText.ts";
import { useNumberFormat } from "../../../hooks/useNumberFormat.js";
import { AllRoutes } from "@/enums/AllRoutes.ts";

export default function Country({ country }: { country: CountryType }) {
	const sanitizedName = sanitizeText(country.name);
	const countryPopulation = useNumberFormat(country.population);

	return (
		<Link to={`${AllRoutes.restCountries}/${sanitizedName}`}>
			<div className="w-72 mx-auto transition shadow-md hover:shadow-lg rounded-lg dark:border dark:border-transparent dark:hover:border-[var(--rest-very-dark-blue)]">
				<img
					src={country.flag}
					alt={`${country.name} flag`}
					title={`${country.name} flag`}
					className="rounded-t-md border border-gray-100 dark:border-[var(--rest-dark-blue)]"
				/>
				<div className="bg-[var(--rest-white)] dark:bg-[var(--rest-dark-blue)] p-6 rounded-b-lg flex flex-col gap-2 border border-gray-50 dark:border-[var(--rest-dark-blue)] dark:text-[var(--rest-white)] transition">
					<h3 className="font-bold text-lg">{country.name}</h3>
					<div>
						<CountryLabel label="Population" value={countryPopulation} />
						<CountryLabel label="Region" value={country.region} />
						<CountryLabel label="Capital" value={country.capital} />
					</div>
				</div>
			</div>
		</Link>
	);
}
