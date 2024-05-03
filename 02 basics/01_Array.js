//Array
const arr=[0, 1, 2, 3, 4, 5];// arrays in JavaScript are resizable and can contain a mic od different data types.
// console.log(arr);

// array method
// arr.push(6) //push the value in the last of the array
// arr.push(7)
// arr.pop() // delete the value from the last of the array
// arr.pop()
// arr.unshift(9) // it push the value in the starting of the arrray
// arr.shift() // it remove the value from the starting of the array
// console.log(arr);
// console.log(arr.includes(9)); // for checking that the given number is available or not
// console.log(arr.indexOf(3)); // it find the index of the given number

const newarr=arr.join() // it convert the array into the string
// console.log(arr)
// console.log(typeof newarr);

// slice and splice

console.log("A " ,arr);

let arr1=arr.slice(1,3) // it pick the copy of given Range from array but not change in the original array, and do not contain the last range
console.log(arr1);
console.log(arr);

let arr2=arr.splice(1,3) // it cut the given Range from array and change the original value of the array, it contain the last range.
console.log(arr2)
console.log(arr);

//the above mentioned is the main difference between slice and splice