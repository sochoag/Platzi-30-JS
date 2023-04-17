// En este desafío tendrás que construir un organizador de tareas para planificar tus actividades diarias junto con sus correspondientes etiquetas.

// Debes crear un closure que use Maps y Sets para devolver 2 funciones:

// addTask(task, tags): esta función te ayudará a agregar tareas al Map. Es importante que conviertas todas las letras de la tarea en minúsculas usando toLowerCase para verificar si la tarea existe. En caso de que exista, solo se agregarán las nuevas etiquetas como un Set, en caso contrario, se crearán desde cero.

// printTasks(): esta función te devolverá todas las tareas creadas con sus etiquetas.

// Ejemplo 1:

// Input:

// const myTaskManager = taskManager()
// addTask("Comprar leche", ["compras", "urgente"]);
// addTask("Sacar al perro", ["mascotas"]);
// addTask("Hacer ejercicio", ["salud"]);

// printTasks();

// Output:

// Map(3) { "comprar leche" → Set(2), "sacar al perro" → Set(1), "hacer ejercicio" → Set(1) }

// Ejemplo 2:

// Input

// const myTaskManager = taskManager()
// addTask("Comprar leche", ["compras", "urgente"]);
// addTask("Sacar al perro", ["mascotas"]);
// addTask("Hacer ejercicio", ["salud"]);
// addTask("Comprar leche", ["lácteos"]);

// Output:

// Map(3) { "comprar leche" → Set(3), "sacar al perro" →

export function taskManager() {
  // Creo un nuevo Map
  let tasks = new Map();

  function addTask(task, tags) {
    // Se convierte el nombre de la tarea a lowercase para ser comparadad
    task = task.toLowerCase();

    // En caso de existir la tarea, agrega nuevos tags a su Set de tags
    if (tasks.has(task)) {
      const existingTags = tasks.get(task);
      console.log(existingTags);
      tags.forEach((tag) => existingTags.add(tag));
    }
    // De no existir la tarea crea un nuevo set que contenga sus tags y adicionalmente
    // agrega la tarea ale Map de tareas
    else {
      const newTags = new Set(tags);
      tasks.set(task, newTags);
    }
  }
  function printTasks() {
    // Retorno las tareas
    return tasks
  }
  return { addTask, printTasks };
}

const myTaskManager = taskManager();
myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);
myTaskManager.addTask("Sacar al perro", ["rutina"]);
myTaskManager.addTask("Hacer ejercicio", ["salud"]);

console.log(myTaskManager.printTasks());
