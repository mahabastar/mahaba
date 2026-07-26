import { QueryClient } from "@tanstack/react-query";
import { createRouter, DefaultGlobalNotFound, ErrorComponent } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: ErrorComponent,
    defaultNotFoundComponent: DefaultGlobalNotFound,
  });

  return router;
};
