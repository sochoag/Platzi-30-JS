# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Calculadora con closures

![Spoiler Shield](https://camo.githubusercontent.com/8bf6f6d78abc81fcf9c49f10649423e73ea44bc248e83aaae8759d401c829a84/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966)

```js
export function createCalculator() {
  // Tu código aquí 👈
  let total = 0;
  function add(val) {
    total += val;
    return total;
  }
  function subtract(val) {
    total -= val;
    return total;
  }
  function multiply(val) {
    total *= val;
    return total;
  }
  function divide(val) {
    total /= val;
    return total;
  }

  function clear() {
    total = 0;
    return total;
  }

  function getTotal() {
    return total;
  }

  return { add, subtract, clear, multiply, divide, getTotal };
}

export function createCalculator2() {
  let total = 0;
  return {
    add: (num) => (total += num),
    subtract: (num) => (total -= num),
    multiply: (num) => (total *= num),
    divide: (num) => (total /= num),
    clear: () => (total = 0),
    getTotal: () => total,
  };
}

const calculator = createCalculator();
calculator.add(10);

const calculator2 = createCalculator();
calculator2.add(10);
calculator2.subtract(-10);

const calculator3 = createCalculator();
calculator3.add(10);
calculator3.subtract(-10);
calculator3.clear();

console.log(calculator.getTotal());
console.log(calculator2.getTotal());
console.log(calculator3.getTotal());
```

# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Crea tu propio método map

![Spoiler Shield](https://gifdb.com/images/high/coding-animated-laptop-flow-stream-ja04010rm5o68zfk.gif)

```js
export function myMap(array, func) {
  // Tu código aquí 👈
  let result = [];
  for (let element of array) {
    result.push(func(element));
  }

  return result;
}

console.log(myMap([1, 2, 3, 4], (num) => num * 2));
console.log(
  myMap(
    [
      { name: "michi", age: 2 },
      { name: "firulais", age: 6 },
    ],
    (pet) => pet.name
  )
);
```
