// بيانات المنتجات
const products = [
  { name: "هاتف ذكي", category: "Electronics", price: 699 },
  { name: "لابتوب", category: "Electronics", price: 999 },
  { name: "قميص", category: "Clothing", price: 19 },
  { name: "جينز", category: "Clothing", price: 49 },
  { name: "سماعات", category: "Electronics", price: 199 },
];

// وظيفة عرض المنتجات
function displayProducts(productArray) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // مسح المنتجات الحالية

  productArray.forEach((product) => {
    // إنشاء بطاقة المنتج
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // إضافة اسم المنتج
    const productName = document.createElement("h2");
    productName.textContent = product.name;
    productCard.appendChild(productName);

    // إضافة فئة المنتج
    const productCategory = document.createElement("p");
    productCategory.textContent = `الفئة: ${product.category}`;
    productCard.appendChild(productCategory);

    // إضافة سعر المنتج
    const productPrice = document.createElement("p");
    productPrice.textContent = `السعر: $${product.price}`;
    productCard.appendChild(productPrice);

    // إلحاق البطاقة إلى قائمة المنتجات
    productList.appendChild(productCard);
  });
}

// وظيفة تصفية المنتجات
function filterProducts(category) {
  if (category === "All") {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    displayProducts(filteredProducts);
  }
}

// عرض جميع المنتجات عند تحميل الصفحة
window.onload = () => {
  displayProducts(products);
};
