export function sendEmail(email, subject, body) {
  // Tu código aquí 👈
  return new Promise((resolve, reject) => {
    if (email != "" && subject != "" && body != "") {
      setTimeout(() => {
        resolve({
          email,
          subject,
          body,
        });
      }, 2000);
    } else {
      setTimeout(() => {
        reject(new Error("Hacen falta campos para enviar el email"));
      }, 2000);
    }
  });
}

sendEmail("test@mail.com", "Nuevo reto", "Únete a los 30 días de JS").then(
  (result) => console.log(result)
);

sendEmail("test@mail.com", "", "Únete a los 30 días de JS")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
