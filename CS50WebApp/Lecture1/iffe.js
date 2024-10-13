// sayHello is an IFFE as anonymous function
const sayHello = ( function() {
    var message = 'Hello!'

    function sayHello() {
        console.log(message)
    }

    return sayHello
}) ()

console.log('typeof message:', typeof message) 
console.log(sayHello.toString()) 

sayHello() 

// Example 2, Why use an IFFE?

const counter = (function() {
    let count = 0 // No one has access to this variable because its
                    // it's scope is limited to the code block
                    // and only the return functions have access to that

    return {
        inc: function() { count = count + 1},
        get: function () { console.log(count)},
    }
})()

counter.get() // 0
counter.inc() 
counter.get() // 1

/*
Immediately Invoked Function Expression
o A function expression that gets invoked immediately
o Also creates closure
o Doesn't add to or modify global object
o Also know as an "IFFE"
*/