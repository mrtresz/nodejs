const User = require("../models/User")

/*module.exports = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {
        if(error || !user)
        return res.redirect("/")

        next()
    })
}*/

module.exports = async (req, res, next) => {
    try {
        const user = await User.findById(req.session.userId);
        if (!user) {
            return res.redirect("/");
        }
        next();
    } catch (error) {
        // Handle the error (e.g., log it or send an error response)
        console.error('Error finding user:', error);
        res.status(500).send('Internal server error');
    }
};
