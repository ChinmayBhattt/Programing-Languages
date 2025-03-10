let arr1 = [11,12,13,14,15,16];

//array are mutable(change)

// arr1[0] = 124;
// console.log(arr1);
// console.log(typeof arr1);
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);
// console.log(arr1[4]);
// console.log(arr1[5]);
// console.log(arr1.length);
// console.log(arr1.toString());
// console.log(arr1.pop())
// console.log(arr1.join(" and "))

// -------- pop == unshift -------
// console.log(arr1.push("world"))
// console.log(arr1.unshift("Hello"))
// delete arr1[3];
// console.log(arr1);

// let arr2 = [17,18,19,20];
// console.log(arr1.concat(arr2));

// let arr3 = [5,3,1,4,2];
// console.log(arr3.sort());
// console.log(arr3)

// let arr4 = [5,3,2];
// console.log(arr4.splice());
// console.log(arr4);

// let arr5 = [2,3,4,5,3];

// for (let index = 0; index < arr5.length; index++) {
//     const element = arr5[index];
//     console.log("tha array value: ", element);
    
// }


// arr6 = [42,3,35,53,4];
// arr6.forEach((value, index, arr6) => {
//     console.log(value, index, arr6);
    
// });


// let obj = {
//     "a":1,
//     "b": 2,
//     "c": 3
// }

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj [key];
//         console.log("string element is ",element, "key is ", key);
        
//     }
// }

let a = [1,3,4,6,4,3,6,];

for (const iterator of a) {
    console.log(iterator)
    
}
// for (const i of a) {
//     console.log(i)
    
// }