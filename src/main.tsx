import { Analytics } from '@vercel/analytics/react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import RouteContainer from '@/components/Global/RouteContainer.tsx';
import { routes, staticRoutes } from './constants/routes';
import './css/global.css';
import ErrorNotFound from './components/Global/ErrorNotFound';
import { Route } from './lib/types/Route';

function mapRoutes(paramRoutes: Route[], withContainer = true) {
	return paramRoutes.map((route) => {
		const routeObj: RouteObject = {
			path: route.path,
			errorElement: <ErrorNotFound />,
			element: withContainer ? (
				<RouteContainer>{route.Element}</RouteContainer>
			) : (
				<>{route.Element}</>
			),
			children: route.children ?? [],
		};
		return routeObj;
	});
}

const router = createBrowserRouter(mapRoutes(routes).concat(mapRoutes(staticRoutes, false)));

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
		<Analytics />
	</StrictMode>
);
