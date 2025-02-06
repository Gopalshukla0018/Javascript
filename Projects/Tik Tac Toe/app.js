let boxes     =  document.querySelectorAll(".box");
let resetbntn =  document.querySelector("#resetbtn")

let turn = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {

    box.addEventListener("click",() => {
    console.log("box was clicked");
    if(turn){
        box.innerText="X" 
        turn = false;

    }else{
         box.innerText="O"
         turn = true;
    }
    box.disabled=true;
    

    checkwinner();
    
 } )
    
});

const checkwinner =() =>{

    for (const pattern of winPatterns) {
        console.log(pattern[0],pattern[1],pattern[2]);




        

        
        
    }
}