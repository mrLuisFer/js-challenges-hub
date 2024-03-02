import App from "../App";
import { AgeCalculator, InteractiveComments, QrCard } from "../challenges";

export type Route = {
  path: string;
  Element: JSX.Element;
};

export const routes: Route[] = [
  {
    path: "/interactive-comments",
    Element: <InteractiveComments />,
  },
  {
    path: "/age-calculator",
    Element: <AgeCalculator />,
  },
  {
    path: "/qr-card",
    Element: <QrCard />,
  },
];

export const staticRoutes: Route[] = [
  {
    path: "/",
    Element: <App />,
  },
];
