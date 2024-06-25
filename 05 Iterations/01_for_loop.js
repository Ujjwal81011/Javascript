for (let i = 0; i <= 10; i++) {     //for duplicatio press ctrl+d
    const element = i;
    // console.log(element);
    if(element==5){
        // console.log("five is best number");
}
// console.log(element); //element is not define outside
}


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <=15 ; j++) {
        // console.log(`inner loop value: ${j} and outer loop: ${i}`);
        // console.log(i + '*' +j + '=' + i*j)
    }
}
let myarray = ["flash" , "batman" , "superman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)
}


// break and continue
for (let index = 1; index <= 20; index++) {
    if (index == 10) {
        continue
    }
    if (index == 15) {
       break 
    }
    console.log(`value of i is: ${index}`);    
}

