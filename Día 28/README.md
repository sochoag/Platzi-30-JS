# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Crea un stack para una playlist

![Spoiler Shield](https://marketpedia.ca/wp-content/uploads/2021/10/gif-01-brent-rambo-b25.gif)

## **Nunca pares de aprender 🦾**

### `Node.js`

```js
export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

### `exercise.js`

```js
import { Node } from "./node";

export class Playlist {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  addSong(song) {
    const newSong = new Node(song);
    if (!this.top) {
      this.top = newSong;
      this.bottom = newSong;
      console.log(this);
    } else {
      newSong.next = this.top;
      this.top = newSong;
    }
    this.length++;
    return this;
  }

  playSong() {
    if (!this.top) {
      throw new Error("No hay canciones en la playlist");
    }
    if (this.top == this.bottom) {
      this.bottom = null;
    }
    const playedSong = this.top.value;
    this.top = this.top.next;
    this.length--;
    return playedSong;
  }

  getPlaylist() {
    const playList = [];
    if (!this.top) {
      return [];
    }
    if (this.top) {
      playList.push(this.top.value);
      console.log(this.top.value);
      let currentSong = this.top;
      while (currentSong.next) {
        playList.push(currentSong.next.value);
        currentSong = currentSong.next;
      }
    }
    return playList;
  }
}
```
