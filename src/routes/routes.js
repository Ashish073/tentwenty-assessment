import { lazy } from "react";

import { rootConfig } from "./routeConfig";

const LandingPage = lazy(() => import("../container/LandingPage"));
const NotFound = lazy(() => import("../container/NotFound"));

export const routes = [
  {
    path: rootConfig.home.path,
    element: LandingPage,
    title: rootConfig.home.title,
    slug: rootConfig.home.slug,
  },
  {
    path: rootConfig.notFound.path,
    element: NotFound,
    title: rootConfig.notFound.title,
  },
];
