function printOne() {
    console.log('one')
}

function printTwo() {
    console.log('two')
}

function printThree() {
    console.log('three')
}

printOne()
printTwo()
printThree()
//returns
//1
//2
//3

setTimeout(printOne, 1000)
setTimeout(printTwo, 0)
printThree()
//returns
//3
//2
//1

// setTimeout() is an asynchronous function
/*
Synchronous? Async? Single-Threaded
o JavaScript is a single-threaded, synchronous language
o A function that takes a long time to run will cause a page to become unresponsive
o JavaSript has functions that act asynchronously
o But how can it be both synchronous and asynchronous?

Asynchronous Javascript
o Execution Stack
o Browser APIs
o Function queue
o Event loop

Execution Stack
o Functions invoked by other functions get added to the call stack
o When functions complete, they are removed from the stack and the frame
    below continues executing

Example of singlethread:

function hang(secs) {
    const doneAt = Date.now() + (secs * 1000)
    while (Date.now() < doneAt) {} // empty brackets means do nothing
} 

Calling the above function would delay the program from continuing until the function 
completed in in however many secs, which chould cause javascript to time out, as it is a single-threaded
and synchronous programming language (one function at a time)
*/