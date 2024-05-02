// Our simple server
// const http = require("http");
// const server = http.createServer((req, res) => {
//     console.log(req.url)
//     res.end("Hello Node.js")
// })

// server.listen(3000);

// Creating a server with more requests
// const http = require("http");
// const server = http.createServer((req, res) => {
// if(req.url === "/about")
//     res.end("the about page")
// else if(req.url === "/contact")
//     res.end("the contact page")
// else if(req.url === "/")
//     res.end("home page")
// else {
//     res.writeHead(404)
//     res.end("page not found")
// }
// })
// server.listen(3000);

// Responding with HTML
const http = require("http");
const fs = require("fs");
const homePage = fs.readFileSync("index.html");
const aboutPage = fs.readFileSync("about.html");
const contactPage = fs.readFileSync("contact.html");
const notFoundPage = fs.readFileSync("notfound.html");

server = http.createServer((req, res) => {
    if (req.url === "/about")
        res.end(aboutPage)
    else if (req.url === "/contact")
        res.end(contactPage)
    else if (req.url === "/")
        res.end(homePage)
    else {
        res.writeHead(404)
        res.end(notFoundPage)
    }
})

server.listen(3000);