const https = require('https');
const { twitterKey, twitterSecret } = require('./secrets');

module.exports.getToken = function (callback) {
    const creds = `${twitterKey}:${twitterSecret}`;
    const encodedCreds = Buffer.from(creds).toString('base64');

    const config = {
        method: 'POST',
        host: 'api.twitter.com',
        path: '/oauth2/token',
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
    };

    function httpsRequestCallback(res) {
        if (res.statusCode !== 200) {
            callback(res.statusCode);
            return;
        }
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
            const parsedBody = JSON.parse(body);
            callback(null, parsedBody.access_token);
        });
    }

    const req = https.request(config, httpsRequestCallback);
    req.end('grant_type=client_credentials');
};

module.exports.getTweets = function (bearerToken, callback) {
    const twits = {
        method: 'GET',
        host: 'api.twitter.com',
        path: `/1.1/statuses/user_timeline.json?screen_name=BBCNews&tweet_mode=extended`,
        headers: { Authorization: `Bearer ${bearerToken}` },
    };

    function twitsCallback(res) {
        if (res.statusCode !== 200) {
            callback(res.statusCode);
            return;
        }
        let body = [];
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
            const parsedBody = JSON.parse(body);
            callback(null, parsedBody);
        });
    }
    const req = https.request(twits, twitsCallback);
    req.end();
};
module.exports.filterTweets = function (tweets) {
    const result = tweets
        .filter((tweet) => tweet.entities.urls.length == 1)
        .map((tweet) => ({
            text: tweet.full_text.replace(/(?:https?):\/\/[\n\S]+/g, ''),
            url: tweet.entities.urls[0].url,
        }));
    // console.log(result);
    return result;
};
