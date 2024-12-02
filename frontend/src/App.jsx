import Header from "./components/Header";
import HomePage from "./Pages/Homepage";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <>
      <Outlet />
    </>
  );
}
