function addOne(num) {
    return num + 1
}

function getNum() {
    return addOne(10)
}

function c() {
    console.log(getNum() + getNum())
}

c() // returns 22 -- the multi-references of functions require use of the Stack

/*
Execution Stack
o Functions invoked by other functions get added to the call stack
o When functions complete, they are removed from the stack and the frame
    below continues executing
o An example in JavaScript of the call stack is getting an Error
    -when you get an error the call stack is dumped onto the console for your reviews

The browser handles all API functions, so the stack throws it over to the browser
    when called
The function waiting in the API runs and the gets put into the function queue

The event loop is constantly checking:
    - First, is there anything on the stack? If so run
    - If not, is there anything in the function queue? If so, move to stack

STACK -> API -> FUNCTION QUEUE -> STACK

In the browser, there is no guarantee what order the functions will be handled
thus they are aynchronous

Asynchronous JavaScript
o Examples Of Common Asynchronous functions in JavaScript
    - setTimeout()
    - XMLHttpRequest(), jQuery.ajax(), fetch()
    - Database calls

Callbacks
o Are how you control flow with asynchronous calls
o Execute function once asynchronous call returns value
    -Program doesn't have to thalt and wait for value
        -You don't wont until your friend gets off work in 5 hours, you do something else!
    

*/