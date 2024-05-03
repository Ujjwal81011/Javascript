// in java script memory is devided into two parts
// 1) Stack are used in primitive type
// 2) Heap is uded in non-primitive type 

let channel="chai aur code";
let anothername=channel
anothername="java script with Hitesh Chaudhary";
console.log(channel);
console.log(anothername);

let userOne={
    email: "user@gmail.com",
    upi: "user@ybl",
}

let userTwo=userOne
userTwo.email="Hitesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);