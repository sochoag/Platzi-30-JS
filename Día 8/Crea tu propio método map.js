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
