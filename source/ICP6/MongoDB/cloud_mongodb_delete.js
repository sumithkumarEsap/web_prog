/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://sumith:sumithkumar!1@ds147228.mlab.com:47228/sumith';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("sumith");
    var myquery = { address: 'Main Road 989' };
    dbase.collection("newCollection").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});