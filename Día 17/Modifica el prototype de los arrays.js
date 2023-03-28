export function arrayModified() {
  // Tu código aquí 👈
  function myFilter(callback) {
    const filterArray = [];
    for (let elem of this) {
      if (callback(elem)) {
        filterArray.push(elem);
      }
    }
    return filterArray;
  }
  Array.prototype.myFilter = myFilter;
}

const array = [1, 2, 3, 4, 5, 6];

array.myFilter((num) => num % 2 === 0);
