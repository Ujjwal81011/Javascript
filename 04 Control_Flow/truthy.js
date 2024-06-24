const useremial = []

if(useremial){
    console.log("Got user emeil")
}
else{
    console.log("Don't have user email");
}

// falsy values => ( false, 0, BigInt 0n, "", null, undefined, NaN )
// truthy values => ( "0", 1, "false", " ", [], (), function(){} )

if (useremial.length === 0) { //for checking that array is empty or not
    console.log("Array is empty");
}

const emptyobject = {}
if (Object.keys(emptyobject).length === 0) { // convert the object into array and then check object is empty or not
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefind
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15  
console.log(val1);

// turniary operator
// condition ? true : false
const iceteaprice = 100
iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80")