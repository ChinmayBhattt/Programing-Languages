// -----------Asynchrmous Action-----------

/*
console.log("Chinmay")

setTimeout(() =>{
    console.log("Hey You are hacker")
},2000);

console.log("END")
*/

// -----------CallBack Function-----------

const callback = (arg) => {
    console.log(arg);

  
}


const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;

    sc.onload = callback("Chinmay")
        document.head.append(sc);
    
  
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)



// function getData() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(455);
//         },3500);
//     })

// }

// console.log("Loading Modules");
// console.log("Do Something elses");

// console.log("Load Data");
// let data = getData();
// data.then((e)=>{

//     console.log(data);
//     console.log("Process Data");
//     console.log("Task");
// })
