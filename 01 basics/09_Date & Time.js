// Dates
// let mydate=new Date()
// console.log(mydate.toString()); // Thu May 02 2024 21:57:37 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString()); // Thu May 02 2024
// console.log(mydate.toLocaleString()); // 2/5/2024, 9:57:37 pm

let mycreatedate= new Date(2023,0,25) // in javascript it contain the month from 0 means 0 is january
console.log(mycreatedate.toDateString());
let mycreatedate1= new Date("2023-01-25") // in javascript it contain the month from 1 if we write "yyyy-mm-dd"
console.log(mycreatedate1.toLocaleString());

// let mytimeStamp=Date.now()
// console.log(mytimeStamp);
// console.log(mycreatedate.getTime());
// console.log(Math.round(Date.now()/1000));//for converting in the second

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(`the current date is ${mycreatedate}`);