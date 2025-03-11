


import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://via.placeholder.com/150",
    description: "High-quality sound with noise cancellation.",
    avgRating: 4.2,
    totalRatings: 10,
  },
  {
    id: 2,
    name: "Smartphone",
    image: "https://via.placeholder.com/150",
    description: "Latest model with stunning display and camera.",
    avgRating: 4.5,
    totalRatings: 15,
  },
  {
    id: 3,
    name: "Laptop",
    image: "https://via.placeholder.com/150",
    description: "Powerful laptop for all your needs.",
    avgRating: 4.0,
    totalRatings: 8,
  },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              avgRating:
                ((product.avgRating * product.totalRatings) + newRating) /
                (product.totalRatings + 1),
              totalRatings: product.totalRatings + 1,
            }
          : product
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">⭐ Product Ratings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onRatingSubmit={handleRatingSubmit} />
        ))}
      </div>
    </div>
  );
};

export default App;
