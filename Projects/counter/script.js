const MinusBtns = document.querySelector('#MinusBtn');
const PlusBtn  = document.querySelector('#PlusBtn');
const count = document.querySelector('.count');
const inputs = document.querySelector('.input');
const ResetBtns = document.querySelector('.ResetBtn') 

PlusBtn.addEventListener('click',()=>{
     const countValue = parseInt(count.innerText);
     const input = parseInt(inputs.value);
     count.innerText = countValue+input;
    
})
MinusBtns.addEventListener('click',()=>{
     const countValue = parseInt(count.innerText);
     const input = parseInt(inputs.value);
     count.innerText = countValue - input;
    
})
     
ResetBtns.addEventListener('click',()=>{
      count.innerText = 0;
})




