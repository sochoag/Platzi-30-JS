function isLeapYear(year) {
  // Tu código aquí 👈
  if (year > 0) {
    if (year % 4 == 0 && year % 100 == 0) {
      return true;
    }
    if (year % 400 == 0 && year % 100 == 0) {
      return true;
    }
  }
  return false;
}

console.log(isLeapYear(2000));
console.log(isLeapYear(-2024));
console.log(isLeapYear(2035.5));
