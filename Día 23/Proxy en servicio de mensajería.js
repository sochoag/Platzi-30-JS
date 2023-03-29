// El objetivo de este ejercicio es crear un proxy que controle el acceso a un servicio de mensajería.

// En el sistema de archivos encontrarás un archivo llamado messages.js que representa al servicio de mensajería y cuenta con dos métodos: sendMessage(text) y getHistory(). Sin embargo, actualmente, no se verifica si el usuario que hace uso de la clase está logeado, por lo que es necesario implementar un proxy.

// Tu tarea es agregar la lógica necesaria de la clase MessagesProxy que actuará como intermediario entre los clientes y el servicio de mensajería, manteniendo los métodos de Messages.js, pero agregando una verificación de si el usuario está logeado antes de permitir el acceso al historial de mensajes o el envío de un mensaje. Si el usuario no está registrado, se deberá lanzar un error con el mensaje "Usuario no registrado".

// Recuerda hacer uso de throw new Error("")

// Además, deberás implementar la logica de la clase User con los métodos login(), logout() y isLoggedIn(), que permitirá determinar si el usuario está logeado o no.

// Ejemplo 1:

// Input:
// const user = new User("John")

// user.login()
// user.isLoggedIn()

// Output: true

// Ejemplo 2:

// Input:
// const user = new User("John")
// const messages = new Messages()
// const messagesProxy = new MessagesProxy(messages, user)

// user.login()
// messagesProxy.sendMessage("Hola")
// messagesProxy.getHistory()

// Output: ["Hola"]

// Ejemplo 3:

// Input:
// const user = new User("John")
// const messages = new Messages()
// const messagesProxy = new MessagesProxy(messages, user)

// messagesProxy.sendMessage("Hola")

// Output: Error("Usuario no registrado")

export class Messages {
  // No debes editar este código ❌
  constructor() {
    this.history = [];
  }

  sendMessage(text) {
    this.history.push(text);
  }

  getHistory() {
    return this.history;
  }
}

export class MessagesProxy {
  constructor(messages, user) {
    // Tu código aquí 👈
    this.messages = messages;
    this.user = user;
  }

  sendMessage(text) {
    // Tu código aquí 👈
    if (this.user.isLogged) {
      this.messages.sendMessage(text);
    } else {
      throw new Error("Usuario no registrado");
    }
  }

  getHistory() {
    // Tu código aquí 👈
    if (this.user.isLogged) {
      return this.messages.getHistory();
    } else {
      throw new Error("Usuario no registrado");
    }
  }
}

export class User {
  constructor(name) {
    this.name = name;
    this.isLogged = false;
    // Tu código aquí 👈
  }

  login() {
    // Tu código aquí 👈
    this.isLogged = true;
  }

  logout() {
    // Tu código aquí 👈
    this.isLogged = false;
  }

  isLoggedIn() {
    // Tu código aquí 👈
    return this.isLogged;
  }
}

const user = new User("John");
const messages = new Messages();
const messagesProxy = new MessagesProxy(messages, user);

user.login();
messagesProxy.sendMessage("Hola");
messagesProxy.getHistory();
