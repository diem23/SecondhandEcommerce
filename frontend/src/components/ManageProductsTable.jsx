import React, { useState, useEffect } from "react";
import { getProducts, deleteProduct, getProductById } from "../services/productService";
import { toast } from "react-toastify";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import UpdateProductDialog from "./UpdateProductDialog";

const ManageProductsTable = () => {
  const [productData, setProductData] = useState([]);
  const [openProductId, setOpenProductId] = React.useState(null);
  const [dialogData, setDialogData] = React.useState({});
  const [deleteId, setDeleteId] = React.useState("");
  const handleOpen = async (productId) => {
    // console.log(productId, openProductId);
    // if (!productId) {
    //   return;
    // }
    // const product = await getProductById(productId);
    // setDialogData(product);
    setOpenProductId(openProductId === productId ? null : productId);
  };

  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const handleConfirmOpen = (_id) => {
    setDeleteId(_id);
    setConfirmOpen(!confirmOpen);
  };

  const fetchData = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      const data = {
        page: 1,
        limit: 10,
        sort: { price: -1 },
        matches: {
          userId: user._id,
        },
      };
      const response = await getProducts(data);
      setProductData(response.products);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    console.log(`Deleting product ${id}`);
    const user = JSON.parse(localStorage.getItem("user"));
    deleteProduct(id, user.token)
      .then(() => {
        const updatedProducts = productData.filter(
          (product) => product._id !== id
        );
        setProductData(updatedProducts);
        toast.success("Xóa sản phẩm thành công");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Xóa sản phẩm thất bại");
      });
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
            {productData.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12">
                      <img
                        className="h-12 w-12 rounded-md object-cover"
                        src={product.images[0]}
                        alt={product.productName}
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1560393464-5c69a73c5770";
                        }}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {product.productName}
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
                    onClick={() => handleOpen(product._id)}
                    className="px-6 py-2 text-sm rounded-lg flex gap-2 items-center bg-orange text-white  font-semibold hover:bg-orange-600"
                  >
                    Chỉnh sửa
                  </button>
                  <button className="px-6 py-2 text-sm rounded-lg flex gap-2 items-center bg-orange text-white  font-semibold hover:bg-orange-600">
                    Xem đánh giá
                  </button>
                  <button
                    onClick={() => handleConfirmOpen(product._id)}
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
      <UpdateProductDialog
        productId={openProductId}
        open={openProductId !== null}
        handleOpen={() => handleOpen(openProductId)}
        refreshTable={fetchData}
      />
      <Dialog open={confirmOpen} handler={handleConfirmOpen}>
        <DialogBody>
          Bạn có chắc chắn muốn ngưng bán/xóa sản phẩm này không?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleConfirmOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="orange"
            onClick={() => {
              handleDelete(deleteId);
              handleConfirmOpen();
            }}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default ManageProductsTable;
