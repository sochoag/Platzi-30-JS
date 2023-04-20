# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Agrupa los productos

![Spoiler Shield](https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif)

```js
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
```

# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Encuentra la ubicación del valor buscado

![Spoiler Shield](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTk1YWJlOWM5NzJkM2U4YWY0YzgwNmY5ZjZjMjhiNTRiMWViNTZmNSZjdD1n/v6aOjy0Qo1fIA/giphy.gif)

```js
export function searchValue(array, value) {
  // Tu código aquí 👈
  let result = undefined;
  array.forEach((element, index) => {
    if (element.includes(value)) {
      result = {
        row: index,
        column: element.indexOf(value),
      };
    }
  });
  if (!result) {
    throw new Error("Valor no encontrado");
  }
  return result;
}
```
