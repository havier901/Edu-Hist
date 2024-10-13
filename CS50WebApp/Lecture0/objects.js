const o = new Object()
o.firstName = "Havi"
o.lastName = 'Green'
o.isLearning = true
o.Greet = function() {
    console.log('hi!')
}

const o2 = {} // Prefered way. Object literal
o.firstName = "Havi"
o['lastName'] = "Green"
const key = "isLearning"
o[key] = true
o['greet'] = function() {
    console.log('hi!')
}

const o3 = { // Straight down
    firstName: "Havi",
    lastName: "Green",
    isLearning: true,
    greet: function() {
        console.log('hi!')
    },
    address: {              // Nested Object within Object
        street: "Main St.",
        number: 123
    }
}