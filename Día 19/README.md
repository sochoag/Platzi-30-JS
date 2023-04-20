# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Jerarquia de animales

![Spoiler Shield](https://media.tenor.com/GFe8i58uq9UAAAAC/cat-what.gif)

```js
export class Animal {
  // Tu código aquí 👈
  constructor(name, age, specie) {
    this.name = name;
    this.age = age;
    this.specie = specie;
  }

  getInfo() {
    return {
      name: this.name,
      age: this.age,
      specie: this.specie,
    };
  }
}

export class Mammal extends Animal {
  // Tu código aquí 👈
  constructor(name, age, specie, hasFur) {
    super(name, age, specie);
    this.hasFur = hasFur;
  }
  getInfo() {
    return { ...super.getInfo(), hasFur: this.hasFur };
  }
}

export class Dog extends Mammal {
  // Tu código aquí 👈
  constructor(name, age, breed, hasFur) {
    super(name, age, "dog", hasFur);
    this.breed = breed;
  }
  getInfo() {
    return { ...super.getInfo(), breed: this.breed };
  }
  bark() {
    return "woof!";
  }
}
```

# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Implementa un sistema de pagos usando polimorfismo

![Spoiler Shield](https://www.meme-arsenal.com/memes/0059f620e9f71798b48d781a1fa1419d.jpg)

### Pay.class.js

```js
export class Pay {
  // Tu código aquí 👈
  makePay(quantity) {
    return { realized: true, quantity };
  }
}
```

### Cash.class.js

```js
export class Cash extends Pay {
  // Tu código aquí 👈
}
```

### Card.class.js

```js
export class Card extends Pay {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }
  // Tu código aquí 👈
  makePay(quantity) {
    if (this.cardNumber.length != 16) {
      throw new Error("Invalid Card Number");
    } else {
      return {
        ...super.makePay(quantity),
        lastCardNumbers: this.cardNumber.substr(12),
      };
    }
  }
}
```

### PayPal.class.js

```js
export class PayPal extends Pay {
  // Tu código aquí 👈
  constructor(email) {
    super();
    this.email = email;
  }
  makePay(quantity) {
    return {
      ...super.makePay(quantity),
      platform: "Paypal",
      email: this.email,
    };
  }
}
```

### exercise.js

```js
export function processPay(method, quantity) {
  // Tu código aquí 👈
  return method.makePay(quantity);
}
```
