const jokeForm = document.getElementById("jokeForm");
const jokeText = document.getElementById("jokeText");

const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");

jokeForm.addEventListener("submit", async e => {
  e.preventDefault();
  const firstName = firstNameInput.value || "Chuck";
  const lastName = lastNameInput.value || "Norris";

  try {
    const url = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
    const call = await fetch(url);
    const json = await call.json();
    //   console.log(json.value.joke);

    jokeText.innerHTML = json.value.joke;
  } catch (error) {
    console.log(error);
  }
});
