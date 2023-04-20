# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Implementa singleton en un chat

![Spoiler Shield](https://media.giphy.com/media/MZocLC5dJprPTcrm65/giphy.gif)

```js
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
```
