const mysym=Symbol("key1")


const Jsuser={
    name: "ujjwal",
    "full name":"Ujjwal Mishra",
    [mysym]:"mykey1",
    course: "BCA",
    college: "MPCPS",
    age: 18,
    rollno: 22015001554
}
// console.log(Jsuser.course);
// console.log(Jsuser["course"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mysym]);
Jsuser.course="Btech" //update the value in the object
console.log(Jsuser["course"]);
// Object.freeze(Jsuser) // now we can not change the value in the object
Jsuser.age=25
console.log(Jsuser["age"]);

Jsuser.greeting=function(){
    console.log("Happy Birthday to you");
}
console.log(Jsuser.greeting());

Jsuser.greetingtwo=function(){
    console.log(`Happy Birthday to you, ${this["full name"]}`);
}
console.log(Jsuser.greetingtwo());