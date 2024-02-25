import React, { PropsWithChildren } from "react";
import ReactDOM from "react-dom/client";
import { CommentsProvider } from "./challenges/interactive-comments/context/CommentsContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AgeCalculator, InteractiveComments } from "./challenges";
import "./css/global.css";
import App from "./App.tsx";
import Header from "./components/Global/Header/index.tsx";

const ChallengeContaier = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/interactive-comments",
    element: (
      <ChallengeContaier>
        <InteractiveComments />
      </ChallengeContaier>
    ),
  },
  {
    path: "/age-calculator",
    element: (
      <ChallengeContaier>
        <AgeCalculator />
      </ChallengeContaier>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CommentsProvider>
      <RouterProvider router={router} />
    </CommentsProvider>
  </React.StrictMode>
);
