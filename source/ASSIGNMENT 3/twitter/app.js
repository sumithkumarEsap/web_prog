$(document).ready(function () {

    //var Twitter = require('twit');
    //var twitterAuth = require('twitter-oauth')({
    //    consumerKey: "PS8tSaiHnvm3oMucUG2Gux4ID", /* per appication - create a comsumer key here: https://dev.twitter.com/apps */
    //    domain: 'http://localhost',
    //    consumerSecret: "5yBgCTor61Er41MagNarvPhZw0hui4di1ZR0UBpMDOIIdyGUdH", /* create a comsumer key here: https://dev.twitter.com/apps */
    //    loginCallback: "http://localhost/twitter/sessions/callback",  /* internal */
    //    completeCallback: "http://localhost/home"  /* When oauth has finished - where should we take the user too */
    //});

//    var oauth = new OAuth.OAuth(
//    'https://api.twitter.com/oauth/request_token',
//    'https://api.twitter.com/oauth/access_token',
//    config.twitterConsumerKey,
//    config.twitterSecretKey,
//    '1.0A',
//    null,
//    'HMAC-SHA1'
//);

    var twit = require('twitter-oauth');
    var username = "SumithKumarE";
    var config = {
        "consumer_key": "QFDsQILNtfNmTQtCUe0cY7bJt",
        "consumer_secret": "LggP2UY5ShBFTL7SgsHd5x6L0qMAZSPcv9NNz6wFv5RsYswRdR",
        "access_token": "912466159139770368-8SLbV6duOgY0WPcIVJAMOqUJN1Wz78R",
        "access_token_secret": "yvUFtkyeajN6jDTVhfTOkqwfYAaoZu5CZE1aOz5qbepdb"
    }
    //var twitter = new Twitter(config);
    var twt = new twit(config);
    twt.get('favorites/list', function (error, tweets, response) {
        if(error) throw error;
        console.log(tweets);  //FAV
        console.log(response);  // RAW OBJECT.
    });
});