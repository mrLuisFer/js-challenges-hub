import App from '../App';
import { AgeCalculator, InteractiveComments, QrCard, RestCountriesApi } from '../challenges';
import IpAddressTracker from '../challenges/ip-address-tracker';
import DetailView from '../challenges/rest-countries-api/detail';
import { AllRoutes } from '../lib/enums/AllRoutes';
import { Route } from '../lib/types/Route';
import ErrorNotFound from '../components/Global/ErrorNotFound';

export const routes: Route[] = [
	{
		path: AllRoutes.interactiveComments,
		Element: <InteractiveComments />,
	},
	{
		path: AllRoutes.ageCalculator,
		Element: <AgeCalculator />,
	},
	{
		path: AllRoutes.qrCard,
		Element: <QrCard />,
	},
	{ path: AllRoutes.ipAddress, Element: <IpAddressTracker /> },
	{
		path: AllRoutes.restCountries,
		Element: <RestCountriesApi />,
	},
	{
		path: `${AllRoutes.restCountries}/:country`,
		Element: <DetailView />,
	},
];

export const staticRoutes: Route[] = [
	{
		path: AllRoutes.root,
		Element: <App />,
	},
	{
		path: AllRoutes.all,
		Element: <ErrorNotFound />,
	},
];
