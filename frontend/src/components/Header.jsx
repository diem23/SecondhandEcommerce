import {
  TwitterLogo,
  FacebookLogo,
  PinterestLogo,
  RedditLogo,
  YoutubeLogo,
  InstagramLogo,
  ShoppingCart,
  Heart,
  User,
  MagnifyingGlass,
  Stack,
  MapPinLine,
  Headphones,
  Info,
  PhoneCall,
} from "@phosphor-icons/react";
import FlyoutMenu from "./flyoutmenus";

const Header = () => {
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
        <div className="flex flex-row justify-between items-center space-x-2">
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
          <a href="#" className="hover:text-gray-300">
            <ShoppingCart size={30} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <Heart size={30} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <User size={30} />
          </a>
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
