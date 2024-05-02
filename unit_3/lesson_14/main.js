const mongoose = require("mongoose") //require mongoose

mongoose.connect("mongodb://localhost:27017/recipe_db");
const db = mongoose.connection;
const Subscriber = require("./models/subscriber")


db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
})



// let subscriber1 = new Subscriber({
//     name: "Jon Wexler",
//     email: "jon@jonwexler.com"
// });

// subscriber1.save((error, savedDocument) => {
//     if (error) console.log(error);
//     console.log(savedDocument);
// });

Subscriber.create({
    name: "Jon Wexler",
    email: "jon@jonwexler.com"
})
    .then((savedDocument) => console.log(savedDocument))
    .catch(error => console.log(error));


// Subscriber.findOne({ name: "Jon Wexler" }).where("email", "/wexler/")


let myQuery = Subscriber.findOne({
    name: "Jon Wexler"
})
    .where("email", /wexler/)
    .then((data) => {
        console.log(data.name);
    })
    .catch((error) => {
        console.log(error);
    })