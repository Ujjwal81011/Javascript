const score=400
console.log(score);
const balance=new Number(100) //here new is a keyword which define the value with its data type
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // in to fixed value we can take the value 1 or 2
const otherNumber=23.8966
console.log(otherNumber.toPrecision(3)); // precision value round off the value on the given limit
const hundreds=10000000000;
console.log(hundreds.toLocaleString('en-IN')); // convert the value according to given number system of the country


// Now we talk about the Maths
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.min(4,5,8,2,1));
console.log(Math.max(4,5,8,2,1));
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1))+min);