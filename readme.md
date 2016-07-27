#oAUTH demo

A quick test to demonstrate how to handle oAuth tokens using Twitter's API. This test file pulls back the last 200 followers from the twitter account jonwade_digital.

##Method
The node file first sets up a promise to accesss the unirest http library and makes a call to the token endpoint of the API. When the bearer token is received from the server, it is returned from the promise. That token is then used in the header of the next call to the API follower endpoint. The response is then parsed to output the 200 follower names to the console.

##Note
A base64 encoded consumer API key and Consumer API Secret Key is required to access the Twitter API. I access these keys thus 'consumerkey:consumersecretkey' from the file 'bearerToken.js' which I have not pushed to GitHub as the details are confidential. However the code looks like this:

`module.exports = function() {
       return 'consumerkey:consumersecretkey';};`

The test.js file will not run without these credentials, but the code can still be examined without knowing those details.