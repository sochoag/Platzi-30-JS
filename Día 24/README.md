# Escudo Anti-Spoilers

![Perrito programando](https://i.pinimg.com/originals/51/0d/a9/510da98abbe03f7ff9a7ce6eb0f362e7.jpg)

### Authorization.js

Todo claro con la explicación de esta parte 👌

```js
export class Authorization {
  checkAuthorization(user, task) {
    const isAutorized = task.users.some((task_user) => task_user == user);
    if (isAutorized) {
      return true;
    }
    throw new Error("No autorizado");
  }
}
```

### TaskBuilder.js (Version que a mi parecer deberia ser)

A mi parecer para ingresar los campos de `deadline` y `priority` se debe hacer uso de una instancia `TaskDecorator`, ya que por defecto la instancia `Task` está preparada para recibir solamente el `id` y `description` mientras que con `TaskDecorator` añade más funcionalidades (Justamente la funcion de este sistema de diseño)

```js
import { Task } from "./exercise";
import { TaskDecorator } from "./TaskDecorator";

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
    if (this.deadline && this.priority) {
      const taskDecorator = new TaskDecorator(task, {
        deadline: this.deadline,
        priority: this.priority,
      });
      return taskDecorator;
    }
  }
}
```

### TaskBuilder.js (Con la que apruebas el playground)

Aqui simplemente agrega atributos que no estan presentes en una instancia de `Task`

```js
import { Task } from "./exercise";

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
    task.deadline = this.deadline;
    task.priority = this.priority;
    return task;
  }
}
```

### TaskDecorator.js

```js
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
```

### TaskManager.js

```js
import { Task } from "./exercise";

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
```

```js
export class User {
  constructor(name) {
    this.name = name;
  }

  notify(task) {
    return `La tarea ${task.id} fue completada`;
  }
}
```

### exercise.js

```js
import { User } from "./User";

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
```
