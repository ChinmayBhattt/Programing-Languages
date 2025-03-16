console.log("This is Promises")

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a<0.5) {
        reject("No random numbers ")
        
    }
    else{
        
        setTimeout(()=>{
            console.log("Yes i am done");
            resolve("Cb")
        },3000);
    }
})

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a<0.5) {
        reject("No random numbers 2 ")
        
    }
    else{
        
        setTimeout(()=>{
            console.log("Yes i am done 2");
            resolve("Cb 2")
        },3000);
    }
})

// let p3 = Promise.all([prom1, prom2])
// let p3 = Promise.allSettled([prom1, prom2])
let p3 = Promise.race([prom1, prom2])

p3.then((a)=>{
    console.log(a);
    
}).catch((err)=>{
    console.log(err);
    
})
