const url = ""

fetch(url)
.then(function(res) {
    return res.json()
})
.then(function(json) {
    return ({
        importantData: json.importantData,
    })
})
.then(function(data) {
   console.log(data)
})
.catch(function(err) {
    // handle error here
})

/*
Promises
o An object in JavaScript
o Alleviates "callback hell"
o Allows you to write code that assumes a value is returned eventually within
    a success function
*/