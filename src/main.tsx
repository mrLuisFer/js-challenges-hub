import React from "react";
import ReactDOM from "react-dom/client";
import { CommentsProvider } from "./challenges/interactive-comments/context/CommentsContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InteractiveComments } from "./challenges";
import "./css/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/interactive-comments",
    element: <InteractiveComments />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CommentsProvider>
      <RouterProvider router={router} />
    </CommentsProvider>
  </React.StrictMode>
);
