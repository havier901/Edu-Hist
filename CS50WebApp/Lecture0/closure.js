function makeFunctionArray() {
    const arr = []

    for (var i = 0; i < 5; i++) {
        arr.push(function() { console.log(i)})
    }

    return arr
}

const arr = makeFunctionArray() // Will give us a series of numbers 0 - 5, we expet the first
                                // item in the array to be 0, but it is 5. This is why
                                // closures are tricky. To be continued next lecture

/*
Closures (teaser)
    o Functions that refer to variables declared by a parent function
    o Possible because of scoping
*/