# Escudo anti-spoilers

![Michi durmiendo](https://cdn.dribbble.com/users/1787323/screenshots/6604852/lazycat_code-01_4x.png)

Si vienes de aprender Python, la lista te resultará muy familiar e intuitiva de usar.

A continuación dejo mi solución, pudiendo haber otras soluciones válidas

Saludos a todos y **Nunca pares de aprender** 😎

```js
export function removeDuplicates(values) {
  let set = new Set();
  values.forEach((element) => {
    set.add(element);
  });
  return Array.from(set);
}
```

# Escudo anti-spoilers

![Nyan Cat Programming](https://hostrider.com/images/tw.png)

Algo que no queda muy claro es que se debe generar un Set por cada tarea donde se contenga los tags.

Por lo demás un excelente reto.

**Nunca pares de aprender**

```js
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
    return tasks;
  }
  return { addTask, printTasks };
}
```
