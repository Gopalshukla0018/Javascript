const nameElement = document.querySelector(".name-element");
const nameInput = document.querySelector(".name-input");
const ageInput = document.querySelector(".age-input");
const ageElement = document.querySelector(".ageElement");
// // nameElement.innerText = localStorage.myname;
// nameElement.innerText = localStorage.getItem("myname");
// nameInput.addEventListener("input", (e) => {
//   //   localStorage.myname = e.target.value;
//   localStorage.setItem("myname", e.target.value);
//   nameElement.innerText = localStorage.myname;
// });

// nameElement.innerText = localStorage.getItem("myname");
// ageElement.innerText = localStorage.getItem("age");
// ageInput.addEventListener("input", (e) => {
//   localStorage.setItem("age", e.target.value);
//   ageElement.innerText = localStorage.age;
// });

const myData = JSON.parse(localStorage.getItem("myData")) || {};

if (myData.name) {
  nameElement.innerText = myData.name;
}
if (myData.age) {
  ageElement.innerText = myData.age;
}

nameInput.addEventListener("input", (e) => {
  myData.name = e.target.value;
  localStorage.setItem("myData", JSON.stringify(myData));
  nameElement.innerText = e.target.value;
});

ageInput.addEventListener("input", (e) => {
  myData.age = e.target.value;
  localStorage.setItem("myData", JSON.stringify(myData));
  ageElement.innerText = e.target.value;
});

// 📌 SHORT NOTES
// -----------------------------------
// 1️⃣ localStorage.setItem("key", "value"); // Data store karega
// 2️⃣ localStorage.getItem("key"); // Data read karega (string return karega)
// 3️⃣ JSON.stringify(object); // Object ko string me convert karega (store ke liye)
// 4️⃣ JSON.parse(string); // String ko object me convert karega (read ke liye)
// 5️⃣ localStorage.removeItem("key"); // Ek key delete karega
// 6️⃣ localStorage.clear(); // Poora storage delete karega
// 7️⃣ Pehle data get karo, update karo, phir wapas store karo
