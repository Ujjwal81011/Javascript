// for of loop
// const array = [1, 2, 3, 4, 5]
// for (const num of array) {
//     console.log(num);
// }

// const greeting = "Hello world"
// for (const greet of greeting) {
//     console.log(`each char is : ${greeting}`);
// }

// Maps
const map = new Map()
map.set('IN' , "India");
map.set('USA' , "America");
map.set('Fr' , "Frace");
map.set('IN' , "India");
console.log(map);

for (const [keys,value] of map) {
    console.log(keys, ':-', value);
}