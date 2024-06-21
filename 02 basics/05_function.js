function myname(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// myname()

// function sum(num1,num2){
//     console.log(num1+num2);
// }
// const result=sum(5,8)
// console.log("Result: ",result);

function sum(num1,num2){
    return num1+num2
    console.log("Hitesh"); // function will not return any console value ahter return 
}
// const result=sum(5,8)
// console.log("Result: ",result);
console.log(sum(5,4));

function usermessage(username = "Sam"){
    if(username === undefined) // or if(!username)
        {
            console.log("please enter a username");
            return
        }
    return `${username} just logged in`
}
// console.log(usermessage("Ujjwal"))
console.log(usermessage());