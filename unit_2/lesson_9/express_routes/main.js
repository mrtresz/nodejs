"use strict";

const homeController = require("./controllers/homeController");

const port = 3000,
    express = require('express'),
    app = express();


//define a middleware function
app.use(homeController.logUrlParams);

app.use(express.urlencoded({ extended: false }))

app.use(express.json());

app.post('/', homeController.sendReqUrl)


app.get("/items/:vegetable", homeController.sendReqParam);

app.listen(port, () => {
    console.log("Server up and rinning on port " + port)
})

