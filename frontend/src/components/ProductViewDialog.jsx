import {
  Button,
  Card,
  Dialog,
  IconButton,
  Option,
  Select
} from "@material-tailwind/react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { getProductById } from "../services/productService";

export default function ProductViewDialog({ productId, open, handleOpen }) {
  const datatest = [
    {
      productName: "Organic Shampoo",
      brand: "Herbal Essences",
      type: "Beauty",
      applyStandOutSelling: true,
      applyProfessionallySelling: false,
      state: "New",
      price: 1999,
      quantity: 100,
      postingCost: 500,
      soldQuantity: 20,
      color: "Red",
      size: 10.5,
      weight: 500,
      description: "A sulfate-free shampoo for dry and damaged hair",
      isDeleted: false,
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/100",
      ],
    },
  ];
  const [product, setProduct] = useState(datatest[0])
  const [selectedImage, setSelectedImage] = React.useState(0);

  useEffect(() => {
    const getProduct = async () => {
      if (productId) {
        const product = await getProductById(productId)
        setProduct(product)
      }
    } 
    getProduct()
  }, [productId])

  const handlePrevImage = () => {
    setSelectedImage((prev) =>
      prev > 0 ? prev - 1 : product.images.length - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage((prev) =>
      prev < product.images.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <Dialog open={open} handler={handleOpen} size="xl">
      <div className="p-6 grid grid-cols-2 gap-20 items-center justify-center">
        {/* Image Slider */}
        <div>
          <Card className="relative h-auto w-auto">
            <img
              src={product.images[selectedImage]}
              alt="Product"
              className="w-full rounded-lg"
            />
          </Card>

          <div className="flex justify-center mt-4 space-x-2">
            <IconButton
              variant="text"
              onClick={handlePrevImage}
              className="relative -left-10 transform -translate-y-1/2 bg-orange text-white rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </IconButton>
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 rounded-lg cursor-pointer border ${
                  selectedImage === index ? "border-orange" : "border-gray-300"
                }`}
              />
            ))}
            <IconButton
              variant="text"
              onClick={handleNextImage}
              className="relative-right-10 transform -translate-y-1/2 bg-orange text-white rounded-full"
            >
              <ArrowRight className="w-5 h-5" />
            </IconButton>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-semibold">{product.productName}</h1>
          <p className="text-gray-500">Brand: {product.brand}</p>
          <p className="text-gray-500">Category: {product.type}</p>
          <p className="text-gray-500">State: {product.state}</p>

          <div className="flex items-center mt-2">
            <span className="text-orange text-lg font-bold">
              ${product.price / 100}
            </span>
            <span className="ml-4 bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm">
              {product.applyStandOutSelling ? "Hot Seller" : ""}
            </span>
          </div>
          <p className="text-gray-500 mt-2">{product.description}</p>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <Select label="Color">
              <Option value={product.color}>{product.color}</Option>
            </Select>
            <Select label="Size">
              <Option value={product.size}>{product.size}</Option>
            </Select>
          </div>

          <div className="mt-4 flex items-center space-x-4">
            <Button color="orange" className="w-full">
              Add to Cart
            </Button>
            <Button color="blue" className="w-full">
              Buy Now
            </Button>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            Shipping Cost: ${product.postingCost / 100}
          </div>
        </div>
      </div>
    </Dialog>
  );
}
