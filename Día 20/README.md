# Escudo anti-spoilers

![Imagen anti-spoilers](https://media.tenor.com/NlrMsuwdtNsAAAAM/monkey-phone.gif)

Muy entretenido el reto, y se vuelve muy fácil cuando se tiene los conocimientos de los cursos recomendados en el post del reto #PlatziChallenge: 30 días de JavaScript

A continuación comparto mi solución 😎

## EconomicFlight.js

En este módulo es importante considerar que si hacemos algún cambio directo el precio como lo hizo @luisgv94, las próximas iteraciones, el precio del vuelo no será el correcto, es por ello que agregué una variable auxiliar que me permite recuperar el precio anterior.

```js
import { Flight } from "./Flight";
import { Reservation } from "./Reservation";

export class EconomicFlight extends Flight {
  constructor(origin, destination, date, capacity, price) {
    super(origin, destination, date, capacity, price);
  }
  sellTicket(passenger) {
    // Tu código aquí 👇
    if (this.lastPrice != undefined) {
      this.price = this.lastPrice;
    }
    if (passenger.age < 18 || passenger.age > 65) {
      this.lastPrice = this.price;
      this.price = this.price * 0.8;
    }
    return super.sellTicket(passenger);
  }
}
```

## Flight.js

🤔 Para este módulo es importante tomar en cuenta que cada vez que se venda un ticket, la capacidad del vuelo debe decrementar

```js
import { Reservation } from "./Reservation";

export class Flight {
  constructor(origin, destination, date, capacity, price) {
    // Tu código aquí 👈
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = [];
  }

  sellTicket(passenger) {
    if (this.capacity > 0) {
      this.passengers.push({
        fullName: `${passenger.name} ${passenger.lastName}`,
        age: passenger.age,
      });
      passenger.addFlight(this);
      let reservation = new Reservation(this, passenger);
      this.capacity--;
      return reservation;
    }
    // Tu código aquí 👈
  }
}
```

## Passenger.js

Nada que comentar en este módulo, la explicación muy clara en este inciso.

```js
export class Passenger {
  // Tu código aquí 👈
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.flights = [];
  }
  addFlight(flight) {
    this.flights.push({
      origin: flight.origin,
      destination: flight.destination,
      date: flight.date,
      price: flight.price,
    });
  }
}
```

## PremiumFlight.js

Aquí no sé si hice un poco de trampa, pero al no ser clara las instrucciones también es posible agregar directamente el precio de specialService a la variable this.price y así nos evitamos sobreescribir el método addFlightToPassenger

```js
import { Flight } from "./Flight";
import { Reservation } from "./Reservation";

export class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    // Tu código aquí 👈
    super(origin, destination, date, capacity, price);
    this.price = price + specialService;
  }
}
```

## Reservation.js

Aquí solamente considerar bien los nombres de variables como reservedBy fullName, etc.

```js
export class Reservation {
  constructor(flight, passenger) {
    // Tu código aquí 👈
    this.flight = flight;
    this.passenger = passenger;
  }

  reservationDetails() {
    // Tu código aquí 👈
    return {
      origin: this.flight.origin,
      destination: this.flight.destination,
      date: this.flight.date,
      reservedBy: `${this.passenger.name} ${this.passenger.lastName}`,
    };
  }
}
```

# NUNCA PARES DE APRENDER!
