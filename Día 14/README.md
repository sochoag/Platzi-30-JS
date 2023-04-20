# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Modifica una lista de compras

A mi parecer es una respuesta concisa y sencilla 😃

Acepto sugerencias

![Spoiler Shield](https://codecats.xyz/assets/images/codecats/830.png)

```js
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
```

# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Modifica una lista de compras

Resuelto en 4 lineas

Acepto sugerencias 😃

![Spoiler Shield](https://media.tenor.com/29Ok5pc0ivAAAAAM/gatinho-gato.gif)

```js
export function sortByAvailabilityAndPrice(products) {
  // Tu código aquí 👈
  const productsSorted = [...products];
  productsSorted.sort((a, b) => a.price - b.price)
  productsSorted.sort((a, b) => b.inStock - a.inStock)
  return productsSorted;
}rn total;
}
```
