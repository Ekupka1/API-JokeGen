const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke p");

document.addEventListener("DOMContentLoaded", getJock);

button.addEventListener("click", getJock);

// gets third api
async function getJock() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", { //https://icanhazdadjoke.com/api
    headers: {
      Accept: "application/json"
    }
  });
  const jokeObj = await jokeData.json();
  jokeDiv.innerHTML = jokeObj.joke;
  console.log(jokeData);
}
