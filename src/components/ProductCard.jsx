import React from "react";

const ProductCard = () => {
  return (
    <div className="flex">
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hiddenp-4">
        <img
          className="w-full h-62 object-cover"
          src="https://www.yourprint.in/wp-content/uploads/2023/12/black-1.jpg"
          alt="Product"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">T-Shirt</h2>
          <p className="text-gray-600">₹599.99</p>
          <p className="text-sm text-gray-500">
            Black Customized Half Sleeve Men's Cotton T-Shirt.
          </p>
          <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
