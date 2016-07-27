var unirest = require('unirest');
var bearerToken = require('./bearerToken.js');

var base64bearerToken = new Buffer(bearerToken()).toString('base64');

// console.log(base64bearerToken);

var getAccessToken = function() {
    return new Promise(function(resolve, reject) {
        unirest.post('https://api.twitter.com/oauth2/token')
            .headers({
                "Authorization": "Basic " + base64bearerToken,
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            })
            .send(
                "grant_type=client_credentials"
            )
            .end(function(res) {
                if (res.status === 200) {
                    var access_token = res.body.access_token;
                    console.log(res.body.access_token);
                    resolve(access_token);
                }
                reject(res.body);
            });
    });
};

getAccessToken().then(function(access_token) {

    unirest.get('https://api.twitter.com/1.1/followers/list.json?screen_name=jonwade_digital&count=200')
        .headers({
            "Authorization": "Bearer " + access_token,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        })
        .end(function(res) {
            for (var i=0; i<res.body.users.length; i++) {
                console.log('Follower #' + (i+1) + ':', res.body.users[i].name);
            }
        });

}, function(reject) {
    console.log('There was a problem receiving your access_token', reject);
});





