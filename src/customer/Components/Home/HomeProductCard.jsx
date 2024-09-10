import React from "react";
import { useNavigate } from "react-router-dom";
import './HomeProductCard.css'; // Import the custom CSS

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/men/clothing/mens_kurta?category=${product.type}`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden product-card"
    >
      <div className="product-image">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 ">
        <h1 className="text-lg font-medium text-gray-900 product-title">
          {product?.brand || product?.title}
        </h1>
        <p className="mt-2 text-sm text-gray-500 product-description">
          {product?.description}
        </p>
      </div>
    </div>
  );
};

export default HomeProductCard;
