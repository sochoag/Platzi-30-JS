// En este desafío, tu objetivo es implementar una singly linked list para almacenar información sobre pacientes de un hospital. Cada nodo de la lista representará a un paciente y tendrá los siguientes campos:

// Nombre del paciente (string)
// Edad del paciente (number)
// Número de cama asignada al paciente (number)
// La lista deberá tener los siguientes métodos:

// addPatient(name, age): agrega un nuevo paciente a la lista, asignándole la próxima cama disponible. Si no hay camas disponibles, debe lanzar un error con el mensaje "No hay camas disponibles".

// removePatient(name): remueve al paciente con el nombre especificado de la lista y libera su cama. Si el paciente no se encuentra en la lista, debe lanzar un error con el mensaje "Paciente no encontrado".

// getPatient(name): retorna la información del paciente con el nombre especificado en el siguiente formato { name, age, bedNumber }. Si el paciente no se encuentra en la lista, debe lanzar un error con el mensaje "Paciente no encontrado".

// getPatientList(): retorna una lista con la información de todos los pacientes en la lista, cada paciente deberá tener el siguiente formato { name, age, bedNumber }.

// getAvailableBeds(): retorna un número con el total de camas disponibles.

// Recuerda usar la sintaxis throw new Error() para los errores

// Aquí tienes una guía paso a paso de cómo implementar la singly linked list:

// Ejemplo 1:

// Input:
// const list = new PatientList(3)
// list.addPatient("Paciente 1", 20)
// list.addPatient("Paciente 2", 30)

// list.getPatientList()
// Output:

// [
//   { name: "Paciente 1", age: 20, bedNumber: 1 },
//   { name: "Paciente 2", age: 30, bedNumber: 2 },
// ]

// Ejemplo 2:

// Input:
// const list = new PatientList(3)
// list.addPatient("Paciente 1", 20)
// list.addPatient("Paciente 2", 30)

// list.getPatient("Paciente 1")

// Output:
// {
//   name: "Paciente 1",
//   age: 20,
//   bedNumber: 1,
// }

// Ejemplo 3:

// Input:
// const list = new PatientList(3)
// list.addPatient("Paciente 1", 20)
// list.addPatient("Paciente 2", 30)

// list.removePatient("Paciente 1")

// list.getPatientList()

// Output:

// [
//   { name: "Paciente 2", age: 30, bedNumber: 2 },
// ]

export class Node {
  constructor(name, age, bedNumber) {
    this.name = name;
    this.age = age;
    this.bedNumber = bedNumber;
    this.next = null;
  }
}

export class PatientList {
  constructor(beds) {
    this.beds = Array.from({ length: beds }, (_, i) => i + 1);
    this.lenght = 0;
    this.head = null;
    this.tail = null;
  }

  addPatient(name, age) {
    if (this.beds.length != 0) {
      const newPatient = new Node(name, age, this.beds[0]);
      this.beds.shift();
      if (!this.head) {
        this.head = newPatient;
        this.tail = newPatient;
      } else {
        this.tail.next = newPatient;
        this.tail = newPatient;
      }
      this.lenght++;
      return;
    }
    throw new Error("No hay camas disponibles");
  }

  removePatient(name) {
    if (this.head.name == name) {
      this.beds.push(this.head.bedNumber);
      this.head = this.head.next;
      this.lenght--;
      return;
    }
    let currentPatient = this.head;
    while (currentPatient.next) {
      if (currentPatient.next.name == name) {
        this.beds.push(currentPatient.next.bedNumber);
        currentPatient.next = currentPatient.next.next;
        this.lenght--;
        return;
      }
      currentPatient = currentPatient.next;
    }
    throw new Error("Paciente no encontrado");
  }

  getPatient(name) {
    if (this.head.name == name) {
      return {
        name: this.head.name,
        age: this.head.age,
        bedNumber: this.head.bedNumber,
      };
    }
    let currentPatient = this.head;
    while (currentPatient.next) {
      if (currentPatient.next.name == name) {
        return {
          name: currentPatient.next.name,
          age: currentPatient.next.age,
          bedNumber: currentPatient.next.bedNumber,
        };
      }
    }
    throw new Error("Paciente no encotrado");
  }

  getPatientList() {
    const patientListArr = [];
    if (this.head) {
      patientListArr.push({
        name: this.head.name,
        age: this.head.age,
        bedNumber: this.head.bedNumber,
      });
    }
    let currentPatient = this.head;
    while (currentPatient.next) {
      patientListArr.push({
        name: currentPatient.next.name,
        age: currentPatient.next.age,
        bedNumber: currentPatient.next.bedNumber,
      });
      currentPatient = currentPatient.next;
    }
    return patientListArr;
  }

  getAvailableBeds() {
    return this.beds.length;
  }
}

// Ejemplo 1

// const list = new PatientList(3);
// list.addPatient("Paciente 1", 20);
// list.addPatient("Paciente 2", 30);

// console.log(list.getPatientList());

// // Output:
// // [
// //   { name: "Paciente 1", age: 20, bedNumber: 1 },
// //   { name: "Paciente 2", age: 30, bedNumber: 2 },
// // ]

// Ejemplo 2
// const list = new PatientList(3);
// list.addPatient("Paciente 1", 20);
// list.addPatient("Paciente 2", 30);

// console.log(list.getPatient("Paciente 1"));

// Output:
// {
//   name: "Paciente 1",
//   age: 20,
//   bedNumber: 1,
// }

// Ejemplo 3

const list = new PatientList(3);
list.addPatient("Paciente 1", 20);
list.addPatient("Paciente 2", 30);
list.addPatient("Paciente 3", 50);

list.removePatient("Paciente 2");
// list.addPatient("Paciente 5", 50);

console.log(list.getPatientList());
