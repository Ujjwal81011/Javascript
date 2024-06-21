// Nested Scope
function one() {
    const username="Hitesh"
    function two() {
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()
if (true) {
    const username="Ujjwal "
    if(username==="Ujjwal ")
        {
            const website="Youtube"
            console.log(username + website);
        }
        // console.log(website);
}
// console.log(username);

// Types of function definition

console.log(addone(5));
function addone(num) {
    return num+1
}


console.log(addtwo(5)); // it is due to hoisying
const addtwo=function(num) { // it is concept of hoisting and sometimes known as expression
    return num+2
}
