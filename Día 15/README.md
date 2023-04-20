# Spoiler

## Definitivamente mas complejo que los otros playgrounds, espero con mucha emoción los 15 proximos dias de desafios 😃

Adjunto mi solución y un perrito antispoilers

![Perrito programando](https://media.tenor.com/9X-I0mcc_OgAAAAM/dog-funny.gif)

```js
export function hotelSystem(rooms) {
  // Tu código aquí
  let reservations = [];
  function searchReservation(id) {
    const exist = reservations.some((reservation) => reservation.id == id);
    if (!exist) {
      throw new Error("La reservación no fue encontrada");
    }
    return reservations.find((res) => res.id == id);
  }

  function getSortReservations() {
    const result = [...reservations];
    result.sort((a, b) => {
      let date1 = a.checkIn.split("/");
      let date2 = b.checkIn.split("/");
      date1 = new Date(2023, date1[1] - 1, date1[0]).getTime();
      date2 = new Date(2023, date2[1] - 1, date2[0]).getTime();

      return date1 - date2;
    });
    return result;
  }

  function addReservation(reservation) {
    const hasReservation = reservations.some(
      (element) => element.roomNumber == reservation.roomNumber
    );
    if (!hasReservation) {
      reservations.push(reservation);
      return `La reservación de ${reservation.name} fue agendada exitosamente`;
    }

    const checkIn = convertDate(reservation.checkIn);
    const checkOut = convertDate(reservation.checkOut);

    reservations.forEach((el) => {
      const elCheckIn = convertDate(el.checkIn);
      const elCheckOut = convertDate(el.checkOut);

      const ocupped = isOcupped(elCheckIn, elCheckOut, checkIn, checkOut);

      if (ocupped) {
        throw new Error("La habitación no está disponible");
      } else {
        reservations.push(reservation);
      }
    });
    return `La reservación de ${reservation.name} fue agendada exitosamente`;
  }

  function removeReservation(id) {
    const exist = reservations.some((reservation) => reservation.id == id);
    if (!exist) {
      throw new Error("La reservación que se busca remover no existe");
    }
    const toDelete = reservations.find((el) => el.id == id);
    reservations = reservations.filter((reservation) => reservation.id != id);
    return toDelete;
  }

  function getReservations() {
    return reservations;
  }

  function getAvailableRooms(checkIn, checkOut) {
    const result = [];
    checkIn = convertDate(checkIn);
    checkOut = convertDate(checkOut);

    for (let i = 1; i <= rooms; i++) {
      const roomTaken = reservations.some((el) => el.roomNumber == i);
      if (!roomTaken) {
        result.push(i);
      } else {
        const filtered = reservations.filter((el) => el.roomNumber == i);
        const occuped = filtered.some((el) => {
          const elCheckIn = convertDate(el.checkIn);
          const elCheckOut = convertDate(el.checkOut);
          return isOcupped(elCheckIn, elCheckOut, checkIn, checkOut);
        });
        if (!occuped) {
          result.push(i);
        }
      }
    }
    return result;
  }

  function convertDate(date) {
    let convertedDate = date.split("/");
    convertedDate = new Date(
      2023,
      convertedDate[1] - 1,
      convertedDate[0]
    ).getTime();
    return convertedDate;
  }

  function isOcupped(checkIn1, checkOut1, checkIn2, checkOut2) {
    return (
      (checkIn1 <= checkOut2 && checkOut1 >= checkOut2) ||
      (checkIn1 <= checkIn2 && checkOut1 >= checkIn2)
    );
  }

  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms,
  };
}
```
