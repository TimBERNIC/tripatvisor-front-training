// Récupération des élément duy DOM
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("document loaded");
  const body = document.querySelector("body");
  const formulaire = document.getElementById("formulaire");
  const connectionButton = document.getElementById("connection-button");
  const cross = document.getElementById("closed-cross");
  const contactForm = document.getElementById("contactForm");

  //   ouverture de la page connect
  connectionButton.addEventListener("click", (event) => {
    formulaire.classList.remove("hidden");
    body.classList.add("dont-scroll");
  });
  // fermeture de la page connect

  cross.addEventListener("click", (event) => {
    formulaire.classList.add("hidden");
    body.classList.remove("dont-scroll");
  });

  //   Envoie des données du formualrie au serveur
  contactForm.addEventListener("click", async (e) => {
    e.preventDefault();

    const data = {
      name: document.querySelector("#name").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      text: document.querySelector("#text").value,
    };

    /* console.log(data); */

    const response = await axios.post(
      "http://localhost:3000/request/mail",
      data
    );
    console.log(response);
  });
});
