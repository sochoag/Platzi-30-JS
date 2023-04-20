// class Node {
//   // Esta clase Node representa un nodo en la lista
//   constructor(value) {
//     // tiene un valor y un enlace al siguiente nodo.
//     this.value = value;
//     this.next = null;
//   }
// }

// // La clase LinkedList es la lista en sí misma
// class LinkedList {
//   constructor() {
//     // Tiene una referencia al primer nodo (head)
//     this.head = null;
//     // también tiene una referencia al último nodo (tail)
//     this.tail = null;
//     // y un contador de longitud (length).
//     this.length = 0;
//   }

//   // El método append agrega un nuevo nodo al final de la lista
//   append(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       // Si la lista está vacía, head y tail apuntan al nuevo nodo
//       this.head = newNode;
//       this.tail = newNode;
//       // Si la lista no está vacía,
//     } else {
//       // El enlace next del último nodo en la lista apunta al nuevo nodo
//       this.tail.next = newNode;
//       // y tail se actualiza para que apunte al nuevo nodo
//       this.tail = newNode;
//     }
//     this.length++;
//   }

//   // El método prepend agrega un nuevo nodo al inicio de la lista
//   prepend(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       // Si la lista está vacía, head y tail apuntan al nuevo nodo
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       // Si la lista no está vacía,
//       // el enlace next del nuevo nodo apunta al primer nodo en la lista
//       newNode.next = this.head;
//       // y head se actualiza para que apunte al nuevo nodo.
//       this.head = newNode;
//     }
//     this.length++;
//   }

//   // Elimina un nodo por su valor
//   delete(value) {
//     // Si la lista está vacía, no se hace nada
//     if (!this.head) {
//       return null;
//     }
//     // Si el nodo a eliminar es el primer nodo en la lista
//     if (this.head.value === value) {
//       // El puntero head se actualiza para apuntar al siguiente nodo
//       this.head = this.head.next;
//       this.length--;
//       return;
//     }
//     // En caso contrario
//     // se recorre la lista buscando el nodo anterior al que se quiere eliminar
//     let currentNode = this.head;
//     while (currentNode.next) {
//       // Una vez encontrado, se actualiza el puntero next del nodo anterior
//       // para que apunte al siguiente nodo después del que se quiere eliminar.
//       if (currentNode.next.value === value) {
//         currentNode.next = currentNode.next.next;
//         this.length--;
//         return;
//       }
//       currentNode = currentNode.next;
//     }
//   }
// }

export class Node {
  // Este código no debe ser modificado ❌
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Este código no debe ser modificado ❌
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
  }
}

export class LinkedListRecharged extends LinkedList {
  get(index) {
    // Si el index es < 0 o > length se levanta un error
    if (index < 0 || index > this.length - 1) {
      return null;
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

  insertAt(index, value) {
    // Si el index es < 0 o > length se levanta un error
    if (index < 0 || index > this.length - 1) {
      return null;
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

  removeAt(index) {
    // Si el index es < 0 o > length se levanta un error
    if (index < 0 || index > this.length - 1) {
      return null;
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
        const newNode = new Node(actual.next.value);
        newNode.next = actual.next.next;
        actual.value = newNode.value;
        actual.next = newNode.next;
        // Se retorna el valor eliminado
        return;
      }
      // Se vuelve a llamar la función dentro de la recurrencia
      return deleteValue();
    }
    // Se llama la funcion desde insertAt(index, value)
    return deleteValue();
  }
}

// Ejemplo 1
// const linkedList = new LinkedListRecharged();

// linkedList.append("30");
// linkedList.append("Días");
// linkedList.append("De javascript");

// console.log(linkedList.get(1));

// Ejemplo 2
// const linkedList = new LinkedListRecharged();

// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);

// console.log(linkedList);

// linkedList.insertAt(1, 5);

// console.log(linkedList);

// console.log(linkedList.toArray());

// Ejemplo 3

const linkedList = new LinkedListRecharged();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.removeAt(1);

console.log(linkedList.toArray());

Output: [1, 3];
