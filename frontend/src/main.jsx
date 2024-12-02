import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./Pages/Homepage.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage.jsx";
import Dashboard from "./Pages/Dashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<App />}>
        <Route index={true} element={<HomePage type={"homepage"} />} />
        <Route path="/dashboard" element={<HomePage type={"dashboard"} />} />
        <Route
          path="/trackingdelivery"
          element={<HomePage type={"trackingdelivery"} />}
        />
        <Route
          path="/accountdetail"
          element={<HomePage type={"accountdetail"} />}
        />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
