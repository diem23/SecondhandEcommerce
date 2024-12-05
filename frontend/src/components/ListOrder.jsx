import { useEffect, useState } from "react";
import { getAllOrders } from "../services/orderService";

export const ListOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("accessToken");
            try {
                const response = await getAllOrders(token);
                const orders = response.sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );
                setOrders(orders);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="p-6">
            <table className="w-full text-center">
                <thead>
                    <tr className="text-gray-600">
                        <th className="pb-2">ID ĐƠN HÀNG</th>
                        <th className="pb-2">TRẠNG THÁI</th>
                        <th className="pb-2">NGÀY ĐẶT</th>
                        <th className="pb-2">TỔNG TIỀN</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {orders?.map((item) => (
                        <tr key={item._id} className="border-b">
                            <td className="py-3 font-bold">{item._id}</td>
                            <td className="py-3">
                                <span
                                    className={
                                        item.paymentState
                                            ? "text-[#2db224]"
                                            : "text-[#fa8232]"
                                    }
                                >
                                    {item.paymentState
                                        ? "ĐÃ THANH TOÁN"
                                        : "CHƯA THANH TOÁN"}
                                </span>
                            </td>
                            <td className="py-3">
                                <span>
                                    {new Date(item.createdAt).toLocaleString()}
                                </span>
                            </td>
                            <td className="py-3">{item.totalPrice} VNĐ</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
