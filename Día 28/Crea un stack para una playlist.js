// En este ejercicio, el objetivo es implementar una playlist de un servicio de música utilizando un stack.

// Deberás implementar la lógica de la clase Playlist la cual deberá tener las siguientes 3 propiedades top, bottom y length para poder desarrollar el stack.

// addSong(song): este método debe permitir agregar una canción al stack.

// playSong(): este método debe permitir reproducir la canción que está en el tope del stack y luego eliminarla. Si el stack está vacío, deberá lanzar un error con el mensaje "No hay canciones en la lista".

// getPlaylist() transforma el stack a un array con todas las canciones que están en el, en orden de reproducción (de la última agregada a la primera).

// Ejemplo 1:

// Input:
// const playlist = new Playlist();

// playlist.addSong("Bohemian Rhapsody");
// playlist.addSong("Stairway to Heaven");
// playlist.addSong("Hotel California");

// playlist.playSong();
// Output: "Bohemian Rhapsody"
// playlist.playSong();
// Output: "Stairway to Heaven"
// playlist.playSong();
// Output: "Hotel California"
// playlist.playSong();
// Output: Error: No hay canciones en la lista

// Ejemplo 2:

// Input:
// const playlist = new Playlist();

// playlist.addSong("Bohemian Rhapsody");
// playlist.addSong("Stairway to Heaven");
// playlist.addSong("Hotel California");

// playlist.getPlaylist();

// Output: ["Hotel California", "Stairway to Heaven", "Bohemian Rhapsody"]

export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

// // Ejemplo 1:

const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

console.log(playlist.playSong());
console.log(playlist.playSong());
console.log(playlist.playSong());
console.log(playlist.playSong());

// Ejemplo 2:

// const playlist = new Playlist();

// playlist.addSong("Bohemian Rhapsody");
// playlist.addSong("Stairway to Heaven");
// playlist.addSong("Hotel California");

// console.log(playlist.getPlaylist());
