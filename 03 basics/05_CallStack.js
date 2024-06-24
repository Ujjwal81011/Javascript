let val1=10
let val2=5
function addnum(num1,num2) {
    total=num1 + num2
    return total 
}
// console.log(addnum(val1,val2));
let result1 = addnum(val1,val2)
let result2 = addnum(10,2)


// execution Step
// 1) Global Execution (which alocated in this)
// 2) Memory Phase
        // val1 => undefind
        // val2 => undefind
        // fn. addnum => fn. definition
        // result1 => undefind
        // result2 => undefind
// 3) Execution Phase
        // val1 = 10
        // val2 = 5
        // addnum => (new variable environment + Execution Thread)  this is execution context