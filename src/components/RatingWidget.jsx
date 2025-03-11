import React, { useState } from "react";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0); 
    }
  };

  return (
    <div className="mt-3">
      <div className="flex justify-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-2xl cursor-pointer ${
              (hoveredRating || rating) >= star ? "text-yellow-500" : "text-gray-300"
            }`}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition"
      >
        Submit Rating
      </button>
    </div>
  );
};

export default RatingWidget;
