const progress = document.querySelector('.progress');
const circle   = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let current_step = 1;

next.addEventListener('click', ()=>{
    current_step++;
    
    if(current_step>circle.length){
        current_step=circle.length;
            
    }
    update();  

});

prev.addEventListener('click',()=>{
    current_step--;
    if(current_step<1){
        current_step=1;
    }
    update();
})

const update= ()=>{
    circle.forEach((circle,index) =>{
        if(index<current_step){
                circle.classList.add("active");
        
        }
        else{
            circle.classList.remove("active");
        }
    })
    const active =document.querySelectorAll(".active");
    progress.style.width= ((active.length-1)/(circle.length-1)*100+"%")

    if(current_step==1){
        prev.disabled=true;
    }
    else if(current_step==circle.length){
        next.disabled=true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
      }
      

}



