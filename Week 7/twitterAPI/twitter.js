const https = require('https');
const { twitterKey, twitterSecret } = require('./secrets');

module.exports.getToken = () => {
    return new Promise((resolve, reject) => {
        const creds = `${twitterKey}:${twitterSecret}`;
        const encodedCreds = Buffer.from(creds).toString('base64');

        const config = {
            method: 'POST',
            host: 'api.twitter.com',
            path: '/oauth2/token',
            headers: {
                Authorization: `Basic ${encodedCreds}`,
                'Content-Type':
                    'application/x-www-form-urlencoded;charset=UTF-8',
            },
        };

        const httpsRequestCallback = (res) => {
            if (res.statusCode !== 200) {
                reject(res.statusCode);
            }
            let body = '';
            res.on('data', (chunk) => (body += chunk));
            res.on('end', () => {
                try {
                    const parsedBody = JSON.parse(body);
                    // console.log(parsedBody.access_token);
                    resolve(parsedBody.access_token);
                } catch (error) {
                    reject('error at the JSONparse');
                }
            });
        };

        const req = https.request(config, httpsRequestCallback);
        req.end('grant_type=client_credentials');
    });
};

module.exports.getTweets = (bearerToken, source) => {
    return new Promise((resolve, reject) => {
        const twits = {
            method: 'GET',
            host: 'api.twitter.com',
            path: `/1.1/statuses/user_timeline.json?screen_name=${source}&tweet_mode=extended`,
            headers: { Authorization: `Bearer ${bearerToken}` },
        };
        const twitsCallback = (res) => {
            if (res.statusCode !== 200) {
                reject(res.statusCode);
            }
            let body = [];
            res.on('data', (chunk) => (body += chunk));
            res.on('end', () => {
                const parsedBody = JSON.parse(body);
                // console.log(parsedBody);
                resolve(parsedBody);
            });
        };
        const req = https.request(twits, twitsCallback);
        req.end();
    });
};
module.exports.filterTweets = (tweets) => {
    return new Promise((resolve, reject) => {
        try {
            const result = tweets

                .filter((tweet) => tweet.entities.urls.length == 1)
                .map((tweet) => ({
                    text: tweet.full_text.replace(
                        /(?:https?):\/\/[\n\S]+/g,
                        ''
                    ),
                    url: tweet.entities.urls[0].url,
                    user: tweet.user.name,
                    time: tweet.created_at,
                }))
                .sort((a, b) => {
                    Date(b.created_at) < Date(a.created_at);
                });
            resolve(result);
        } catch (error) {
            reject('didnt work');
        }
    });
};
