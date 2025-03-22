



// let firstPromises =new Promise ((resolve,reject)=>{
//     setTimeout(function sayMyname(){
//         console.log("Gopal Shukla");
        
//     },10000)

//     ;resolve(1)

   
// })

let Promise1=new Promise((resolve,reject)=>{
    let sucess=true;
    if(sucess){
        resolve("Promise Fulfilled");
    }
    else{
        reject("promise Rejectes")
    }
})

Promise1.then((message)=>{
    console.log("Then ka massage is: "+message);
}).catch((error)=>{
    console.log("Error:"+error);
    
})