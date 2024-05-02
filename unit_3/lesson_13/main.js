//require the mongoDB module

const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://localhost:27017",
    dbName = "recipe_db";

//set up a connection to my local database server
MongoDB.connect(dbURL, (error, client) => {
    if (error) throw error;

    //get the recipe_db database for my conection to the mongodb server
    let db = client.db(dbName);

    //find all records in the contacts collection
    db.collection("contacts").find().toArray((error, data) => {
        if (error) throw error;

        //print the results to the console
        console.log(data);
    });

    db.collection("contacts").insert({
        name: "Freddie Mecury",
        email: "fred@queen.com"
    }, (error, db) => {

        //log the resulting errors or saved items
        if (error) throw error;
        console.log(db);
    });
})


