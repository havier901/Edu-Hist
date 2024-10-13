function doSomethingAsync(callback) {
    setTimeout(function() {callback(1)}, 1000)
}

doSomethingAsync(console.log)

/*
Callbacks
o Are how you control flow with asynchronous calls
o Execute function once asynchronous call returns value
    -Program doesn't have to thalt and wait for value
        -You don't wait until your friend gets off work in 5 hours, you do something else!
*/