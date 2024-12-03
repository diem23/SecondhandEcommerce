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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<App />}>
        <Route index={true} element={<HomePage type={"homepage"} />} />
        <Route path="/ShopPage" element={<HomePage type={"ShopPage"} />} />
        <Route
          path="/trackingdelivery"
          element={<HomePage type={"trackingdelivery"} />}
        />
        <Route
          path="/accountdetail"
          element={<HomePage type={"accountdetail"} />}
        />
        <Route
          path="/productdetail/:productId"
          element={<HomePage type={"productdetail"} />}
        />
        <Route path="/dashboard" element={<HomePage type={"dashboard"} />} />
        <Route
          path="/createorder"
          element={<HomePage type={"createorder"} />}
        />
        <Route
          path="/shoppingcart"
          element={<HomePage type={"shoppingcart"} />}
        />
        <Route path="/checkout" element={<HomePage type={"checkout"} />} />
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
