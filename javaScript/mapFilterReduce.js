let arr = [2,3,4,5,6];
// let newArr = [];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2);
    
}
// --------- map ---------
// console.log(newArr);
let newArr = arr.map((e, index, arr)=>{
    return arr**2;

})

// console.log(newArr)

// --------- filter ---------



