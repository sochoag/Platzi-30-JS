# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Modifica el prototype de los arrays

![Spoiler Shield](https://thumbs.dreamstime.com/b/cat-programmer-glasses-works-computer-professional-concept-cat-programmer-glasses-works-computer-267015763.jpg)

```js
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
```

# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Crea un auto usando clases

![Spoiler Shield](https://res.cloudinary.com/teepublic/image/private/s--8kxs-wBm--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1640119173/production/designs/26519616_0.jpg)

```js
export class Car {
  // Tu código aquí 👈
  constructor(brand, model, year, mileage, state = false) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.state = state;
  }

  turnOn() {
    this.state = true;
  }

  turnOff() {
    this.state = false;
  }

  drive(kilometers) {
    if (this.state) {
      this.mileage += kilometers;
      return;
    }
    throw new Error("El auto está apagado");
  }
}
```
