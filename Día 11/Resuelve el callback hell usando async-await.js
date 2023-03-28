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

export async function runCode() {
  const strings = [];
  const res1 = await doTask1();
  const res2 = await doTask2();
  const res3 = await doTask3();

  strings.push(res1);
  strings.push(res2);
  strings.push(res3);

  return strings;
}

console.log(await runCode());
