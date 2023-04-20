# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Task Planner

![Spoiler Shield](https://cdn.dribbble.com/users/1708816/screenshots/15637256/media/f9826f0af8a49462f048262a8502035b.gif)

```js
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
```
