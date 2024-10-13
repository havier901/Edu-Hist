//take from a personal project of mine

function login(req, res, callback) {
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) return callback(err)

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) return callback(err)
            if (!isMatch) return res.status(401).send('Incorrect password')

            // add relevant data to token
            const payload = {id: user._id, email: user.email}

            jwt.sign(payload, config.secret, {}, function(err, token) {
                if (err) return callback(err)

                user.token = token
                user.save((err) => {
                    if (err) return callback(err)
                        res.json({token})
                })
            })
        })
    })
}
/*
This is called "Callback Hell", callback within callback, within callba...

Promises
o An object in JavaScript
o Alleviates "callback hell"
o Allows you to write code that assumes a value is returned eventually within
    a success function
o Only needs a single error handler
*/