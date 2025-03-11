import React from "react";
import RatingWidget from "./RatingWidget";

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 w-80 mx-auto">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-semibold text-gray-900 mt-3">{product.name}</h2>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <p className="text-yellow-500 text-lg font-bold mt-2">⭐ {product.avgRating.toFixed(1)} / 5</p>
      <p className="text-gray-500 text-sm">{product.totalRatings} Ratings</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

export default ProductCard;
