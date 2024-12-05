import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Input, Select, Option, Textarea } from "@material-tailwind/react";
import { UploadSimple } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

export default function UpdateProductDialog({ productData, open, handleOpen }) {
  const [formData, setFormData] = useState(productData);
  useEffect(() => {
    setFormData(productData);
  }, [productData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const getTypes = () => {
    const types = JSON.parse(localStorage.getItem("brands"));
    const options = [];
    types.forEach((type) => {
      options.push(type.type);
    });
    return options;
  };
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      size={"lg"}
      className="h-[600px] overflow-auto "
    >
      <DialogBody>
        <div className="flex justify-center">
          {/* Main Content */}
          <main className="w-4/5 p-8">
            {/* Product Information */}
            <section className="bg-white  p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-bold mb-6">
                Thông tin cơ bản về sản phẩm
              </h2>
              <div className="grid grid-cols-8 gap-10">
                {/* Image Upload Section */}
                {/* <div className="col-span-3 ">
                <div className="border rounded-lg p-2 flex flex-col items-center">
                  <label htmlFor="files">
                    <UploadSimple size={32} className="text-gray-500 mb-2" />
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mb-2 "
                    id="files"
                    name="files"
                    hidden
                  />
                </div>
                <div className="mt-4 overflow-x-auto flex gap-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-24 h-24 flex-shrink-0 border rounded-md"
                    >
                      <img
                        src={image.preview}
                        alt={`Upload Preview ${index}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div> */}
                <div className="col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Tên sản phẩm"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                  />
                  <Input
                    label="Hãng"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                  />
                  <Select
                    label="Thể loại"
                    value={formData.type}
                    onChange={(value) => {
                      setFormData({ ...formData, type: value });
                    }}
                  >
                    {getTypes().map((type) => (
                      <Option key={type} value={type}>
                        {type}
                      </Option>
                    ))}
                  </Select>
                  <Input
                    label="Giá bán khuyến nghị (VNĐ)"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                  />
                  <Select
                    label="Áp dụng bán nổi bật?"
                    value={formData.applyStandOutSelling}
                    onChange={(value) =>
                      setFormData({ ...formData, applyStandOutSelling: value })
                    }
                  >
                    <Option value={1}>Có</Option>
                    <Option value={0}>Không</Option>
                  </Select>
                  <Select
                    label="Áp dụng bán chuyên nghiệp?"
                    value={formData.applyProfessionallySelling}
                    onChange={(value) =>
                      setFormData({
                        ...formData,
                        applyProfessionallySelling: value,
                      })
                    }
                  >
                    <Option value={1}>Có</Option>
                    <Option value={0}>Không</Option>
                  </Select>

                  <Input
                    label="Số lượng hiện có"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                  <Input
                    label="Tình trạng"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                  <Input
                    label="Màu"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                  />
                  <Input
                    label="Kích thước"
                    name="size"
                    value={formData.size}
                    type="number"
                    onChange={handleChange}
                  />
                  <Input
                    label="Khối lượng"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-6">Mô tả sản phẩm</h2>
              <Textarea
                label="Mô tả tổng quan về sản phẩm của bạn..."
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </section>
          </main>
        </div>
      </DialogBody>
      <DialogFooter className="gap-5">
        <Button color="yellow" ripple="light" onClick={handleOpen}>
          Hủy
        </Button>
        <Button color="orange" ripple="light" onClick={handleOpen}>
          Lưu
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
