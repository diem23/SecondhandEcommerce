import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import {
  Stack,
  Storefront,
  MapPinLine,
  ShoppingCartSimple,
  Heart,
  Notebook,
  ClockClockwise,
  Gear,
  SignOut,
} from "@phosphor-icons/react";

const Dashboard = () => {
  const data = [
    {
      label: "Dashboard",
      value: "dashboard",
      icon: Stack,
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Lịch sử giao dịch",
      value: "billhistory",
      icon: Storefront,
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Theo dõi đơn hàng",
      value: "trackingdelivery",
      icon: MapPinLine,
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Giỏ hàng",
      value: "cart",
      icon: ShoppingCartSimple,
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Sản phẩm ưa thích",
      value: "favorite",
      icon: Heart,
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Thông tin cá nhân",
      value: "profile",
      icon: Notebook,
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Lịch sử tìm kiếm",
      value: "searchhistory",
      icon: ClockClockwise,
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Settings",
      value: "settings",
      icon: Gear,
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Đăng xuất",
      value: "logout",
      icon: SignOut,
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <div className="p-6">
      <Tabs value="dashboard" orientation="vertical">
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 w-56 place-items-start"
          indicatorProps={{
            className: "bg-orange text-white shadow-none rounded-md",
          }}
        >
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value} className="justify-start flex ">
              <div className="flex flex-row items-start gap-2 ">
                <Typography
                  className="text-black flex items-center gap-2"
                  indicatorProps={{
                    className: "bg-orange text-black shadow-none rounded-none",
                  }}
                >
                  {React.createElement(icon, { className: "w-5 h-5" })}
                  {label}
                </Typography>
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="h-screen">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="py-0">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};
export default Dashboard;
