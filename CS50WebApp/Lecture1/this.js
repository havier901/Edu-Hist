const person = {
    name: "havi",
    greet: function() { 
        console.log('hello, ' + this.name)
    },
}

person.greet() // returns 'hello, havi'

const friend = {
    name: 'david',
}

friend.greet = person.greet
friend.greet() // returns hello, david

// You can manually bind 'this' to an object using bind
const greet = person.greet.bind( {name: 'this is a bound object'})

person.greet.call({name: 'call example'}) // both call and apply immediately invoke the function and
person.greet.apply({name: 'apply example'}) // do not need to be instantiated into a variable

// ES6 ARROW NOTATION
const newPerson = {
    name: 'newPerson',
    greet: () => {console.log('hi, ' + this.name)}, // this here refers not to the newPerson object
                                                    //but to the global object, due to arrow notation
                                                    // binding this to whatever this was at the writing
                                                    // of the code
}

newPerson.greet()

// this.name = 'john' // this would 'technically' fix the greet() below in theory because it assigns name to the global object

// const greet = person.greet // if I did this without asigning this.name, then 
                                // greet is a global object, and thus has no access to name

greet() // 

/*
this
o Refers to an object that's set at the creation of a new
    execution context (function invocation)
o In the global execution context, refers to global object
o If the function is called as a method of an object, 'this' is
    bound to the object the method is called on

Setting 'this' manually
o bind(), call(), apply()
o ES6 arrow notation

Browsers and the DOM
o Browsers render HTML to a webpage
o HTML defines a tree-like structure
o Browsers construct this tree in memory before painting the page
o This 'tree' is called the Document Object Model
o The DOM can be modified using JavaScript

*/