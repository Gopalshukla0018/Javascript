const nameElement = document.querySelector(".name-element");
const nameInput = document.querySelector(".name-input");
// nameElement.innerText = localStorage.myname;
nameElement.innerText = localStorage.getItem("myname");
nameInput.addEventListener("input", (e) => {
  //   localStorage.myname = e.target.value;
  localStorage.setItem("myname", e.target.value);
  nameElement.innerText = localStorage.myname;
});
1;
