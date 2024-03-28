import React from "react";
import ReactDOM from "react-dom/client";
import TagsBrowser from "./TagsBrowser.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TagsBrowser />
    </QueryClientProvider>
  </React.StrictMode>,
);
