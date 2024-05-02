const port = 3000;
http = require("http");
httpStatus = require("http-status-codes");

app = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    let responseMessage = "<h1>Welcome!</h>";
    res.end(responseMessage);
})

app.listen(port)
console.log(`Server started and running on port ${port}`)


