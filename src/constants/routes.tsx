import App from '../App';
import { AgeCalculator, InteractiveComments, QrCard } from '../challenges';
import IpAddressTracker from '../challenges/ip-address-tracker';
import { AllRoutes } from '../lib/enums/AllRoutes';
import { Route } from '../lib/types/Route';
import ErrorNotFound from '../routes/ErrorNotFound';

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
