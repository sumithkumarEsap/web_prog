

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://sumith:sumithkumar!1@ds147228.mlab.com:47228/sumith'; //mongodb://<dbuser>:<dbpassword>@ds239128.mlab.com:39128/<dbname>

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connected correctly to server");
    db.close();
});