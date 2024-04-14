import { matchPath, useLocation } from "react-router-dom";

import { Paths, PageTitles } from "@app/constants";

const DEFAULT_TITLE = "Not Found";

export const useRouteMatch = () => {
  const { pathname } = useLocation();
  const patterns = Object.values(Paths);

  const tryToMatchRoute = () => {
    for (const pattern of patterns) {
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch) {
        return possibleMatch;
      }
    }
  };

  const routeMatch = tryToMatchRoute();
  const path = routeMatch?.pattern?.path;
  const title = PageTitles[path] ?? DEFAULT_TITLE;

  return { routeMatch, path, title };
};
