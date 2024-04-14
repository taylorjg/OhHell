import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  responsiveFontSizes,
} from "@mui/material";
import { Global } from "@emotion/react";

import { Layout } from "@app/components";
import { Paths } from "@app/constants";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  HomePage,
  CohortPage,
  ConfigPage,
  GamesPage,
  GamePage,
  NotFoundPage,
} from "@app/pages";

import { GlobalStyles } from "./Global.styles";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: Paths.Home,
        element: <HomePage />,
      },
      {
        path: Paths.NewCohort,
        element: <CohortPage />,
      },
      {
        path: Paths.EditCohort,
        element: <CohortPage />,
      },
      {
        path: Paths.Games,
        element: <GamesPage />,
      },
      {
        path: Paths.NewGame,
        element: <GamePage />,
      },
      {
        path: Paths.EditGame,
        element: <GamePage />,
      },
      {
        path: Paths.Config,
        element: <ConfigPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
    },
  })
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
