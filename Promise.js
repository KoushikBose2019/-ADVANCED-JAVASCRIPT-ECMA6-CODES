let promise= new Promise(function(resolve,reject){
setTimeout(()=>resolve("done!!!!"),70000);

});
//resolve runs the first function .then
promise.then(
     result=>console.log(result),
     error=>console.log(error)

);
    console.log(setTimeout(()=>resolve("done"),1000))
    console.log(setTimeout(()=>reject(new Error("Whoops!")),1000))
let promise= new Promise(function(resolve,reject){
   setTimeout(()=>reject(new Error("Whoops!!!!!!!")),1000);
});
promise.then(
   result=>console.log(result),
   error=>console.log(error)
);
 let promise= new Promise(resolve=>{
     setTimeout(()=>resolve("done!!!!"),1000);
 });
 promise.then(console.log);
 let promise= new Promise((resolve,reject)=>{
     setTimeout(()=>reject(new Error("Whoops!!!!!!!")),7000);

 });





 
 promise.catch(console.log);



 






