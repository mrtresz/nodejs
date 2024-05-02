exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName;
    res.render("index", { name: paramsName });
}

exports.logUrl = (req, res, next) => {
    console.log(req.url)
    next();
}

exports.respondWithContact = (req, res) => {
    res.render('contact')
}