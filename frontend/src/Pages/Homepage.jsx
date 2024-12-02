import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePageBody from "./HomepageBody";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderUser from "../components/HeaderUser";
import ShopPage from "./ShopPage";
import { getUserMe } from "../services/authService";
const HomePage = ({ type }) => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          const response = await getUserMe();
          const userData = response.data;
          localStorage.setItem("user", userData);
          setRole(response.data.role);
        }
      } catch (error) {
        console.error("Error fetching user role", error);
      }
    };
    fetchData();
  }, [navigate, role]);
  return (
    <>
      {role === "user" ? (
        <div>
          <HeaderUser />
        </div>
      ) : (
        <div>
          <Header />
        </div>
      )}
      {type === "homepage" ? (
        <HomePageBody />
      ) : type === "dashboard" ? (
        <ShopPage />
      ) : (
        <div>
          <h1>Not found</h1>
        </div>
      )}
      <Footer />
    </>
  );
};
export default HomePage;
