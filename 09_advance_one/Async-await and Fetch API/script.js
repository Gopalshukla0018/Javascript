// async function getData() {
//   setTimeout(function(){
//     console.log("i am insite set timout block");
    
//   },3000)
// }
// getData();


//await-?
//fetch api

  async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //parse json
    let data= await response.json();
    console.log(data);
    
  }
  getData();


  // we can run sync code to async using async await

  //scenario;
  //prepare url / api endpoint->sync
  //await-> network call--> async
  //process data-->sync