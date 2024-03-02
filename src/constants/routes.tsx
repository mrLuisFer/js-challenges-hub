import App from "../App";
import { AgeCalculator, InteractiveComments, QrCard } from "../challenges";
import ErrorNotFound from "../routes/ErrorNotFound";

export type Route = {
  path: string;
  Element: JSX.Element;
};

export enum Routes {
  ageCalculator = "/age-calculator",
  interactiveComments = "/interactive-comments",
  qrCard = "/qr-card",
  root = "/",
  all = "*",
  terms = "/terms-license",
}

export const routes: Route[] = [
  {
    path: Routes.interactiveComments,
    Element: <InteractiveComments />,
  },
  {
    path: Routes.ageCalculator,
    Element: <AgeCalculator />,
  },
  {
    path: Routes.qrCard,
    Element: <QrCard />,
  },
];

export const staticRoutes: Route[] = [
  {
    path: Routes.root,
    Element: <App />,
  },
  {
    path: Routes.all,
    Element: <ErrorNotFound />,
  },
];
