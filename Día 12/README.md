# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Callback hell usando async-await

![Spoiler Shield](https://en.bcdn.biz/Images/2011/12/21/e46f6e43-fdba-4e3a-b00b-62f7a6633a45.jpg)

```js
export function validateForm(formData, registeredUsers) {
  // Tú código aquí 👈
  const required = ["name", "lastname", "email", "password"];
  const missingFields = [];

  required.forEach((field) => {
    if (!formData.hasOwnProperty(field)) {
      missingFields.push(field);
    }
  });

  if (missingFields.length != 0) {
    throw new Error(
      "Faltan los siguientes campos requeridos: " + missingFields.join(", ")
    );
  }

  const isDuplicated = registeredUsers.some(
    (ele) => ele.email == formData.email
  );

  if (isDuplicated) {
    throw new Error("Email duplicado: " + formData.email);
  }
  delete formData.password;
  registeredUsers.push(formData);
  return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`;
}
```
