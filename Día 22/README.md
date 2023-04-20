# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Personaliza productos de una tienda

![Spoiler Shield](https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1)

### exercise.js

```js
export class BasicProduct extends Product {
  constructor(price, description) {
    // Tu código aquí 👈
    super();
    this.price = price;
    this.description = description;
  }

  getDescription() {
    // Tu código aquí 👈
    return this.description;
  }
}
```

### Warranty decorator

```js
export class WarrantyDecorator extends Product {
  constructor(product) {
    // Tu código aquí 👈
    super();
    this.product = product;
    this.product.price += 20;
    this.product.description += " con garantia";
  }

  getPrice() {
    // Tu código aquí 👈
  }

  getDescription() {
    // Tu código aquí 👈
    return this.product.description;
  }
}
```

### Shipping Insurance

```js
export class ShippingInsuranceDecorator extends Product {
  constructor(product) {
    super();
    this.product = product;
  }

  getPrice() {
    return this.product.getPrice() + 20;
  }

  getDescription() {
    return this.product.getDescription() + " con seguro de envío";
  }
}
```

# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Mejora el codigo usando builder

![Spoiler Shield](<https://cdn.vox-cdn.com/thumbor/iaVMlcV5rj0OuPejZ7HyqYslLZk=/0x0:800x333/1400x788/filters:focal(334x72:462x200):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/55278741/gatsby.0.gif>)

```js
export class CarBuilder {
  // Tu código aquí 👇
  constructor() {
    this.year = 0;
    this.model = "";
    this.brand = "";
    this.color = "";
    this.price = 0;
    this.isAvailable = undefined;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setBrand(brand) {
    this.brand = brand;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setPrice(price) {
    this.price = price;
    return this;
  }

  setIsAvailable(isAvailable) {
    this.isAvailable = isAvailable;
    return this;
  }

  build() {
    return {
      year: this.year,
      model: this.model,
      brand: this.brand,
      color: this.color,
      price: this.price,
      isAvailable: this.isAvailable,
    };
  }
}
```
