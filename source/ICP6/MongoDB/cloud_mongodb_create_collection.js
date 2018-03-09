var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://sumith:sumithkumar!1@ds147228.mlab.com:47228/sumith';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("sumith");
    dbase.createCollection("newCollection", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
