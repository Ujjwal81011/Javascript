const tinderuser=new Object() //singleton Object
const tinderuser2={} //non-singleton Object
console.log(tinderuser);
console.log(tinderuser2);
const Jsuser={
    name: "ujjwal",
    fullname:{
        userfullname:{
            firstname:"Hitesh",
            Lastname:"Choudhary"
        }
    },
    course: "BCA",
    college: "MPCPS",
    age: 18,
    rollno: 22015001554
}
// console.log(Jsuser.fullname.userfullname.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

const obj3=Object.assign({},obj1,obj2) // assign operator is use for concat two objects
const obj4={...obj1,...obj2} // using spred method we can concat two or more objects
// console.log(obj4);

// console.log(Object.keys(Jsuser));
// console.log(Object.values(Jsuser));
// console.log(Object.entries(Jsuser)); // it define each key and values in an array.