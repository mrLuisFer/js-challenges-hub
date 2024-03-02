import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { AgeCalculator, InteractiveComments } from "./challenges";
import { CommentsProvider } from "./challenges/interactive-comments/context/CommentsContext.tsx";
import RouteContainer from "./components/RouteContainer.tsx";
import "./css/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/interactive-comments",
    element: (
      <RouteContainer>
        <InteractiveComments />
      </RouteContainer>
    ),
  },
  {
    path: "/age-calculator",
    element: (
      <RouteContainer>
        <AgeCalculator />
      </RouteContainer>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CommentsProvider>
      <RouterProvider router={router} />
    </CommentsProvider>
    <Analytics />
  </StrictMode>
);
