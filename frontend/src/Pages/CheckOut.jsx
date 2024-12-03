import React from "react";
import {
  Card,
  CardBody,
  Input,
  Select,
  Option,
  Checkbox,
  Button,
  Radio,
} from "@material-tailwind/react";
import { ShoppingCart, ArrowRight } from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { cartItems } = location.state;
  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalDiscount = cartItems.reduce((sum, item) => sum + item.discount, 0);
  const totalTax = cartItems.reduce((sum, item) => sum + item.tax, 0);
  const total = subTotal - totalDiscount + totalTax;

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-2 shadow-lg">
          <CardBody>
            <h2 className="text-lg font-semibold mb-4">Thông tin thanh toán</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Input label="Họ" />
              <Input label="Tên" />
            </div>
            <Input label="Địa chỉ" className="mb-6" />
            <div className="grid grid-cols-3 gap-4 my-6">
              <Input label="Tỉnh"></Input>
              <Input label="Huyện"></Input>
              <Input label="Phường/Xã"></Input>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Input label="Số nhà và đường" />
              <Input label="Email" />
            </div>
            <Input label="Số điện thoại" className="mb-6" />
            <Checkbox label="Gửi hàng vào địa chỉ khác" className="mb-6" />

            {/* Payment Method */}
            <h2 className="text-lg font-semibold mb-4">
              Phương thức thanh toán
            </h2>
            <Radio
              id="payos"
              name="payment-method"
              label="PayOS"
              className="pb-2"
            />
            <Radio
              id="credit-card"
              name="payment-method"
              label="Thẻ tín dụng"
              defaultChecked
              className="pb-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Input label="Tên thẻ" />
              <Input label="Số thẻ" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Input label="Ngày hết hạn" />
              <Input label="CVC" />
            </div>

            {/* Additional Notes */}
            <h2 className="text-lg font-semibold mb-4">Thông tin thêm</h2>
            <Input
              label="Ghi chú (tùy chọn)"
              className="mb-6"
              placeholder="Điền thêm thông tin cụ thể hơn để shipper và nhà cung cấp có thể đáp ứng nhu cầu của bạn..."
            />
          </CardBody>
        </Card>

        <div>
          <Card className="shadow-lg">
            <CardBody>
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <ShoppingCart size={24} />
                Order Summary
              </h2>
              {/* Order Items */}
              {cartItems.map((item) => (
                <div key={item.productId} className="flex justify-between mb-2">
                  <div>
                    <p className="font-medium">{item.productName}</p>
                    <div className="flex gap-2 items-center">
                      <p className="text-sm ">{item.quantity}</p>
                      <p className="text-blue-500">
                        {" "}
                        x {item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Summary Totals */}
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Discount</span>
                <span>-${totalDiscount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax</span>
                <span>${totalTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button fullWidth color="orange" className="mt-4">
                PLACE ORDER
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
