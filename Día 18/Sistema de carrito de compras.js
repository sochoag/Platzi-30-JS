export class Product {
  // No debes editar este archivo ❌
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  addToCart() {
    throw new Error(
      "La lógica de este método debe ser implementada por las clases hijas"
    );
  }
}

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

const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
cart.addProduct(book);
cart.addProduct(course);
cart.calculateTotal();
