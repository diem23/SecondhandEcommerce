import { ArrowRight } from "@phosphor-icons/react";
import { Checkbox, Radio, Breadcrumbs, Slider } from "@material-tailwind/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

const BreadcrumbsDashboard = () => {
  return (
    <Breadcrumbs className="bg-white ml-36">
      <a href="#" className="opacity-60 flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        Trang chủ
      </a>
      <a href="#" className="opacity-60">
        <span>Thể loại</span>
      </a>
      <a href="#" style={{ color: "#2DA5F3" }}>
        Thiết bị điện tử
      </a>
    </Breadcrumbs>
  );
};

const Sidebar = () => {
  const categoriesData = [
    "Thiết bị điện tử",
    "Máy tính & Laptop",
    "Phụ kiện máy tính",
    "Điện thoại",
    "Tai nghe",
    "Phụ kiện điện thoại",
    "Tay cầm gaming",
    "Camera",
    "TV & Đồ dùng gia đình",
    "Đồng hồ",
    "GPS & Định vị",
  ];

  const priceRangesData = [
    "Tất cả",
    "Dưới 1,000,000",
    "1,000,000 tới 2,000,000",
    "2,000,000 tới 5,000,000",
    "5,000,000 tới 10,000,000",
    "10,000,000 tới 20,000,000",
    "20,000,000 trở lên",
  ];

  const [sliderValue, setSliderValue] = useState([2000000, 10000000]); // Default slider range

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <aside className="w-1/4 bg-white p-6 rounded-md ">
      {/* Category Section */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">CATEGORY</h3>
        <div className="flex flex-col space-y-2">
          {categoriesData.map((category, index) => (
            <Radio
              key={index}
              name="category"
              label={category}
              defaultChecked={index === 0}
            />
          ))}
        </div>
      </div>

      {/* Price Range Section */}
      {/*  NOT DONE YET */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">TẦM GIÁ</h3>
        <Slider
          color="orange"
          min={0}
          max={20000000}
          step={1000000}
          value={sliderValue}
          onChange={handleSliderChange}
          className="mb-4"
        />
        <div className="flex justify-between text-sm">
          <span>0 VND</span>
          <span>{sliderValue.toLocaleString()} VND</span>
        </div>
        <div className="flex flex-col mt-4 space-y-2">
          {priceRangesData.map((range, index) => (
            <Radio
              key={index}
              name="price"
              label={range}
              defaultChecked={range === "5,000,000 tới 10,000,000"}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsByPage = async () => {
      try {
        const data = {
          page: 1,
          limit: 10,
          sort: { price: -1 },
          matches: {},
        };
        const response = await getProducts(data);
        console.log(response);
        setProducts(response.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProductsByPage();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

const Dashboard = () => {
  return (
    <>
      <BreadcrumbsDashboard />
      <div className="font-sans bg-white min-h-screen flex  flex-col items-center ">
        <div className="container mx-auto flex py-6">
          <Sidebar />
          <div className="flex-1">
            <ProductGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
