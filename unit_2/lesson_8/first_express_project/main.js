const port = 3000,
    // adding the express module to my application
    express = require('express'),

    //assigning the express application to the app constant
    app = express();


//setting up a get route for the home page
app.get('/', (req, res) => {


    console.log(req.params);  //access request parameters
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);

    res.send("Hello World!"); //issue a response from the server to the client using res.send()
})
    //set up the application to listen at port 3000
    .listen(port, () => {
        console.log(`The Express.js server has started and is listening on port number: ${port}`)
    });