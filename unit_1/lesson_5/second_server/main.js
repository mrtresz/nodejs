const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn more about us</h1>",
    "/hello": "<h1>Say hello by emailing us here</h1>",
    "/error": "<h1>Sorry the page youre looking for in not here</h1>",
}


const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes");

app = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (routeResponseMap[req.url]) {
        setTimeout(() => res.end(routeResponseMap[req.url]), 2000)
    } else {

        let responseMessage = "<h1>Welcome!</h>";
        res.end(responseMessage);
    }

})

app.listen(port)
console.log(`Server started and running on port ${port}`)






// const port = 3000,
//     http = require("http"),
//     httpStatus = require("http-status-codes"),

//     app = http.createServer();

// const getJSONString = obj => {
//     return JSON.stringify(obj, null, 2);
// }

// app.on("request", (req, res) => {

//     var body = [];
//     req.on("data", (bodyData) => {
//         body.push(bodyData);
//     });

//     req.on("end", () => {
//         body = Buffer.concat(body).toString();
//         console.log(`Request Body Contents: ${body}`);
//     })

//     res.writeHead(200, { "Content-Type": "text/html" });

//     let responseMessage = "<h1>Welcome</h1>";
//     res.end(responseMessage);

//     console.log("Method: " + getJSONString(req.method));
//     console.log("URL: ", getJSONString(req.url));
//     console.log("Headers", getJSONString(req.headers));

// })

// app.listen(port);
// console.log(`The server has started end is listening on port number: ${port}`)