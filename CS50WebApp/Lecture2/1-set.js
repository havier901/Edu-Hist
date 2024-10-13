// Set should maintain a list of unique values and should support add, delete,
//and inclusion. It should also have the ability to get its size.

class Set {
    constructor(arr) {
        this.arr = arr
    }

    add(val) {
        if (!this.has(val)) this.arr.push(val)
    }

    delete(val) {
        this.arr = this.arr.filter(x => x !== val) // this means look at x and see if x is not equal to val
    }                                               // NOTE: find out what this syntax is

    has(val){
        return this.arr.includes(val)
    }

    get size() {
        return this.arr.length
    }
}

const s = new Set([1,2,3,4,5])

// trying to add the same value shouldn't work
s.add(1)
s.add(1)
s.add(1)
console.log("s should have 5 members and actually has:", s.size)

console.log("s should contain 5:", s.has(5))

s.add(6)
console.log("s should contain 6:", s.has(6))
console.log("s should have 6 members and actually has:", s.size)

s.delete(6)
console.log("s should no longer contain 6:", !s.has(6))
console.log("s should have 5 members and actually has:", s.size)



/*
Previous Lecture
o ES6 and beyond
o Closures
o IIFES
o First-Class Functions
o Execution Stack
o Event Loop
o Callbacks
o Promises and Async/Await
o this

Classes
o Syntax introduced in ES6
o Simplifies the defining of complex objects
    with their own prototypes
o Classes vs instances
o Methods vs static methods vs properties
    - static methods are related closer to the Class than an instance;
        - Date.now() returns immediate date
    - Methods in general are related closer to the instance
        - d.toString() returns a specific instance of Date() to a string
    - Properties are like methods but instead of being functions,
        are just values
        - Associated with a particular instance of class
o new, constructor, extends, super
    - new is used to create a new instance of a class
    - constructor is a method within a class used to create instances of the class
    - extends says "hey I want to start with the base class but add some more to that class"
    - super is usefule when you are extending that base class
*/