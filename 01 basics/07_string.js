const name="Hitesh"
const count=50
console.log(name + count + " value");

console.log(`hello my name is ${name} and my repo count is ${count}`); // using backticks and placeholders for variable 

const gameName=new String('Hitesh-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); //for getting the length of string
console.log(gameName.toUpperCase()); // for converting the string in the uppercase
console.log(gameName.charAt(2)); // for getting the character on the given index
console.log(gameName.indexOf("t")); // for getting the index of the given character

const newstring=gameName.substring(0,4);
console.log(newstring); // substring only contain positive value

const anotherstring=gameName.slice(-8,4);
console.log(anotherstring); // sclice accept both negative an positive value

const newstringone="    Hitesh    "
console.log(newstringone);
console.log(newstringone.trim()); // it helps us to remove the spaces

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-')); // this method is use for replace the slice of the url
console.log(url.includes('hitesh')); //this method is use for the checking that given word is incuded or not

console.log(gameName.split('-')); // this method is use for converting a string into array based on spaces or dashes or many other symbol or characters

//  for getting more knowledge about string method go to mdn references an search string methods