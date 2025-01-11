// Create a html page with a buutton,when button is clicked, change the text of a peragraph 


var btn     = document.querySelector("button");
var changes = document.querySelector("p");

btn.addEventListener("click",function(){
    changes.textContent = "Hey! Main Change Ho Gya:";
})
