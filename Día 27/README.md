# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Agrega métodos a singly linked list

![Spoiler Shield](https://ucucfe.com.ua/assets/uploads/2018/04/happy-joy-GIF-downsized.gif)

Decidí complicarme la vida y hacerlo con recursividad y closures 😂 a continuación mi solución explicada con comentarios casi en cada línea tratando de que sea lo mas entendible posible

## **Nunca pares de aprender 🦾**

### `get(index)`

```js
get(index) {
  // Si el index es < 0 o > length se levanta un error
  if (index < 0 || index > this.length - 1) {
    return null
  }

  // Variable para almacenar profundiad actual
  let actual = this;

  // Funcion recursiva para subir capas
  function getValue() {
    // Si está en el head el actual es el primer nodo
    if (actual.head) {
      actual = actual.head;
    }
    // Si no está en el head diminuye el index y asigna al siguiente nodo como el actual
    else {
      index = index - 1;
      actual = actual.next;
    }
    // En caso de que el index llegue a 0 se retorna el valor del nodo
    if (index == 0) {
      return actual.value;
    }
    // Se vuelve a llamar la función dentro de la recurrencia
    return getValue();
  }
  // Se llama la funcion desde get(index)
  return getValue();
}
```

### `insertAt(index,value)`

```js
insertAt(index, value) {
  // Si el index es < 0 o > length se levanta un error
  if (index < 0 || index > this.length - 1) {
    return null
  }

  // Variable para almacenar profundiad actual
  let actual = this;
  // Se aumenta en 1 a la longitud de la lista
  this.length++;
  // Funcion recursiva para subir capas
  function appendValue() {
    // Si está en el head el actual es el primer nodo
    if (actual.head) {
      actual = actual.head;
    }
    // Si no está en el head diminuye el index y asigna al siguiente nodo como el actual
    else {
      index = index - 1;
      actual = actual.next;
    }
    // En caso de que el index llegue a 0 quiere decir que estamos en la posicion a insertar
    if (index == 0) {
      // Se crea una nueva instancia de nodo con el valor a insertar
      let oldNode = new Node(actual.value);
      // Se "COPIA" todo el contenido del nodo en el que estamos a el nodo anterior
      oldNode.next = actual.next;
      // Se reemplaza el nodo actual con el valor que llega por parametro
      actual.value = value;
      // Se reemplaza el siguiente nodo con el nodo creado
      actual.next = oldNode;
      // Se retorna el valor insertado
      return value;
    }
    // Se vuelve a llamar la función dentro de la recurrencia
    return appendValue();
  }
  // Se llama la funcion desde insertAt(index, value)
  return appendValue();
}
```

### `toArray()`

```js
toArray() {
  // Variable para almacenar profundiad actual y array a retornar
  let actual = this;
  const arr = [];

  // Funcion recursiva para subir capas
  function pushToArray() {
    // Si está en el head el actual es el primer nodo
    if (actual.head) {
      actual = actual.head;
    }
    // Se actual.next es null quiere decir que es la ultima capa
    // Entonces se agrega el ultmo valor y se retorna el arreglo
    if (actual.next == null) {
      arr.push(actual.value);
      return arr;
    }
    // Si no está en el head diminuye el index y asigna al siguiente nodo como el actual
    else {
      arr.push(actual.value);
      actual = actual.next;
    }
    // Se vuelve a llamar la función dentro de la recurrencia
    return pushToArray();
  }
  // Se llama la funcion desde toArray()
  return pushToArray();
}
```

### `removeAt(index)`

```js
removeAt(index) {
  // Si el index es < 0 o > length se levanta un error
  if (index < 0 || index > this.length - 1) {
    return null
  }

  // Variable para almacenar profundiad actual
  let actual = this;
  // Se disminuye en 1 a la longitud de la lista
  this.length--;
  // Funcion recursiva para subir capas
  function deleteValue() {
    // Si está en el head el actual es el primer nodo
    if (actual.head) {
      actual = actual.head;
    }
    // Si no está en el head diminuye el index y asigna al siguiente nodo como el actual
    else {
      index = index - 1;
      actual = actual.next;
    }
    // En caso de que el index llegue a 0 quiere decir que estamos en la posicion a eliminar
    if (index == 0) {
      // Se crea una nueva instancia de nodo excluyendo el valor a eliminar
      const newNode = new Node(actual.next.value)
      newNode.next = actual.next.next
      actual.value = newNode.value
      actual.next = newNode.next
      // Se retorna el valor eliminado
      return;
    }
    // Se vuelve a llamar la función dentro de la recurrencia
    return deleteValue();
  }
  // Se llama la funcion desde insertAt(index, value)
  return deleteValue();
}
```

# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Implementación de un singly linked list

![Spoiler Shield](https://media.wired.com/photos/593221d8b8eb31692072dedf/master/w_2560%2Cc_limit/MJ-giphy.gif)

Con los conceptos claros de una singly linked list resulta muy sencillo 😎

## **Nunca pares de aprender 🦾**

### `Node.js`

```js
export class Node {
  constructor(name, age, bedNumber) {
    this.name = name;
    this.age = age;
    this.bedNumber = bedNumber;
    this.next = null;
  }
}
```

### `exercise.js`

```js
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
```
