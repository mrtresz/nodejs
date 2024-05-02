"use strict";

exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
};


exports.sendReqUrl = (req, res) => {
    res.send("POST Successful")
}

exports.logUrlParams = (req, res, next) => {
    console.log(`request made to: ${req.url}`)
    next();
}
