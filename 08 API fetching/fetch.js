fetch('https://api.github.com/users/Ujjwal81011')
.then((response) =>{
    return response.json()
})
.then((data) => {
console.log(data)
})
.catch((error) => {
    console.log(error)
})