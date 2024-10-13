function recurse() {
    console.log('recursion!')
    return recurse()
}

/*
This would lead to a stack overflow
    -RangeError: Maximum call stack size exceeded
    -We basically make the computer run out of available memory for the stack
*/