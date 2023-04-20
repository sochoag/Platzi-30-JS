# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Calcula año bisiesto

![Spoiler Shield](https://cdn.dribbble.com/users/1787323/screenshots/6604852/lazycat_code-01_4x.png)

```js
function calculateTip(billAmount, tipPercentage) {
  return billAmount * (tipPercentage / 100);
}

console.log(calculateTip(100, 10));
console.log(calculateTip(1524.33, 25));
console.log(calculateTip(0, 0));
```

# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Obten informacion de mascota

![Spoiler Shield](https://i.pinimg.com/originals/d0/75/f8/d075f82b2f1ae5d67f7b8600513e1654.jpg)

```js
function getPetExerciseInfo(type, age) {
  // Tu Código aquí 👈

  const responses = {
    perro: {
      0: "Los cachorros necesitan pequeñas y frecuentes sesiones de juego",
      1: "Los perros a esta edad necesitan caminatas diarias y sesiones de juego",
      2: "Los perros viejos necesitan caminatas más cortas",
    },
    gato: {
      0: "Los gatitos necesitan frecuentes sesiones de juego",
      1: "Los gatos a esta edad necesitan jugar diariamente",
      2: "Los gatos viejos necesitan sesiones de juego más cortas",
    },
    ave: {
      0: "Las aves jóvenes necesitan mucho espacio para volar",
      1: "Las aves necesitan jugar diariamente y un lugar para volar",
      2: "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar",
    },
  };

  if (responses.hasOwnProperty(type)) {
    if (age >= 1 && age <= 7) {
      return responses[type][1];
    } else if (age > 7) {
      return responses[type][2];
    }
    return responses[type][0];
  }
  return "Tipo de mascota inválida";
}

console.log(getPetExerciseInfo("perro", 3));
console.log(getPetExerciseInfo("gato", 8));
console.log(getPetExerciseInfo("Mamut", 25));
```

# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Dibuja un triángulo

![Spoiler Shield](https://http.cat/100)

```js
function printTriangle(size, character) {
  // Inicializa mi array de elementos
  const triangle = [];
  // Empieza a iterar desde 1 hasta que el iterador sea igual a size
  for (let i = 1; i <= size; i++) {
    // inicializa una variable llamada "characters" que contendrá una cadena de caracteres repetidos.
    // La cantidad de caracteres repetidos dependerá del valor de "i".
    let spaces = " ".repeat(size - i);
    // Después repetimos el carácter a pintar la cantidad de veces del iterador
    let characters = character.repeat(i);
    // Para después juntar el número de espacios y caracteres en un solo string
    let figure = `${spaces}${characters}`;
    // Y al final mandar esto al array inicial
    triangle.push(figure);
  }

  // La prueba nos pide un string, por lo que usaremos join() para convertir
  // El array en un string donde las comas sean reemplazadas por el salto de linea
  return triangle.join("\n");
}

console.log(printTriangle(5, "*"));
console.log(printTriangle(6, "$"));
```
