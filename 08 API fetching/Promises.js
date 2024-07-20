const promiseone = new Promise(function(resolve, reject){
    // Do and Async task
    // DB call, cryptography, network
    setTimeout(function() {
        console.log("Async task is complete");
        resolve()
    }, 2000)
})
promiseone.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolve");
})

const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})
    },1000)
})
promisethree.then(function(ujjwal){
    console.log(ujjwal);
})

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "hitesh", password: "123"})
        }
        else{
            reject("ERROR: something went gone")
        }
    },1000)
})
promisefour
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("finally the promise is either resolve or rejected");
})

const promisefive = new Promise(function(resolve, reject){
setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Ujjwal Mishra", email: "mishra12@gmail.com"})
        }
        else{
            reject("something is missing")
        }
    },1000)
})
async function consumepromisefive(){
try {
    const response = await promisefive
    console.log(response)
} 
catch (error) {
    console.log(error)
}
}
consumepromisefive()

// async function getallusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log((data));
//     } catch (error) {
//         console.log("error");
//     }
// }
// getallusers()

fetch('https://api.github.com/users/Ujjwal81011')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log("error");
})