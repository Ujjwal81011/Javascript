// if

// const isuserloggedin = true
// const temperature=41
// if( temperature<50 ){ //if true then the internal code will execute, if false then not
//     console.log("less than 50");
// } 
// else{
//     console.log("temperature is greater then 50");
// }
// <, >, <=, >=, ==, !=, ===, !==


// const score = 200
// if( score > 100 ){
//     const power = "fly";
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`); // it gives the error due to scope

// const balance = 1000
// // if(balance>500) console.log("test"),console.log("test2");
// if(balance < 500){
// console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("balance less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true
if(userloggedin && debitcard){
    console.log("allow to buy course");
}

if(loggedinfromgoogle || loggedinfromemail){
    console.log("user logged in");
}