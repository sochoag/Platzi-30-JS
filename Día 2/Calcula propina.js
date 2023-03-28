function calculateTip(billAmount, tipPercentage) {
  // Tu código aquí 👈
  return billAmount * (tipPercentage / 100);
}

console.log(calculateTip(100, 10));
console.log(calculateTip(1524.33, 25));
console.log(calculateTip(0, 0));
