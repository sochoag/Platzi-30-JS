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
