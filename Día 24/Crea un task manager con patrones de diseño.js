// En este ejercicio, tu objetivo es implementar un sistema de manejo de tareas utilizando patrones de diseño.

// Deberás implementar los siguientes patrones de diseño para mejorar la funcionalidad del sistema:

// Observer: Notificar a los usuarios cuando una tarea sea completada.
// Proxy: Limitar el acceso a ciertas tareas para usuarios no autorizados.
// Decorator: Agregar una funcionalidad adicional a una tarea ya existente, como una fecha límite y una etiqueta de prioridad.
// Builder: Una alternativa para crear tareas complejas con múltiples propiedades.
// Singleton: Asegurarse de que solo haya una instancia del sistema de manejo de tareas en todo el programa.
// Deberás implementar la lógica de las siguientes claseslas siguientes propiedades y métodos:

// Task (exercise.js)

// id: un identificador único para cada tarea.
// description: una descripción de la tarea.
// completed: un booleano que indica si la tarea está completada o no.
// users: un array de usuarios asignados a la tarea.
// assignUser(): un método para asignar usuarios a una tarea
// completeTask(): un método que cambia el valor de la propiedad completed a true y llama a notifyUsers().
// notifyUsers(): un método para notificar a todos los usuarios asignados que la tarea fue completada.
// User (User.js)

// name: El nombre del usuario
// notify(task): un método que recibirá una tarea y le notificará al usuario que la tarea fue completada
// Authorization (Authorization.js)

// checkAuthorization(): un método el cual verificará si un ususario está autorizado para completar una tarea.
// TaskDecorator (TaskDecorator.js)

// task: recibirá una tarea ya hecha con la clase de Task
// deadline: fecha limite para completar la tarea en el siguiente formato (AAAA-MM-DD)
// priority: prioridad para completar la tarea (high, medium o low)
// Priority y deadline vendrán dentro de un objeto options

// TaskBuilder(TaskBuilder.js)

// task: Instanciará la clase task creada al inicio
// Deberá tener un método por cada uno de los siguientes datos: id, description, completed, users (debe ser capaz de recibir 1 o varios users), deadline, priority.
// TaskManager (TaskManager.js)

// tasks: un array vacío para almacenar las tareas
// getInstance(): un método que devuelva una instancia de TaskManager. Si ya hay una instancia existente, devuelve esa instancia en lugar de crear una nueva.
// addTask(task): un método para agregar tareas al array que debe verificar si esta hereda de la clase Task
// getTasks(): un método que regresará todas las tareas
// getTaskById(id): un método que buscará una tarea por su id y la retornará, en caso de no existir regresará null
// Ejemplo 1:

// Input:
// const taskManager1 = TaskManager.getInstance();
// const taskManager2 = TaskManager.getInstance();

// taskManager1 === taskManager2

// Output: true

// Ejemplo 2

// Input:
// const taskManager = TaskManager.getInstance();
// const mockTask = new Task(1, "Mock task")

// taskManager.addTask(new mockTask);
// taskManager.getTasks();

// Output:
// [
//   { id: 1, description: 'Mock task', completed: false, users: [] }
// ]

// Ejemplo 3:

// Input:
// const authorization = new Authorization()
// const user1 = new User("Juan")
// const user2 = new User("Maria")
// const task = new Task('4', 'Comprar pan')
// task.assignUser(user1)

// authorization.checkAuthorization(user2, task)

// Output:
// Error("No autorizado")

// Ejemplo 4:

// Input:
// const task = new Task('5', 'Pasear al perro')
// const taskDecorator = new TaskDecorator(task, { deadline: '2023-03-31', priority: 'alta' })

// console.log(taskDecorator)

// Output:

// {
//   task: Task {
//     id: '5',
//     description: 'Pasear al perro',
//     completed: false,
//     users: []
//   },
//   deadline: '2023-03-31',
//   priority: 'alta'
// }

