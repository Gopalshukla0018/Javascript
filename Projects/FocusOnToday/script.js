const checkboxList  = document.querySelectorAll('.custom-checkbox');
const inputFields   = document.querySelectorAll('.input-goal');

checkboxList.forEach((checkbox) => {
    checkbox.addEventListener('click',(e)=>{
        checkbox.parentElement.classList.toggle('completed')
        
    })
1
})