let bulb = document.querySelector("#bulb");
let btn = document.querySelector("button");

let flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "yellow";
    flag = 1;
  } else {
    bulb.style.backgroundColor = "transparent";
    flag = 0;
  }
});

/*
 ### **Short Note on Bulb Toggle Script**  

This JavaScript code toggles a "bulb" effect when a button is clicked.  

**Key Points:**  
✅ `document.querySelector("#bulb")` selects the element with `id="bulb"`.  
✅ `document.querySelector("button")` selects the first `<button>` element.  
✅ A `flag` variable is used to track the bulb's state (ON/OFF).  
✅ An event listener on the button detects clicks and toggles the bulb’s background color:  
   - If `flag == 0`, the bulb turns **yellow** (ON), and `flag` becomes `1`.  
   - Else, it turns **transparent** (OFF), and `flag` resets to `0`.  

This simple script demonstrates **DOM manipulation and event handling** in JavaScript. */
