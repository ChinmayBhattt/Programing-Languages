async function sleep() {

    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            resolve(45);
        },1000);
    })
    
}



(async function main() {

    console.log(a1);//hosting
    
    // let a = await sleep();
    // let b = await sleep();
    
    // console.log(a)
    // console.log(b)

    // let [x,y]= [1,4,5];
    // console.log(x,y);


    // let [x,y, ...rest] = [1,4,5,4,3,6,3];
    // console.log(x,y,rest);


    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    let {a, b} = obj;
    // console.log(a, b);
    
    var a1 = 6; //hosting
    
})

function add(a , b ,c){
    return a + b + c;
}

let arr = [1,4,6];
console.log(arr[0] + arr[1] + arr[2]);
console.log(add(...arr)); //sparate operator

