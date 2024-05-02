const express = require("express"); // require express module
const path = require("path");
const app = express();// calls express function to start new Express app
app.use(express.static("public"))

app.listen(3000, () => {
    console.log("App listening on port 3000")
})

// Simple express routing
app.get("/", (req, res) => {
    res.json({
        name: "Greg Lim"
    })
})

// app.get("/about", (req, res) => {
//     res.json({
//         name: "Greg Lim"
//     })
// })

// Serving Other HTML files
app.get("/about", (req, res) => {
    res.sendFile(path.resolve(__dirname, "about.html"))
})

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname, "contact.html"))
})

// Serving Static Files with Express