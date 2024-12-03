import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const CreateOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productData, previousUrl } = location.state;
  const [cartItems, setCartItems] = React.useState([
    { ...productData, toBuy: 1 },
  ]);
  const handleQuantityChange = (id, operation) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id
          ? {
              ...item,
              toBuy:
                operation === "increase"
                  ? item.toBuy + 1
                  : item.toBuy > 1
                  ? item.toBuy - 1
                  : 1,
            }
          : item
      )
    );
  };

  // Remove item from the cart
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Giỏ hàng</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-600">
                <th className="pb-2">Sản phẩm</th>
                <th className="pb-2">Giá</th>
                <th className="pb-2">Số lượng</th>
                <th className="pb-2">Tổng tiền phụ</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="py-3">
                    <img
                      src={item.images[0]}
                      alt={item.productName}
                      className="inline-block w-12 h-12 rounded-lg mr-2"
                    />
                    {item.productName}
                  </td>
                  <td className="py-3">{item.price.toFixed(2)} VNĐ</td>
                  <td className="py-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                        onClick={() =>
                          handleQuantityChange(item._id, "decrease")
                        }
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.toBuy}
                        readOnly
                        className="w-12 text-center border-l border-r border-gray-300 text-gray-800"
                      />
                      <button
                        className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                        onClick={() =>
                          handleQuantityChange(item._id, "increase")
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-3">
                    {(item.price * item.toBuy).toFixed(2)} VNĐ
                  </td>
                  <td
                    className="py-3 text-red-500 cursor-pointer hover:text-red-700"
                    onClick={() => handleRemoveItem(item._id)}
                  >
                    ✖
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between gap-60">
            <Button
              className="mt-2 flex items-center justify-center gap-3 "
              fullWidth
              variant="outlined"
              style={{ borderColor: "blue", color: "blue" }}
              onClick={() => navigate(previousUrl)}
            >
              <ArrowLeft size={20} />
              Quay lại shop
            </Button>
            <Button
              className="mt-2 flex items-center justify-center gap-3 "
              fullWidth
              variant="outlined"
              style={{ borderColor: "blue", color: "blue" }}
              onClick={() => navigate("/register")}
            >
              Cập nhập giỏ hàng
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Thông tin đơn</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Tổng tiền:</span>
              <span>
                {cartItems
                  .reduce((total, item) => total + item.price * item.toBuy, 0)
                  .toFixed(2)}{" "}
                VNĐ
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phí ship:</span>
              <span>
                {cartItems
                  .reduce((total, item) => total + item.postingCost, 0)
                  .toFixed(2)}{" "}
                VNĐ
              </span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Thành tiền:</span>
              <span>
                {cartItems
                  .reduce(
                    (total, item) =>
                      total + item.price * item.toBuy + item.postingCost,
                    0
                  )
                  .toFixed(2)}{" "}
                VNĐ
              </span>
            </div>
          </div>
          <button className="mt-4 w-full flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600">
            Thanh toán ngay
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateOrder;
