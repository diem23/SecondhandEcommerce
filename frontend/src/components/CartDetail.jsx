import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { ArrowRight } from "@phosphor-icons/react";
import { getCarts } from "../services/cartService";
const CartItem = ({ product, quantity, price, image, onRemove }) => {
  const formatCurrency = (value) =>
    new Intl.NumberFormat("vi-VN").format(value);

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={product}
          className="h-16 w-16 object-cover rounded-md"
        />
        <div>
          <h3 className="font-medium">{product}</h3>
          <p className="text-sm text-gray-500">
            {quantity} x {formatCurrency(price)} VNĐ
          </p>
        </div>
      </div>
      <button
        className="text-gray-500 text-lg hover:text-red-500"
        onClick={onRemove}
      >
        ×
      </button>
    </div>
  );
};

export default function CartDetail({ products }) {
  const total = products.reduce(
    (acc, item) =>
      acc +
      item.productItems[0].quantity * parseInt(item.productItems[0].price),
    0
  );

  const handleRemove = (id) => {
    console.log("Remove item with id:", id);
  };

  return (
    <div className="p-4 bg-white rounded-md w-96">
      <h2 className="text-lg font-semibold mb-2">
        Giỏ hàng ({products.length})
      </h2>
      <div className="flex items-center my-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="space-y-4">
        {products.map((item) => (
          <CartItem
            key={item._id}
            product={item.productItems[0].product.productName}
            image={item.productItems[0].product.images[0]}
            quantity={item.productItems[0].quantity}
            price={item.productItems[0].price}
            onRemove={() => handleRemove(item._id)}
          />
        ))}
      </div>
      <div className="mt-4 border-t pt-4">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Tổng tiền:</span>
          <span className="font-semibold">{total.toLocaleString()} VNĐ</span>
        </div>

        <Button
          className="mt-6 flex items-center justify-center gap-3 bg-[#FA8232]"
          fullWidth
        >
          Thanh toán ngay
          <ArrowRight size={17} />
        </Button>

        <Button
          className="mt-2 flex items-center justify-center gap-3 "
          fullWidth
          variant="outlined"
          style={{ borderColor: "#FA8232", color: "#FA8232" }}
        >
          Xem chi tiết
        </Button>
      </div>
    </div>
  );
}
