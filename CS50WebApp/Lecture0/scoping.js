thisIsHoisted() // Ok, due to "hoisting"

// thisIsNotHoisted() //Not Ok, declared below as a constant

// console.log(thisIsAConst) // Not ok, var declared afterwards, out of scope
// console.log(thisIsAVar) would not be an error, due to "hoisting"

thisIsAlsoAVariable = "hello" // This creates a Global Variable, rarely used

const thisIsAConst = 50

thisIsAConst++ // ERROR!

const constObj = {}

constObj.a = 'a' // Mutation, OK

let thisIsALet = 51
thisIsALet = 50 // OK

var thisIsAVar = 50 // Ok
thisIsAVar = 51 // Ok
var thisIsAVar = 51 // Ok, var is an older way to declare a variable, 
                    // don't have the same protections, called "shadowing"

// let thisIsALet = 52 // Not Ok, can't declare variable under same name

function thisIsHoisted() {
    console.log('this is a function declared at the bottom of a file')
}

const thisIsNotHoisted = function() {       //declared as a constant, would not be hoisted
    console.log('should this be hoisted?')
}

//var thisIsNotHoisted = function() {       // Error Undefined, would be hoisted but
//    console.log('should this be hoisted') // not declared until this point
//}

//let thisIsNotHoisted = function() {       // TYPE ERROR, this is a variable, not a function
//    console.log('should this be hoisted?') // cannot be hoisted
//}


/*
Scope
o Variable lifetime
    - Lexical scoping (var): from when they're declared until when their function ends
    - Block scoping (const, let): until the next } is reached

o Hoisting
    - Function definitions are hoisted, but not lexically-scoped initializations
            - var as well

The JavaScript Engine
    o Before executing the code, the engine reads the entire file
    and will throw a syntax error if one is found
        - Any function definitions will be saved in memory
        - Variable initializations will not be run, but lexically-scoped variable names will be declared
    o Good for code organization, you can see that all functions will be together at bottom

The Global Object
    o All variables and functions are actually parameters and methods on the global object
        - Browser global object is the 'window' object
            -on console, type window to view the window object
        - Node.js global object is called 'global' 
    
*/