function getStudentAverage(students) {
  // Tu código aquí 👈
  const result = {}

  result.students = students.map((student) => {
      const sum = student.grades.reduce((accu, curr) => accu + curr)
      const size = student.grades.length
      return {
        name: student.name,
        average: parseFloat((sum/size).toFixed(2))
      }
  })
  
  result.classAverage=result.students.reduce((accu, curr) => {
    accu += curr.average
    return accu
  }, 0) / result.students.length

  result.classAverage = parseFloat(result.classAverage.toFixed(2))

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

// Output: {
//   classAverage: 88.17,
//   students: [
//     {
//       name: "Pedro",
//       average: 88.75
//     },
//     {
//       name: "Jose",
//       average: 88.5
//     },
//     {
//       name: "Maria",
//       average: 87.25
//     }
//   ]
// }
