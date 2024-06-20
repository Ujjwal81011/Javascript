function calculateCartPrice(val1,val2,...num1){ //here ...num1 is rest operator not spread operator
    return num1
}
//console.log(calculateCartPrice(200,400,500,600)); //rest operator convert multiple value in array  here val1=200 and val2=400 rest in ...num1

const user={
    username: "Hitesh",
    Prices:199
}
function handleobject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.Price}`);
}
// handleobject(user)
handleobject({
    username:"Ujjwal",
    Price:399
})

const mynewarray=[200,400,500,700]
function returnSecondvaue(getarray){
    return getarray[1]
}

// console.log(returnSecondvaue(mynewarray));
console.log(returnSecondvaue([200,900,400]));