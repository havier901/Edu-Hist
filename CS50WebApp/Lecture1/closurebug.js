function makeFunctionArray() {
    const arr = []

    for (var i = 0; i < 5; i++) { // if var was let, we would not have
        arr.push(function() { console.log(i) }) // access pass the code block
    }
    
    console.log(i) // i = 5, due to use of var, we have access outside code block

    return arr
}

const functionArr = makeFunctionArray() 

// console.log(i) // undefined because it is out of scope

functionArr[0]() // if we use var it returns as 5, if we use let returns as 0

/**
Closures
o Functions that refer to variables declared by parent function still have access to those variables
    -variables that "might have already left scope"
o Possible because of JavaScript's scoping

o The function has access to the variable, but we do not outside of the original function
 */