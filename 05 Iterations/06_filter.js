const program = ["java", "Python", "c++", "java-script", "ruby"]

program.forEach( (item) => {  
    // console.log(item);
} )


const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const value = mynum.filter( (num)  => num > 4)  //first method
const value = mynum.filter( (num) => {  //second method
   return num > 4
}) // filter is same as ForEach but it return the value on the basis of condition
// console.log(value)

const newnums = []
mynum.forEach( (num) => {
    if (num > 5) {
        newnums.push(num)
    }
} )
// console.log(newnums);


// Exercise
const books = [
    { title: "book one", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "book two", genre: "Science", publish: 1992, edition: 2008 },
    { title: "book three", genre: "History", publish: 1991, edition: 2007 },
    { title: "book four", genre: "Non-Fiction", publish: 1989, edition: 2014 },
    { title: "book five", genre: "Science", publish: 1987, edition: 2010 },
    { title: "book six", genre: "Maths", publish: 1986, edition: 1996 },
    { title: "book seven", genre: "History", publish: 2011, edition: 2016 },
    { title: "book eight", genre: "Fiction", publish: 1995, edition: 1989 },
]

let mybook = books.filter( (book) => book.genre === "Science") // first way
mybook = books.filter( (book) => { return book.publish >= 1995 /*&& book.genre === "History"*/ }) // second way
console.log(mybook);