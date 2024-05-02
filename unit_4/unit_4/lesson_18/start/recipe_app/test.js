const mongoose = require("mongoose"),
    User = require("./models/user.js"),
    Subscriber = require('./models/subscriber')


mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

let testUser = User.findOne({
    name: {
        first: "Jon"
    }
});

// User.create({
//     name: {
//         first: "Jon",
//         last: "Wexler"
//     },
//     email: "jon@jonwexler.com",
//     password: "pass123"
// })
//     .then(user => testUser = user)
//     .catch(error => { console.log(error.message) })



var targetSubscriber;
Subscriber.findOne({
    email: testUser.email
})
    .then(subscriber => targetSubscriber = subscriber);