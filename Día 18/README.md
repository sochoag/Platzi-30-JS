# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Sistema de carrito de compras

![Spoiler Shield](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Wozki_sklepowe.JPG/1200px-Wozki_sklepowe.JPG)

```js
export class Article extends Product {
  // Tu código aquí 👈
  constructor(name, price, quantity) {
    super(name, price, quantity);
  }

  addToCart() {
    return `Agregando ${this.quantity} unidades del articulo ${this.name} al carrito`;
  }
}

export class Service extends Product {
  constructor(name, price, quantity) {
    super(name, price, quantity);
  }

  addToCart() {
    return `Agregando el servicio ${this.name} al carrito`;
  }
  // Tu código aquí 👈
}

export class Cart {
  constructor() {
    this.products = [];
  }
  // Tu código aquí 👈
  addProduct(product) {
    product.addToCart();
    this.products.push(product);
  }

  deleteProduct(product) {
    this.products = this.products.filter(
      (cartItem) => cartItem.name != product.name
    );
  }

  calculateTotal() {
    let total = 0;
    for (let item of this.products) {
      total += item.price * item.quantity;
    }
    return total;
  }
}
```

# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Encapsula datos del usuaio

![Spoiler Shield](https://images.ctfassets.net/lh3zuq09vnm2/4RvFyFCYJVRGvCexX5tyYM/8172f69bc5df2545840c5da81489ed04/user-behavior.width-1500.jpg)

```js
export class User {
  // Tu código aquí 👈
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this._friends = [];
    this._messages = [];
  }

  // Setters

  set message(newMessage) {
    if (newMessage !== "") {
      this._messages.push(newMessage);
    }
  }

  set name(newName) {
    if (newName !== "") {
      this._name = newName;
      return;
    }
    throw new Error("The name must not be empty");
  }

  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
      return;
    }
    throw new Error("The new age should be positive");
  }

  // Getters

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  addFriend(amigo) {
    if (amigo instanceof User) {
      this._friends.push(amigo);
    }
  }

  sendMessage(message, friend) {
    if (typeof message === "string" && friend instanceof User) {
      this._messages.push(message);
      friend.message = message;
    }
  }

  showMessages() {
    return this._messages;
  }
}
```
