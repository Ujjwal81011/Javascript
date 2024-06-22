const user={
    username:"Hitesh",
    price:399,
    welcomemessage: function () {
        console.log(`${this.username} , welcome to our website`);
        // console.log(this); //this keyword only works in Object
    } 

}

// user.welcomemessage()
// user.username="Ujjwal" // this keyword pick the current content after changing in an Object
// user.welcomemessage()

// console.log(this);

// function chai() {
//     let username="Hitesh"
//     console.log(this.username) //it will be undefind because it is an function not an Object
// }
// chai()

// const chai=function () {
//     let username="Hitesh"
//     console.log(this.username) //second method of defining function
// }
// chai()

const chai= () => { //remove the function keyword and place the arrow, it becomes arrow function
    let username="Hitesh"
    console.log(this)
}
// chai()

// const addtwo=(num1,num2) => { // basic syntax of arrow function
// return num1+num2
// } // in arrow function use of {} use the return keyword
// console.log(addtwo(3,8));

// const addtwo=(num1,num2) => (num1 + num2) //it is syntax of implicit arrow function, () does not use return keyword
// console.log(addtwo(3,8));

const addtwo=(num1,num2) => ({username:"Hitesh"}) // for return the object close the object in ()
console.log(addtwo(3,8));