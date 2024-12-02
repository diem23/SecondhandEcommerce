import React from "react";
import { Package, Trophy, CreditCard, Headphones } from "@phosphor-icons/react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { Typography, Carousel } from "@material-tailwind/react";
// import { ProductViewDialog } from "../components/ProductViewDialog";
const tempItem = [
  {
    name: "Máy tính & Laptop",
    image: "https://via.placeholder.com/150",
  },
  { name: "Điện thoại", image: "https://via.placeholder.com/150" },
  { name: "Tai nghe", image: "https://via.placeholder.com/150" },
  { name: "Phụ kiện", image: "https://via.placeholder.com/150" },
  { name: "Camera", image: "https://via.placeholder.com/150" },
  { name: "TV", image: "https://via.placeholder.com/150" },
];
const listItem = () => {
  return (
    <div className="relative mx-auto w-[90vw] p-8">
      <Typography
        variant="h1"
        className="text-2xl text-[#1B6392] font-semibold text-center mb-6"
      >
        Mua sắm theo thể loại
      </Typography>
      <Carousel
        loop
        className="overflow-hidden h-[220px]"
        transition={{ duration: 1 }}
        navigation={false}
        prevArrow={({ handlePrev }) => (
          <button
            className="absolute -left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-[#FA8232] p-3 text-white  transition-colors duration-300 hover:bg-gray-300 hover:text-gray-800"
            onClick={handlePrev}
          >
            <ArrowLeft weight="fill" />
          </button>
        )}
        nextArrow={({ handleNext }) => (
          <button
            className="absolute -right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-[#FA8232] p-3 text-white transition-colors duration-300 hover:bg-gray-300 hover:text-gray-800"
            onClick={handleNext}
          >
            <ArrowRight weight="fill" />
          </button>
        )}
      >
        {tempItem.map((_, index) => {
          if (index % 6 === 0) {
            return (
              <div key={index} className="flex justify-center gap-10">
                {tempItem.slice(index, index + 6).map((item, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex flex-col items-center rounded-lg bg-white p-4 px-4 border transition-shadow duration-300 hover:shadow-lg  hover:scale-105"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-32 w-36 rounded-md object-cover transition-transform duration-200 hover:scale-105"
                    />
                    <p className="mt-4 text-center text-sm font-semibold text-gray-700">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            );
          }
          return null;
        })}
      </Carousel>
    </div>
  );
};

const HomePageBody = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div className="font-sans bg-white ">
      {/* Header Section */}
      <div className="bg-white p-4 flex justify-around items-center">
        <div className="flex border p-4 items-center ">
          <div className="flex flex-row items-left gap-3 border-r-2 pr-10">
            <Package size={36} />
            <div className="flex flex-col items-left">
              {/* <Button variant="filled"> Button</Button> */}
              <p className="text-sm">GIAO HÀNG NHANH</p>
              <p className="text-xs">Giao hàng trong vòng 24h</p>
            </div>
          </div>
          <div className="flex flex-row items-left gap-3 pl-10 border-r-2 pr-10">
            <Trophy size={36} />
            <div className="flex flex-col items-left">
              <p className="text-sm">CHÍNH SÁCH HOÀN TIỀN</p>
              <p className="text-xs">100% tiền được hoàn lại</p>
            </div>
          </div>
          <div className="flex flex-row items-left gap-3 pl-10 border-r-2 pr-10 ">
            <CreditCard size={36} />
            <div className="flex flex-col items-left">
              <p className="text-sm">GIAO DỊCH AN TOÀN</p>
              <p className="text-xs">Tiền của bạn luôn an toàn</p>
            </div>
          </div>
          <div className="flex flex-row items-left gap-3 pl-10 ">
            <Headphones size={36} />
            <div className="flex flex-col items-left">
              <p className="text-sm">HỖ TRỢ 24/7</p>
              <p className="text-xs">Nhắn tin, liên lạc trực tiếp</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      {listItem()}

      {/* Products Section */}
      <div className=" flex justify-center p-8 bg-white shadow ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">🔥 BÁN CHẠY NHẤT</h3>
            <ul className="space-y-4 max-w-72">
              {[
                {
                  name: "Samsung Galaxy S21 5G",
                  price: "1,500,000 VNĐ",
                  image: "https://via.placeholder.com/150",
                },
                {
                  name: "Galaxy 12 Mini Gaming Phone",
                  price: "1,500,000 VNĐ",
                  image: "https://via.placeholder.com/150",
                },
                {
                  name: "Sony DSCHX8 Camera",
                  price: "1,500,000 VNĐ",
                  image: "https://via.placeholder.com/150",
                },
              ].map((product) => (
                <li
                  key={product.name}
                  className="flex items-center space-x-4 border p-3"
                  onClick={handleOpen}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded"
                  />
                  <div>
                    <p className="text-sm font-medium break-words">
                      {product.name}
                    </p>
                    <p className="text-sm text-blue-600">{product.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">🌟 SẢN PHẨM MỚI</h3>
            <ul className="space-y-4 max-w-72">
              {[
                {
                  name: "TOZO T6 Wireless Earbuds",
                  price: "1,500,000 VNĐ",
                  image: "https://via.placeholder.com/150",
                },
                {
                  name: "JBL Flip 4 Speaker",
                  price: "1,500,000 VNĐ",
                  image: "https://via.placeholder.com/150",
                },
                {
                  name: "Wyze Cam Pan v2",
                  price: "1,500,000 VNĐ",
                  image: "https://via.placeholder.com/150",
                },
              ].map((product) => (
                <li
                  key={product.name}
                  className="flex items-center space-x-4 border p-3"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded"
                  />
                  <div>
                    <p className="text-sm font-medium break-words">
                      {product.name}
                    </p>
                    <p className="text-sm text-blue-600">{product.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBody;
