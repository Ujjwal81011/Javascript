const mynums = [1, 2, 3]
// const mytotal = mynums.reduce( function (acc, curval) {  //in project reduce is using for calculating bills
//     console.log(`accumulator: ${acc} and current value ${curval}`);
//     return acc + curval
// }, 0 )
// console.log(mytotal)

const mytotal = mynums.reduce( (acc, curval) => acc + curval,0 ) // using arrow function
// console.log(mytotal);
// acc = accumulator and curval = currentValue and 0 is initialValue

const shoppingCart = [
    {course: "js", price: 3000},
    {course: "python", price: 1500},
    {course: "C++", price: 999},
    {course: "java", price: 1999},
]

const mybill = shoppingCart.reduce( (acc, bill) => acc + bill.price, 0 )
console.log(mybill)