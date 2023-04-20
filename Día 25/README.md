# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Crea tu propia implementación de un array

![Spoiler Shield](https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif)

```js
export class MyArray {
  constructor() {
    // Tu código aquí 👈
    this.lenght = 0;
    this.data = {};
  }

  map(func) {
    // Tu código aquí 👈
    const newArray = new MyArray();
    for (let i = 0; i < this.lenght; i++) {
      const element = this.data[i];
      newArray.push(func(element));
    }
    return newArray;
  }

  filter(func) {
    // Tu código aquí 👈
    const newArray = new MyArray();
    for (let i = 0; i < this.lenght; i++) {
      const element = this.data[i];
      if (func(element)) {
        newArray.push(element);
      }
    }
    return newArray;
  }

  push(item) {
    this.data[this.lenght] = item;
    this.lenght++;
  }

  pop() {
    // Tu código aquí 👈
    this.lenght--;
    const deletedItem = this.data[this.lenght];
    delete this.data[this.lenght];
    return deletedItem;
  }

  join(character = ",") {
    // Tu código aquí 👈
    let result = "";
    for (let i = 0; i < this.lenght; i++) {
      result += this.data[i];
      if (i < this.lenght - 1) {
        result += character;
      }
    }
    return result;
  }

  shift() {
    // Tu código aquí 👈
    const deletedItem = this.data[0];
    delete this.data[0];
    this.lenght--;
    for (let i = 0; i < this.length; i++) {
      const nextElement = this.data[i + 1];
      this.data[i] = nextElement;
    }
    delete this.data[this.lenght];

    return deletedItem;
  }

  unshift(item) {
    // Tu código aquí 👈
    if (!item && item !== 0) {
      return this.lenght;
    }

    if (this.item == 0) {
      this.data[0] = item;
      this.lenght++;
      return this.lenght;
    }

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = item;

    this.length++;
    return this.length;
  }
}
```

# Michis anti-spoilers

![Michi Programando](https://helloacm.com/wp-content/uploads/2021/07/cat-oriented-programming-1.jpg)

Fue algo muy parecido a la lectura, simplemente tomar en cuenta como se accede al valor, mediante el metodo hash, entonces de esa manera se puede realizar las diferentes operaciones.

```js
export class ContactList {
  constructor(size) {
    // Tu código aquí 👈
    this.buckets = new Array(size);
    this.numBuckets = this.buckets.length;
  }

  hash(name) {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
      total += name.charCodeAt(i);
    }
    console.log(total % this.numBuckets);
    return total % this.numBuckets;
  }

  insert(name, phone) {
    // Tu código aquí 👈
    let index = this.hash(name);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([name, phone]);
  }

  get(name) {
    // Tu código aquí 👈
    let index = this.hash(name);
    if (!this.buckets[index]) {
      return null;
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === name) {
        return this.buckets[index][i][1];
      }
    }
  }

  retrieveAll() {
    // Tu código aquí 👈
    let allValues = [];
    for (let i = 0; i < this.numBuckets; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          allValues.push(this.buckets[i][j]);
        }
      }
    }

    return allValues;
  }

  delete(name) {
    // Tu código aquí 👈
    let index = this.hash(name);
    console.log(index);
    if (!this.buckets[index]) {
      return null;
    }
    if (this.buckets[index]) {
      this.buckets[index] = [];
    }
  }
}
```
