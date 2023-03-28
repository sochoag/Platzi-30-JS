// En este desafío, tendrás que aplicar el patrón de diseño Singleton en un Chat.

// Tu objetivo es crear la lógica en la clase Chat para garantizar que exista una única instancia de la clase en todo momento.

// Además, la clase Chat deberá contener los siguientes métodos:

// sendMessage(message): Este método debe permitir enviar un mensaje a todos los usuarios en la lista, accediendo al método receiveMessage de cada instancia de usuario.

// addUser(user): Este método debe agregar un nuevo usuario a la lista, verificando que sea una instancia de la clase User (el código de esta clase la puedes ver dentro del sistema de archivos del playground).

// removeUser(name): Este método te permitirá eliminar un usuario de la lista por su nombre.

export class User {
  // Este código no debe ser editado ❌
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  receiveMessage(message) {
    this.messages.push(message);
  }
}

export class Chat {
  // Tu código aquí 👈
  constructor() {
    if (!Chat.instance) {
      this.users = [];
      Chat.instance = Object.freeze(this);
    }
    return Chat.instance;
  }
  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
    }
  }
  removeUser(userName) {
    const userToDelete = this.users.findIndex((user) => user.name == userName);
    this.users.splice(userToDelete, 1);
  }
  sendMessage(mesagge) {
    this.users.forEach((user) => {
      user.messages.push(mesagge);
    });
  }
}

const chat = new Chat();

console.log(chat);

const user1 = new User("Davo1");
const user2 = new User("Davo2");
const user3 = new User("Davo3");
const user4 = new User("Davo4");
const user5 = new User("Davo5");
const user6 = new User("Davo6");
const user7 = new User("Davo7");
const user8 = new User("Davo8");

chat.addUser(user1);
chat.addUser(user2);
chat.addUser(user3);
chat.addUser(user4);
chat.addUser(user5);
chat.addUser(user6);
chat.addUser(user7);
chat.addUser(user8);
chat.removeUser("Davo5");
chat.sendMessage("Hola bbsuqui");

console.log(chat.users);
