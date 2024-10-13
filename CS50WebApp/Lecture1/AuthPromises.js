//Refactored auth.js to use Promises rather than callbacks

function login(req, res, callback) {
    User.findOne({email: req.body.email}) 
    .then(function(user) {
       return user.comparePassword(req.body.password)
    })
    .then(function(isMatch) {
        if (!isMatch) return res.status(401).send('Incorrect password')
        else {
            const payload = {id: user._id, email: user.email}
            return jwt.sign(payload, config.secret, {})
        }
    })
    .then(function(token) {
        user.token = token
        return user.save()
    })
    .then(function() {
        res.json({token})
    })
    .catch(function(err) {
        return callback(err)
    })
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
*/