export class Task {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.completed = false;
    this.users = [];
  }

  assignUser(user) {
    if (user instanceof User) {
      this.users.push(user);
    } else {
      throw new Error("Debe pasar como parametro una instancia de User");
    }
  }

  completeTask() {
    this.completed = true;
    this.notifyUsers();
  }

  notifyUsers() {
    this.users.forEach((user) => user.notify(this));
  }
}

export class User {
  constructor(name) {
    this.name = name;
  }

  notify(task) {
    return `La tarea ${task.id} fue completada`;
  }
}

export class Authorization {
  checkAuthorization(user, task) {
    const isAutorized = task.users.some((task_user) => task_user == user);
    if (isAutorized) {
      return true;
    }
    throw new Error("No autorizado");
  }
}

export class TaskDecorator {
  constructor(task, options) {
    this.task = task;
    this.priority = "";
    this.deadline = "";
    this.checkDeadlineFormat(options.deadline);
    this.checkPriority(options.priority);
  }

  checkDeadlineFormat(deadline) {
    const regex = /\d{4}-\d{2}-\d{2}/;
    const isValidFormat = regex.test(deadline);
    if (isValidFormat) {
      this.deadline = deadline;
    } else {
      this.deadline = "2023-04-19";
    }
  }

  checkPriority(priority) {
    const options = ["high", "medium", "low", "alta", "media", "baja"];
    const isValidPriority = options.some(
      (option) => option == priority.toLowerCase()
    );
    if (isValidPriority) {
      this.priority = priority.toLowerCase();
    } else {
      this.priority = "baja";
    }
  }

  assignUser(user) {
    if (user instanceof User) {
      this.task.assignUser(user);
    } else {
      throw new Error("Debe pasar como parametro una instancia de User");
    }
  }

  completeTask() {
    this.task.completeTask();
  }

  notifyUsers() {
    this.task.notifyUsers();
  }
}

export class TaskManager {
  constructor() {
    this.tasks = [];
  }

  static getInstance() {
    if (!TaskManager.instance) {
      TaskManager.instance = new TaskManager();
    }
    return TaskManager.instance;
  }

  addTask(task) {
    if (task instanceof Task) {
      this.tasks.push(task);
    } else {
      throw new Error("Debe pasar como parámetro una instancia de tarea");
    }
  }

  getTasks() {
    return this.tasks;
  }

  getTaskById(id) {
    const task = this.tasks.find((task) => task.id == id);
    return task ? task : null;
  }
}

export class TaskBuilder {
  constructor() {
    this.id = undefined;
    this.description = undefined;
    this.completed = undefined;
    this.users = undefined;
    this.deadline = undefined;
    this.priority = undefined;
  }

  setId(id) {
    this.id = id;
  }

  setDescription(description) {
    this.description = description;
  }

  setCompleted(completed) {
    this.completed = completed;
  }

  setUsers(users) {
    this.users = users;
  }

  setDeadline(deadline) {
    this.deadline = deadline;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  build() {
    const task = new Task(this.id, this.description);
    this.users.forEach((user) => task.assignUser(user));
    // if (this.deadline && this.priority) {
    //   const taskDecorator = new TaskDecorator(task, {
    //     deadline: this.deadline,
    //     priority: this.priority,
    //   });
    //   return taskDecorator;
    // }
    task.deadline = this.deadline;
    task.priority = this.priority;
    return task;
  }
}

// Ejemplo 1
// const taskManager1 = TaskManager.getInstance();
// const taskManager2 = TaskManager.getInstance();

// console.log(taskManager1 === taskManager2);

// Ejemplo 2
const taskManager = TaskManager.getInstance();
const mockTask = new Task(1, "Mock task");

taskManager.addTask(mockTask);
console.log(taskManager.getTasks());
console.log(taskManager.getTaskById(1));

// const authorization = new Authorization();
// const user1 = new User("Juan");
// const user2 = new User("Maria");
// const task = new Task("4", "Comprar pan");
// task.assignUser(user1);
// authorization.checkAuthorization(user2, task);

// const task = new Task("5", "Pasear al perro");
// const taskDecorator = new TaskDecorator(task, {
//   deadline: "2023-03-31",
//   priority: "alta",
// });

// console.log(taskDecorator);
