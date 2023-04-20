# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Crea una cola de emails

![Spoiler Shield](https://learn.g2.com/hs-fs/hubfs/plan%20gif%20marketing%20strategy.gif?width=500&name=plan%20gif%20marketing%20strategy.gif)

## **Con ansias de que se venga el día 30 y tambien 30 días de Python 😍**

## **Nunca pares de aprender 🦾**

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
