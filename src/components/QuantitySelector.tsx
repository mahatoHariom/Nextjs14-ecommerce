"use client"
import React, { useState } from "react";

const ProductQuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className="px-5 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        onClick={decreaseQuantity}
      >
        -
      </button>
      <span className="px-5 py-2 bg-gray-200 rounded-md">{quantity}</span>
      <button
        className="px-5 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantitySelector;
