const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function (val) { // in forEach loop passing a function without name with any parameter with any name is compulsory like line no. 02
// console.log(val);
})

coding.forEach( (item) => {  // here we using Arrow function
// console.log(item);
} )

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach( printMe )

coding.forEach( (item , index , Array) => { // forEach loop contain item, Index, Array
    // console.log(item, index, Array);
} )


const mycoding = [
    {
        languageName : "javascript",
        instructor : "Hitesh Sir",
        channel : "chai aur code"
    },
    {
        languageName : "java",
        instructor : "Hitesh Sir",
        channel : "chai aur code"
    },
    {
        languageName : "Pyhton",
        instructor : "Hitesh Sir",
        channel : "chai aur code"
    },
]
mycoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.instructor);
    console.log(item.channel);
} )