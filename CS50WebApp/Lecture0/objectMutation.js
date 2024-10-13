const o = {
    a: 'a',
    b: 'b',
}

const o2 = o // Stored by reference, they point to eachother

o.a = 'new value'

console.log(o2.a) // Prints 'new value'

// Ways to create an entirely new object

const o3 = {
    a: 'a',
    b: 'b',
}

// Or

const o4 = Object.assign({}, o)

// Deep Copy (As opposed to mutations which simply copy the references of original)
function deepCopy(obj) {
    // Check if vals are objects
    // if so, copy that object (deep copy)
    // else return the value
    const keys = Object.keys(obj)

    const newObject = {}

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (typeof obj[keys[i]] === "object") {
            newObject[key] = deepCopy(obj[key])
        }
        else {
            newObject[key] = obj[key]
        }
    }
    return newObject
}

/* Protypal Inheritance
o Non-prmitive types have a few properties/methods associated
with them
    - Array.prototype.push()
    - String.prototype.toUpperCase()
o Each object stores a reference to its prototype
o Properties/methods defined most tightly to the instance have priority

o Most primitive types have object wrappers
    -String()
    -Number()
    -Boolean()
    -Object()
    -(Symbol())
o JS will automatically "box" (wrap) primitive values so you have access to methods

o Why use reference to prototype?
    - Save space and time
o What's the alternative?
    -Deep copying, else you risk changeing every instance of said object
    
*/