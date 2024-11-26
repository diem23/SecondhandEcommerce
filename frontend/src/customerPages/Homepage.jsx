import { Package, Trophy, CreditCard, Headphones } from "@phosphor-icons/react";
import { Button } from "@material-tailwind/react";

const HomePage = () => {
  return (
    <div className="font-sans bg-white ">
      {/* Header Section */}
      <div className="bg-white shadow p-4 flex justify-around items-center">
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
      <div className="p-8 bg-white">
        <h1 className="text-2xl text-[#1B6392] font-semibold text-center mb-6">
          Mua sắm theo thể loại
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[
            {
              name: "Máy tính & Laptop",
              image: "https://via.placeholder.com/150",
            },
            { name: "Điện thoại", image: "https://via.placeholder.com/150" },
            { name: "Tai nghe", image: "https://via.placeholder.com/150" },
            { name: "Phụ kiện", image: "https://via.placeholder.com/150" },
            { name: "Camera", image: "https://via.placeholder.com/150" },
            { name: "TV", image: "https://via.placeholder.com/150" },
          ].map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center bg-white shadow p-4 rounded"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16"
              />
              <p className="mt-4 text-sm font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className=" flex justify-center p-8 bg-white shadow ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">🔥 BÁN CHẠY NHẤT</h3>
            <ul className="space-y-4">
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
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-sm text-blue-600">{product.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">🌟 SẢN PHẨM MỚI</h3>
            <ul className="space-y-4">
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
                    <p className="text-sm font-medium">{product.name}</p>
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

export default HomePage;
