import React, { useState } from "react";
import { Star } from "@phosphor-icons/react";

const ProductRating = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Nguyễn Ngọc Khánh My",
      rating: 4,
      review: "Sản phẩm tốt, giá cả hợp lý",
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Nguyễn Thái Thời",
      rating: 5,
      review: "Vượt cả kỳ vọng, rất hài lòng",
      date: "2024-01-14",
    },
    {
      id: 3,
      name: "Kim Nhật Thành",
      rating: 2,
      review: "Sài mới có 3 tháng đã gãy, không biết có bảo hành không nữa",
      date: "2024-01-13",
    },
  ]);

  const averageRating = (
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div
            className="flex mr-2"
            aria-label={`Average rating ${averageRating} out of 5`}
          >
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-6 h-6 ${
                  index < Math.floor(averageRating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                weight="fill"
              />
            ))}
          </div>
          <span className="text-lg font-semibold">
            {averageRating} trên thang 5
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Đánh giá của khách hàng</h3>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-4">
              <div className="flex items-center mb-2">
                <span className="font-semibold mr-2">{review.name}</span>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-4 h-4 ${
                        index < review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      weight="fill"
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-sm ml-2">
                  {review.date}
                </span>
              </div>
              <p className="text-gray-700">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductRating;
