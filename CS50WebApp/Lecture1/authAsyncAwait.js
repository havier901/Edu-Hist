//Refactored auth.js to use Async/Await rather than Promises

async function login(req, res, callback) {
    try {
        const user = await User.findOne({email: req.body.email}) 
        const isMatch = await user.comparePassword(req.body.password)

        if (!isMatch) return res.status(401).send('Incorrect password')

        const payload = {id: user._id, email: user.email}
        const token = await jwt.sign(payload, config.secret, {})
        
        
        user.token = token
        const success = await user.save()
        
        
        res.json({token})
    }   catch (err) {
        callback(err)
    }
}
/*
Promises
o An object in JavaScript
o Alleviates "callback hell"
o Allows you to write code that assumes a value is returned eventually within
    a success function
o Only needs a single error handler
o Promises were introduced fairly recently so most newer code
    is replacing callback hells with callback/.then/.catch

Async/Await
o Introduced in ES2017
o Allows people to write async code as if it were synchronous

this
o Refers to an object that's set at the creation of a new
    execution context (function invocation)
o In the global execution context, refers to global object
o If the function is called as a method of an object, 'this' is
    bound to the object the method is called on
*/