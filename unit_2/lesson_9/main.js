const port = 3000,
    express = require('express'),
    app = express();

app.post('/contact', (req, res) => {
    res.send("Contact information submitted successfully.");
});

app.get('/items/:vegetable', (req, res) => {
    res.send(req.params.vegetable);
});



app.listen(port, () => {
    console.log(`Server up and running on port ${port}`)
})