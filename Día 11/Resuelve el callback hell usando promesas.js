function doTask1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task 1"), 300);
  });
}

function doTask2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task 2"), 300);
  });
}

function doTask3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task 3"), 300);
  });
}

export function runCode() {
  const strings = [];
  return new Promise((resolve) => {
    doTask1()
      .then((result) => {
        strings.push(result);
        return doTask2();
      })
      .then((result) => {
        strings.push(result);
        return doTask3();
      })
      .then((result) => {
        strings.push(result);
        resolve(strings);
      });
  });
}

runCode().then((response) => console.log(response));
