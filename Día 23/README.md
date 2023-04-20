# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Proxy en servicio de mensajeria

![Spoiler Shield](https://www.wired.com/wp-content/uploads/2015/03/855.gif)

### exercise.js

```js
export class MessagesProxy {
  constructor(messages, user) {
    this.messages = messages;
    this.user = user;
  }

  sendMessage(text) {
    if (this.user.isLogged) {
      this.messages.sendMessage(text);
    } else {
      throw new Error("Usuario no registrado");
    }
  }

  getHistory() {
    if (this.user.isLogged) {
      return this.messages.getHistory();
    } else {
      throw new Error("Usuario no registrado");
    }
  }
}
```

### User.js

```js
export class User {
  constructor(name) {
    this.name = name;
    this.isLogged = false;
  }

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }

  isLoggedIn() {
    return this.isLogged;
  }
}
```

# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Implementación de observador en newsletter

![Spoiler Shield](https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif)

### Subscriber.js

```js
export class Subscriber {
  // Tu código aquí 👈
  constructor(email) {
    this.email = email;
  }
  receive(article) {
    return `El suscriptor ${this.email} ha recibido el artículo: ${article.title}`;
  }
}
```

### exercise.js

```js
export class Newsletter {
  // Tu código aquí 👈
  constructor() {
    this.subscribers = [];
    this.articles = [];
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(email) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber.email != email
    );
  }
  post(article) {
    this.articles.push(article);
    this.subscribers.forEach((subscriber) => subscriber.receive(article));
  }
}
```
