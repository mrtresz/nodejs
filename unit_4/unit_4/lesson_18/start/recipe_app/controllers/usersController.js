const User = require('../models/user')

module.exports = {
    index: (req, res, next) => {
        User.find({})
            .then(users => {
                res.render('users/index', { "users": users });
                next()
            })
            .catch(error => {
                console.log(`Error fetching users: ${error.message}`)
                next(error)
            });
    },
    indexView: (req, res) => {
        res.render("users/index");
    }
};