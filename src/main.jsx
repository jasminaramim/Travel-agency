import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";
import router from '../src/Routes/Router.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer position="top-right" autoClose={3000} />
      </QueryClientProvider>
 
  </StrictMode>
);