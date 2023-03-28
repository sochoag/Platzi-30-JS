export function protectDog(dog) {
  // Tu código aquí 👈
  const dogCopy = Object.assign({}, dog);

  for (const prop in dogCopy) {
    const isObject = typeof dogCopy[prop] == "object";
    if (isObject) {
      Object.freeze(dogCopy[prop]);
    }
  }
  Object.freeze(dogCopy);
  return dogCopy;
}

const resp = protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
});

console.log(resp);
