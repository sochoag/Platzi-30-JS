# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Congela el objeto recursivamente

![Spoiler Shield](https://codecats.xyz/assets/images/codecats/830.png)

```js
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
```
