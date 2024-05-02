const User = require("../models/User.js");
const path = require("path");

/*module.exports = async (req, res) => {
    try {
        const user = await User.create(req.body);
       
        res.redirect('/');
    } catch (error) {
        // Handle the error (e.g., log it or send an error response)
        console.error('Error creating user:', error);
        res.status(500).redirect("/auth/register");
        
    }
};*/


/*module.exports = async (req, res) => {
    try {
        const user = await User.create(req.body);
        if (user) {
            res.redirect('/');
        } else {
            // Handle the case where user creation failed
            res.status(500).send('Internal server error');
        }
    } catch (error) {
        // Handle other errors (e.g., validation errors)
        const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
        req.session.validationErrors = validationErrors;
        res.redirect('/auth/register');
    }
};*/

module.exports = (req, res) => {
    User.create(req.body).then(() => {
        res.redirect('/')
    }).catch(error => {
        const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
        req.flash('validationErrors', validationErrors)
        req.flash('data', req.body)
        //req.session.validationErrors = validationErrors
        return res.redirect('/auth/register')
    })
}