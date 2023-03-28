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
