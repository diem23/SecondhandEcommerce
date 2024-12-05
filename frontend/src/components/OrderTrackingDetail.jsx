import React, { useEffect, useState } from "react";

import {
  Package,
  Truck,
  CheckCircle,
  ShoppingBag,
  Circle,
  ArrowLeft,
} from "@phosphor-icons/react";
import { getOrderById } from "../services/orderService";

const OrderTrackingDetail = ({ orderData, setActiveSecondary }) => {
  const [orderDetail, setOrderDetail] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      console.log(orderData);
      try {
        const response = await getOrderById(orderData.data, token);
        setOrderDetail(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [orderData]);

  useEffect(() => {}, [orderDetail]);

  const [orderDetails] = useState({
    orderId: "ORD123456789",
    price: 299.99,
    createdDate: "2024-01-20",
    currentStatus: "order_placed",
    product: {
      name: "Premium Wireless Headphones",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      color: "Midnight Black",
      description: "High-quality wireless headphones with noise cancellation",
    },
    activities: [
      {
        id: 1,
        status: "Order Delivered",
        timestamp: "2024-01-22 15:30",
        description: "Package has been delivered",
      },
      {
        id: 2,
        status: "On The Road",
        timestamp: "2024-01-22 10:15",
        description: "Package is out for delivery",
      },
      {
        id: 3,
        status: "Packaging",
        timestamp: "2024-01-21 14:20",
        description: "Order is being packed",
      },
      {
        id: 4,
        status: "Order Placed",
        timestamp: "2024-01-20 09:00",
        description: "Order has been placed successfully",
      },
    ],
  });

  const steps = [
    {
      id: 1,
      name: "Order Placed",
      icon: ShoppingBag,
      status: "Đơn hàng đã được đặt",
    },
    { id: 2, name: "Packaging", icon: Package, status: "Đóng gói sản phẩm" },
    { id: 3, name: "On The Road", icon: Truck, status: "Đang trên đường giao" },
    {
      id: 4,
      name: "Delivered",
      icon: CheckCircle,
      status: "Đã giao thành công",
    },
  ];

  const getStepStatus = (stepStatus) => {
    const statusOrder = [
      "Đơn hàng đã được đặt",
      "Đóng gói sản phẩm",
      "Đang trên đường giao",
      "Đã giao thành công",
    ];
    const currentIndex = statusOrder.indexOf(orderDetail.state);

    const stepIndex = statusOrder.indexOf(stepStatus);

    if (orderDetail.state === "Đã giao thành công") return "completed";

    if (stepIndex < currentIndex) return "completed";
    if (stepIndex === currentIndex) return "current";
    return "pending";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Order Information Panel */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-4">
            {orderData.type !== "anonymous" && (
              <ArrowLeft
                size={22}
                className="mb-4 hover:cursor-pointer hover:text-orange"
                onClick={() =>
                  setActiveSecondary({
                    type: "orderList",
                    data: null,
                  })
                }
              />
            )}

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Thông tin đơn hàng
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">ID Đơn hàng</p>
              <p className="font-medium">{orderDetail._id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Tổng tiền</p>
              <p className="font-medium">
                {orderDetail?.totalPrice?.toLocaleString()} VNĐ
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Ngày đặt hàng</p>
              <p className="font-medium">
                {new Date(orderDetail?.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Order Status Stepper */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Trạng thái đơn hàng
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-1 items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      getStepStatus(step.status) === "completed"
                        ? "bg-green-500"
                        : getStepStatus(step.status) === "current"
                        ? "bg-blue-500"
                        : "bg-gray-200"
                    }`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-900">
                    {step.name}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-1 mx-4 hidden md:block bg-gray-200">
                    <div
                      className={`h-full ${
                        getStepStatus(step.status) === "completed"
                          ? "bg-green-500"
                          : "bg-gray-200"
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Ordered Panel */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Thông tin sản phẩm
            </h2>
            <div className="flex items-start space-x-4">
              <img
                src={orderDetails.product.image}
                alt={orderDetails.product.name}
                className="w-24 h-24 object-cover rounded-lg"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e";
                }}
              />
              <div>
                <h3 className="font-medium text-gray-900">
                  {orderDetails.product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Quantity: {orderDetails.product.quantity}
                </p>
                <p className="text-sm text-gray-500">
                  Color: {orderDetails.product.color}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {orderDetails.product.description}
                </p>
              </div>
            </div>
          </div>

          {/* Order Activity Panel */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Chi tiết trạng thái đơn hàng
            </h2>
            <div className="space-y-4">
              {orderDetails.activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 border-l-2 border-gray-200 pl-4"
                >
                  <Circle className="w-2 h-2 mt-2 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {activity.status}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activity.timestamp}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingDetail;
