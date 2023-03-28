export function groupProducts(products, category) {
  // Tu código aquí
  let totalPrice = 0;
  let productsName = [];
  products.forEach((element) => {
    if (element.category == category) {
      totalPrice += element.price;
      productsName.push(element.name);
    }
  });
  return { products: productsName.join(", "), totalPrice };
}

const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

console.log(groupProducts(products, "Clothing"));
