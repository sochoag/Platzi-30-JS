# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Encuentra al michi mas famoso

![Spoiler Shield](https://www.kevinwanke.com/wp-content/uploads/2021/06/marcel-friedrich-XC_28Kk25F0-unsplash.jpg)

```js
function findFamousCats(cats) {
  const reducedCats = cats.map((cat) => {
    return {
      name: cat.name,
      totalFollowers: Object.values(cat.followers).reduce(
        (total, rs) => total + rs
      ),
    };
  });

  const maxFollowers = Math.max(
    ...reducedCats.map((cat) => cat.totalFollowers)
  );

  const result = reducedCats.filter(
    (cat) => cat.totalFollowers == maxFollowers
  );

  return result.map((cat) => cat.name);
}

console.log(
  findFamousCats([
    {
      name: "Mimi",
      followers: [320, 120, 70],
    },
    {
      name: "Milo",
      followers: [400, 300, 100, 200],
    },
    {
      name: "Gizmo",
      followers: [250, 750],
    },
  ])
);

console.log(
  findFamousCats([
    {
      name: "Luna",
      followers: [500, 200, 300],
    },
    {
      name: "Michi",
      followers: [100, 300],
    },
  ])
);
```

# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Obtén el promedio de los estudiantes

![Spoiler Shield](https://miro.medium.com/v2/resize:fit:439/1*ZYyXvhYDGvELzYoXYpPLMg.png)

```js
function getStudentAverage(students) {
  // Tu código aquí 👈
  const result = {};

  result.students = students.map((student) => {
    const sum = student.grades.reduce((accu, curr) => accu + curr);
    const size = student.grades.length;
    return {
      name: student.name,
      average: parseFloat((sum / size).toFixed(2)),
    };
  });

  result.classAverage =
    result.students.reduce((accu, curr) => {
      accu += curr.average;
      return accu;
    }, 0) / result.students.length;

  result.classAverage = parseFloat(result.classAverage.toFixed(2));

  return result;
}

console.log(
  getStudentAverage([
    {
      name: "Pedro",
      grades: [90, 87, 88, 90],
    },
    {
      name: "Jose",
      grades: [99, 71, 88, 96],
    },
    {
      name: "Maria",
      grades: [92, 81, 80, 96],
    },
  ])
);
```
