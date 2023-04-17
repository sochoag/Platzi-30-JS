// En este desafío, tendrás la oportunidad de desarrollar tus habilidades al construir tu propio array mediante el uso de clases.

// Tu objetivo es crear una clase que sea similar a un array nativo del lenguaje, pero sin utilizar métodos ya existentes.

// Entre los métodos disponibles en los arrays nativos, solo deberás implementar la lógica de los siguientes: map, filter, join, push, pop, shift, y unshift.

// No podrás usar los corchetes [], aquí entenderás porque los arrays se consideran objetos ¡Buena suerte!

// Ejemplo 1:

// Input:

// const myArray = new MyArray()

// myArray.push(1);
// myArray.push(2);
// myArray.push(3);

// console.log(myArray.data)

// Output: { 0: 1, 1: 2, 2: 3 }

// Ejemplo 2:

// Input:

// const myArray = new MyArray()

// myArray.push("Platzinauta");
// myArray.unshift("Hola!")

// console.log(myArray.data)

// Output: { 0: "Hola!", 1: "Platzinauta" }

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

const myArray = new MyArray();

myArray.push(1);
myArray.push(2);
myArray.push(3);

console.log(myArray.data);
