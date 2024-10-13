function makeFunctionArray() {
    const arr = []

    for (var i = 0; i < 5; i++) { 
        arr.push((function (x) {
            return function () { console.log(x) } 
        })(i))
    } 

    return arr
}

const functionArr = makeFunctionArray() 

functionArr[0]() // returns 0 as expected, not 5, which is buggy

/*
o Not something you see everyday, but helps to know
o May see libraries being imported by IFFE, so that a lot of variables
    created while importing library don't pollute the global scope

First-Class Functions
o Functions are treated the same way as any other value
    - Can be assigned to variables, array values, object values
    - Can be passed as arguments to other functions
    - Can be returned from functions
o Allows for the creation of higher-order functions
    - Either takes one or more functions as arguments or returns a function
    - I.e. map(), filter(), reduce() -- most famous high order functions 

Map()
const x = [1, 2, 3]

function addOne(number) { 
    return number + 1
}

x.map(addOne)
[2, 3, 4]

Filter()

function isGreaterThanOne(number) {
    return num > 1
}

 x.filter(isGreaterThanOne)
 [2, 3]

 Reduce()
 
 function add(x, y) {
    return x + y
 }

 x.reduce(add)
 6
*/