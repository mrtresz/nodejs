const User = require('../models/User.js');
const path = require('path');

module.exports = (req, res) => {
    User.create(req.body)
        .then(user => {
            res.redirect('/');
        })
        .catch(error => {
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
            req.session.validationErrors = validationErrors;
            res.redirect('/auth/register');
        });
};


