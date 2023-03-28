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
