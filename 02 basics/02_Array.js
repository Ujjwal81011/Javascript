arr1=[2,4,6,8,10]
arr2=[3,6,9,12,15,18]
// arr1.push(arr2) // it contain the second array as an element
// console.log(arr1);

arr3=arr1.concat(arr2) // this is called concat operator
console.log(arr3);

arr4=[...arr1,...arr2] // (...) this is called spred operator
console.log(arr4);

console.log(Array.isArray("Ujjwal"));
console.log(Array.from("Ujjwal")); // from keyword convert a string into array.

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));