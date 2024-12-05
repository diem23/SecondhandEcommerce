import React, { useState } from "react";
// import { FiEdit2, FiTrash2 } from "react-icons/fi";

const ManageProductsTable = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      price: 199.99,
      soldQuantity: 150,
      quantity: 50,
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
      price: 299.99,
      soldQuantity: 200,
      quantity: 30,
    },
    {
      id: 3,
      name: "4K Ultra HD Camera",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      price: 799.99,
      soldQuantity: 75,
      quantity: 25,
    },
    {
      id: 4,
      name: "Gaming Laptop Elite",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
      price: 1499.99,
      soldQuantity: 50,
      quantity: 15,
    },
  ]);

  const handleEdit = (id) => {
    console.log(`Editing product ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleting product ${id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sản phẩm
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Giá
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Đã bán
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Số lượng
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12">
                      <img
                        className="h-12 w-12 rounded-md object-cover"
                        src={product.image}
                        alt={product.name}
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1560393464-5c69a73c5770";
                        }}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {product.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {product.price.toLocaleString()} VNĐ
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {product.soldQuantity}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      product.quantity > 25
                        ? "bg-green-100 text-green-800"
                        : product.quantity > 10
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.quantity}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-5">
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="px-6 py-2 text-sm rounded-lg flex gap-2 items-center bg-orange text-white  font-semibold hover:bg-orange-600"
                  >
                    Chỉnh sửa
                  </button>
                  <button className="px-6 py-2 text-sm rounded-lg flex gap-2 items-center bg-orange text-white  font-semibold hover:bg-orange-600">
                    Xem đánh giá
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-6 py-2 text-sm flex gap-2 rounded-lg items-center bg-[#EE5858] text-white  font-semibold hover:bg-[#EE5858]"
                  >
                    Ngưng bán
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProductsTable;
