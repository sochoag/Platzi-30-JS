export class User {
  // Tu código aquí 👈
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this._friends = [];
    this._messages = [];
  }

  // Setters

  set message(newMessage) {
    if (newMessage !== "") {
      this._messages.push(newMessage);
    }
  }

  set name(newName) {
    if (newName !== "") {
      this._name = newName;
      return;
    }
    throw new Error("The name must not be empty");
  }

  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
      return;
    }
    throw new Error("The new age should be positive");
  }

  // Getters

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  addFriend(amigo) {
    if (amigo instanceof User) {
      this._friends.push(amigo);
    }
  }

  sendMessage(message, friend) {
    if (typeof message === "string" && friend instanceof User) {
      this._messages.push(message);
      friend.message = message;
    }
  }

  showMessages() {
    return this._messages;
  }
}

const usuario1 = new User("Juan", 20);
const usuario2 = new User("Maria", 25);
usuario1.addFriend(usuario2);
usuario1.sendMessage("Hola Maria!", usuario2);

console.log(usuario1.showMessages());
