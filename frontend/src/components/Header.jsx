import {
  TwitterLogo,
  FacebookLogo,
  PinterestLogo,
  RedditLogo,
  YoutubeLogo,
  InstagramLogo,
  ShoppingCartSimple,
  Heart,
  User,
  MagnifyingGlass,
  Stack,
  MapPinLine,
  Headphones,
  Info,
  PhoneCall,
  ArrowRight,
} from "@phosphor-icons/react";
import FlyoutMenu from "./flyoutmenus";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import CartDetail from "./CartDetail";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { login } from "../services/authService";

const LoginButton = () => {
  const [stateValue, setStateValue] = useState({});
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await login(stateValue);
      const accessToken = response.data.access_token;
      localStorage.setItem("accessToken", accessToken);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = async () => {
    try {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Popover placement="bottom-start">
      <PopoverHandler>
        <div className="hover:text-gray-300">
          <User size={30} />
        </div>
      </PopoverHandler>
      <PopoverContent className="w-96">
        <Card color="transparent" shadow={false} className="items-center">
          <Typography variant="h4" color="blue-gray">
            Đăng nhập
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Email
              </Typography>
              <Input
                size="lg"
                value={stateValue.email}
                onChange={(e) =>
                  setStateValue({ ...stateValue, email: e.target.value })
                }
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="flex justify-between items-center">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Mật khẩu
                </Typography>
                <Typography variant="h6" color="blue" className="-mb-3 text-sm">
                  Quên mật khẩu?
                </Typography>
              </div>
              <Input
                type="password"
                size="lg"
                value={stateValue.password}
                onChange={(e) =>
                  setStateValue({ ...stateValue, password: e.target.value })
                }
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <Button
              className="mt-6 flex items-center justify-center gap-3 bg-[#FA8232]"
              fullWidth
              onClick={handleLogin}
            >
              Đăng nhập
              <ArrowRight size={17} />
            </Button>
            <div className="flex items-center mt-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">Chưa có tài khoản?</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <Button
              className="mt-2 flex items-center justify-center gap-3 "
              fullWidth
              variant="outlined"
              style={{ borderColor: "#FA8232", color: "#FA8232" }}
              onClick={() => navigate("/register")}
            >
              Tạo tài khoản
            </Button>
          </form>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

const ShoppingCartButton = () => {
  const navigate = useNavigate();
  return (
    <Popover placement="bottom-end">
      <PopoverHandler>
        <div className="hover:text-gray-300">
          <div className="relative">
            <ShoppingCartSimple size={30} />
          </div>
        </div>
      </PopoverHandler>
      <PopoverContent>
        <Card color="transparent" shadow={false} className="items-center">
          <div className="flex items-center mt-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">
              Hãy đăng nhập để thêm sản phẩm vào giỏ hàng!
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <Button
            className="mt-6 flex items-center justify-center gap-3 bg-[#FA8232]"
            fullWidth
            onClick={() => navigate("/register")}
          >
            Đăng nhập
            <ArrowRight size={17} />
          </Button>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-[#1B6392] text-white">
      {/* Top Bar */}
      <div className="bg-[#1B6392] pt-2">
        <div className="container mx-auto px-16 flex justify-between items-center text-sm">
          <span>Chào mừng đến với VNU2Hand</span>
          <div className="flex justify-between items-center  space-x-4">
            <span>Theo dõi chúng tôi: </span>
            <a href="#" className="hover:text-gray-300">
              <TwitterLogo weight="fill" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FacebookLogo weight="fill" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <PinterestLogo weight="fill" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <RedditLogo weight="fill" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <YoutubeLogo weight="fill" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <InstagramLogo weight="fill" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex flex-row justify-between items-center space-x-2"
          onClick={() => navigate("/")}
        >
          <img src="/logo.png" alt="VNU2Hand" className="h-12" />
          <div className="text-2xl font-bold">VNU2HAND</div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm mặt hàng..."
              className="w-full py-2 pl-4 pr-10  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black">
              <MagnifyingGlass size={21} />
            </div>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex space-x-6 items-center">
          <ShoppingCartButton itemCount={0} />
          <a href="#" className="hover:text-gray-300">
            <Heart size={30} />
          </a>
          <LoginButton />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white text-gray-600">
        <div className="container mx-auto px-16 py-2 flex justify-between items-center text-base">
          <FlyoutMenu />

          <div className="flex space-x-6">
            <button className="flex flex-row space-x-2 justify-between items-center px-4 py-2 text-black ">
              <Stack size={21} />
              <span>Dashboard</span>
            </button>
            <button className="flex flex-row space-x-2 justify-between items-center px-4 py-2 text-black ">
              <MapPinLine size={21} />
              <span> Theo dõi đơn hàng</span>
            </button>
            <button className="flex flex-row space-x-2 justify-between items-center px-4 py-2 text-black ">
              <User size={21} />
              <span> Thông tin tài khoản</span>
            </button>
            <button className="flex flex-row space-x-2 justify-between items-center px-4 py-2 text-black ">
              <Headphones size={21} />
              <span> CSKH</span>
            </button>
            <button className="flex flex-row space-x-2 justify-between items-center px-4 py-2 text-black ">
              <Info size={21} />
              <span> Về chúng tôi</span>
            </button>
          </div>

          <div className="flex space-x-6">
            <button className="flex flex-row space-x-2 justify-between items-center px-4 py-2 text-black ">
              <PhoneCall size={21} />
              <span> 01234567890</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
