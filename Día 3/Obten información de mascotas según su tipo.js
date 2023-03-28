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
