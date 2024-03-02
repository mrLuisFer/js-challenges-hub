import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CommentsProvider } from "./challenges/interactive-comments/context/CommentsContext.tsx";
import RouteContainer from "./components/Dashboard/RouteContainer.tsx";
import "./css/global.css";
import { Route, routes, staticRoutes } from "./constants/routes.tsx";

function mapRoutes(paramRoutes: Route[], withContainer = true) {
  return paramRoutes.map((route) => {
    return {
      path: route.path,
      element: withContainer ? (
        <RouteContainer>{route.Element}</RouteContainer>
      ) : (
        <>{route.Element}</>
      ),
    };
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
