import React from "react";

const ProductList = ({ products, activeFilter, onFilterChange }) => {
  return (
    <div>
      {/* Filter buttons */}
      <div>
        <button
          onClick={() => onFilterChange("All")}
          className={activeFilter === "All" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange("Electronics")}
          className={activeFilter === "Electronics" ? "active" : ""}
        >
          Electronics
        </button>
        <button
          onClick={() => onFilterChange("Clothing")}
          className={activeFilter === "Clothing" ? "active" : ""}
        >
          Clothing
        </button>
      </div>

      {/* Display the list of filtered products */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
