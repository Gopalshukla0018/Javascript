const image = document.querySelector(".img");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetch("https://icanhazdadjoke.com")
    .then((response) => response.json())
    .then((json) => {
      image.src = json.joke;
    });
});
