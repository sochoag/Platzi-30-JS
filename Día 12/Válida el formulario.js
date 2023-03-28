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

const formData = {
  name: "Juan",
  lastname: "Perez",
  email: "juan@example.com",
  password: "123456",
};

const registeredUsers = [
  { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
  { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
];

console.log(validateForm(formData, registeredUsers));
