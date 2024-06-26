const myobj = {  // object mostly using forin loop
    C : "C-Programming",
    py : "Pyhton",
    js : "java script",
    cpp : "C++"
}

for (const key in myobj) {  // here we using forin loop after removing the portion of if
    // console.log(`${key} shortcut for ${myobj[key]}`);
}

const myarr = ["js", "py", "C", "Cpp"] // Array mostly use forof loop
for (const key in myarr) {
//     console.log(myarr[key]);
}

const map = new Map() //map is not giving result on forin loop
map.set('IN' , "India");
map.set('USA' , "America");
map.set('Fr' , "Frace");
map.set('IN' , "India");
for (const key in map) {
    console.log(key)
}