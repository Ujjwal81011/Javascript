// Immediately Invoked Function Expressions (IIFE)
// basic syntax of iife is ()()


(function chai(){ // it is a named IIFE
console.log(`DB Connected`);
})(); //it is basically use for remove poluion of global function


( (name) => { // It is a simple IIFE
    console.log(`DB Connected two ${name}`);
} )("Hitesh")