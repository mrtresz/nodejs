
const express = require('express'),
    homeControllers = require('./controllers/homeControllers'),
    layouts = require('express-ejs-layouts'),
    app = express();

app.set("port", process.env.PORT || 3000);
const port = app.get('port')
app.set("view engine", "ejs");

app.use(homeControllers.logUrl)
app.use(layouts)


app.get("/name/:myName", homeControllers.respondWithName);
app.get("/contact", homeControllers.respondWithContact)


app.listen(port, () => {
    console.log(`Server up and running on port :${port}`)
})



