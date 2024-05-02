const bcrypt = require("bcrypt");
const User = require("../models/User");

/*module.exports = (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username: username}, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if(same) {
                    res.redirect("/");
                } else {
                    res.redirect("/auth/login")
                }
            })
        } else {
            res.redirect("/auth/login")
        }
    })
}*/

module.exports = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });

        if (user) {
            const same = await bcrypt.compare(password, user.password);
            if (same) {
                req.session.userId = user._id;
                res.redirect("/");
            } else {
                res.redirect("/auth/login");
            }
        } else {
            res.redirect("/auth/login");
        }
    } catch (error) {
        // Handle the error (e.g., log it or send an error response)
        console.error('Error authenticating user:', error);
        res.status(500).send('Internal server error');
    }
};
