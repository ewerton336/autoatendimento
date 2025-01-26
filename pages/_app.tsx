import React from "react";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SnackbarNotifier from "@/components/snackbar-notifier/SnackbarNotifier";
//import "@/styles/globals.css";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarNotifier />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
