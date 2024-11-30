import React from "react";
import { Button } from "@material-tailwind/react";
import { ArrowRight } from "@phosphor-icons/react";
const CartItem = ({ product, quantity, price, onRemove }) => {
  const formatCurrency = (value) =>
    new Intl.NumberFormat("vi-VN").format(value);

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-4">
        <div className="h-16 w-16 bg-gray-200 rounded-md" />
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

export default function CartDetail() {
  const cartItems = [
    {
      id: 1,
      product: "Canon EOS 1500D DSLR Camera Body+ 18-55 mm",
      quantity: 1,
      price: "1500000",
    },
    {
      id: 2,
      product: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone",
      quantity: 2,
      price: "1500000",
    },
  ];

  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * parseInt(item.price),
    0
  );

  const handleRemove = (id) => {
    console.log("Remove item with id:", id);
  };

  return (
    <div className="p-4 bg-white rounded-md w-96">
      <h2 className="text-lg font-semibold mb-2">
        Giỏ hàng ({cartItems.length})
      </h2>
      <div className="flex items-center my-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            product={item.product}
            quantity={item.quantity}
            price={item.price}
            onRemove={() => handleRemove(item.id)}
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
