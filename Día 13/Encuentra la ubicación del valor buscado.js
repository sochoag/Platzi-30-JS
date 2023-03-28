export function searchValue(array, value) {
  // Tu código aquí 👈
  let result = undefined;
  array.forEach((element, index) => {
    if (element.includes(value)) {
      result = {
        row: index,
        column: element.indexOf(value),
      };
    }
  });
  if (!result) {
    throw new Error("Valor no encontrado");
  }
  return result;
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const value = 45;

console.log(searchValue(array, value));

// Output: "Valor no encontrado";
