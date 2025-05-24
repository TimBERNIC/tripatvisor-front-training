// Récupération des élément duy DOM
document.addEventListener("DOMContentLoaded", (event) => {
  const body = document.querySelector("body");
  const formulaire = document.getElementById("formulaire");
  const connectionButton = document.getElementById("connection-button");
  const cross = document.getElementById("closed-cross");
  const submit = document.getElementById("submit-button");
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

  submit.addEventListener("click", (event) => {
    console.log("envoie en cours");

    // axios.post("/post");
  });
});
