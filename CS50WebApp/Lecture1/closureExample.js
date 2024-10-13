function makeHelloFunction() {
    const message = 'Hello!'

    function sayHello() {
        console.log(message)
    }

    return sayHello
}

const sayHello = makeHelloFunction()

// console.log(message) error message is undefined

console.log('typeof message:', typeof message) // returns undefined
console.log(sayHello.toString()) // simple spells out function as string, 
                                // message exists within function

sayHello() //works!, prints Hello!

/**
Closures
o Functions that refer to variables declared by parent function still have access to those variables
    -variables that "might have already left scope"
o Possible because of JavaScript's scoping

o The function has access to the variable, but we do not outside of the original function
 */