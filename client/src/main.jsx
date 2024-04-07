import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

import { GlobalStyles } from "./Global.styles";

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
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
