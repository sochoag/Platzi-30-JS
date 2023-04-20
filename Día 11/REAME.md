# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Promesas

![Spoiler Shield](https://images.ctfassets.net/f7xg7kmhsht8/2ISQM6mIoMucPx1ZUhLG8s/a47032dbdce85e7e02c888d910e625ad/banner.jpg?q=80&fm=jpg)

```js
export function sendEmail(email, subject, body) {
  // Tu código aquí 👈
  return new Promise((resolve, reject) => {
    if (email != "" && subject != "" && body != "") {
      setTimeout(() => {
        resolve({
          email,
          subject,
          body,
        });
      }, 2000);
    } else {
      setTimeout(() => {
        reject(new Error("Hacen falta campos para enviar el email"));
      }, 2000);
    }
  });
}
```

# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Callback hell usando promise

![Spoiler Shield](https://images.ctfassets.net/f7xg7kmhsht8/2ISQM6mIoMucPx1ZUhLG8s/a47032dbdce85e7e02c888d910e625ad/banner.jpg?q=80&fm=jpg)

### tasks.js

```js
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
```

### exercise.js

```js
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
```

# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Callback hell usando async-await

![Spoiler Shield](https://blog.alexdevero.com/wp-content/uploads/2020/06/08-06-20-how-javascript-async-await-works-and-how-to-use-it-blog.jpg)

### tasks.js

```js
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
```

### exercise.js

```js
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
```
