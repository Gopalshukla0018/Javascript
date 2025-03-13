const nameElement = document.querySelector(".name-tag");
const nameInput = document.querySelector(".name-input");

nameElement.innerText = localStorage.myname;

nameInput.addEventListener("input", (e) => {
  localStorage.myname = e.target.value;
});
