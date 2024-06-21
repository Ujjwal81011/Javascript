let a=300;
// const b=20;
// {} // it represent the scope
if (true) {
    let a=10;
    const b=20;  
    console.log("Inner: " , a);
}
console.log("Global: ",a);
// console.log(b);