import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { CommentsProvider } from "./challenges/interactive-comments/context/CommentsContext.tsx";
import RouteContainer from "./components/Dashboard/RouteContainer.tsx";
import "./css/global.css";
import { Route, routes, staticRoutes } from "./constants/routes.tsx";
import ErrorNotFound from "./routes/ErrorNotFound.tsx";

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
    };
    return routeObj;
  });
}

const router = createBrowserRouter(
  mapRoutes(routes).concat(mapRoutes(staticRoutes, false))
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CommentsProvider>
      <RouterProvider router={router} />
    </CommentsProvider>
    <Analytics />
  </StrictMode>
);
