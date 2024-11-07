import DetailView from '@/views/Challenges/rest-countries-api/detail';
import { AllRoutes } from '../lib/enums/AllRoutes';
import { Route } from '../lib/types/Route';
import ErrorNotFound from '../components/Global/ErrorNotFound';
import WelcomePage from '@/views/WelcomePage';
import Challenges from '@/views/Challenges';
import InteractiveComments from '@/views/Challenges/interactive-comments';
import AgeCalculator from '@/views/Challenges/age-calculator';
import QrCard from '@/views/Challenges/qr-card';
import IpAddressTracker from '@/views/Challenges/ip-address-tracker';
import RestCountriesApi from '@/views/Challenges/rest-countries-api';

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
		Element: <WelcomePage />,
	},
	{
		path: AllRoutes.challenges,
		Element: <Challenges />,
	},
	{
		path: AllRoutes.all,
		Element: <ErrorNotFound />,
	},
];
