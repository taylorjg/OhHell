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

import { App } from "./App.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  CohortPage,
  ConfigPage,
  GamesPage,
  GamePage,
  NotFoundPage,
} from "@app/pages";

import { GlobalStyles } from "./Global.styles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cohorts/new",
    element: <CohortPage />,
  },
  {
    path: "/cohorts/:cohortId",
    element: <CohortPage />,
  },
  {
    path: "/cohorts/:cohortId/games",
    element: <GamesPage />,
  },
  {
    path: "/cohorts/:cohortId/games/new",
    element: <GamePage />,
  },
  {
    path: "/cohorts/:cohortId/games/:gameId",
    element: <GamePage />,
  },
  {
    path: "/config",
    element: <ConfigPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
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
