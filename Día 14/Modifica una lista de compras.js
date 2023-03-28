export function processShoppingList(list) {
  // Tu código aquí 👈
  let total = 0;
  list.forEach((element) => {
    console.log(element.name);
    if (element.name.includes("oferta")) {
      element.price *= 0.8;
    }
    element.price = element.price * element.quantity;
    total += element.price;
    delete element.quantity;
  });

  return total;
}

const shoppingList = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
];

console.log(processShoppingList(shoppingList));

// Output: 89;
