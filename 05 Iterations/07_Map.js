let mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newnums= mynum.map( (number) => number + 10 ) //map is easy compare to ForEach method
// console.log(newnums);

mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const mishra = []
const newnum = mynum.forEach( (num) => {
    if (num >= 1) {
        num = num + 10
        mishra.push(num)
    }
} )
// console.log(mishra);

const num1 = mynum
        .map( (val) => val*10 )
        .map( (val) => val + 1)  // using multiple method in single operation is called chaining
        .filter( (val) => val >= 40)
console.log(num1);