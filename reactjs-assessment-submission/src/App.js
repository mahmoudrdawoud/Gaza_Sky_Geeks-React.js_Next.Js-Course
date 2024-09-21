import React, { useState } from "react";
import ProductList from "./pages/ProductList.jsx";

const App = () => {
  // Array of products (could come from an API in a real scenario)
  const productsData = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Shirt", category: "Clothing" },
    { id: 3, name: "Phone", category: "Electronics" },
    { id: 4, name: "Pants", category: "Clothing" },
  ];

  // State management for products, filter, and filtered products
  const [products] = useState(productsData);
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter the product list based on the active filter
  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  // Event handler for changing the filter
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <h1>Product List</h1>
      {/* Pass the filtered products and event handler as props */}
      <ProductList
        products={filteredProducts}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
