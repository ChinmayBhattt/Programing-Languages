async function getData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(455);
        },3500);
    })

}

async function main() {
    

    console.log("Loading Modules");
    console.log("Do Something elses");

    console.log("Load Data");
    let data = await getData();
    console.log(data);
    console.log("Process Data");
    console.log("Task");

}

main(); 
 
// data.then((e)=>{

//     console.log(data);
//     console.log("Process Data");
//     console.log("Task");
// })
