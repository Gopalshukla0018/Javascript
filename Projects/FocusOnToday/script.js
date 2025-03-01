const checkboxList  = document.querySelectorAll('.custom-checkbox');
const inputFields   = document.querySelectorAll('.input-goal');
const errorlevel = document.querySelector('.error-level');
const progressBar = document.querySelector('.progress-bar');
const progressValue = document.querySelector('.progress-value');


const allGoals = {
    
}

checkboxList.forEach((checkbox) => {
    checkbox.addEventListener('click',(e)=>{
        const allGoalsAdded = [...inputFields].every(function(input){
            return input.value
        })
        
         if (allGoalsAdded) {
            checkbox.parentElement.classList.toggle('completed')
            progressValue.style.width='33.33%'
            
         }
         else{
                progressBar.classList.add('show-error')
         }   
    })

})
inputFields.forEach((input) => {
    input.addEventListener('focus',()=>{
        progressBar.classList.remove('show-error')
    })
    input.addEventListener('input',(e ) => {
        localStorage.setItem('allGoals', JSON.stringify(allGoals))
        
    })
    
});
