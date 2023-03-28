export function createTaskPlanner() {
  // Tu código aquí 👈
  const tasks = [];
  function addTask(task) {
    task.completed = false;
    tasks.push(task);
  }

  function removeTask(value) {
    tasks.forEach((task, it) => {
      if (task.name == value || task.id == value) {
        tasks.splice(it, 1);
      }
    });
  }

  function getTasks() {
    return tasks;
  }

  function getPendingTasks() {
    const result = [];
    tasks.forEach((task) => {
      if (!task.completed) {
        result.push(task);
      }
    });
    return result;
  }

  function getCompletedTasks() {
    const result = [];
    tasks.forEach((task) => {
      if (task.completed) {
        result.push(task);
      }
    });
    return result;
  }

  function markTaskAsCompleted(value) {
    tasks.forEach((task) => {
      if (task.name == value || task.id == value) {
        task.completed = true;
      }
    });
  }

  function getSortedTasksByPriority() {
    const result = [];
    for (let i = 1; i <= 3; i++) {
      tasks.forEach((task) => {
        if (task.priority == i) {
          result.push(task);
        }
      });
    }
    return result;
  }

  function filterTasksByTag(tag) {
    const result = [];
    tasks.forEach((task) => {
      task.tags.forEach((t) => {
        if (t == tag) {
          result.push(task);
        }
      });
    });
    return result;
  }

  function updateTask(taskId, updates) {
    tasks.forEach((task) => {
      if (task.id == taskId) {
        Object.entries(updates).forEach((up) => {
          task[up[0]] = up[1];
        });
      }
    });
  }

  return {
    addTask,
    removeTask,
    getTasks,
    getPendingTasks,
    getCompletedTasks,
    markTaskAsCompleted,
    getSortedTasksByPriority,
    filterTasksByTag,
    updateTask,
  };
}

const planner = createTaskPlanner();

planner.addTask({
  id: 1,
  name: "Comprar leche",
  priority: 1,
  tags: ["shopping", "home"],
});

planner.addTask({
  id: 2,
  name: "Llamar a Juan",
  priority: 2,
  tags: ["personal"],
});

planner.addTask({
  id: 4,
  name: "Llamar a Juanita",
  priority: 3,
  tags: ["personal"],
});

console.log(planner.getSortedTasksByPriority());
