const express = require('express');
const morgan = require('morgan');
const { getToken, getTweets, filterTweets } = require('./twitter');

const app = express();

// Logging middleware
app.use(morgan('tiny'));
// static route
app.use(express.static('./ticker'));

app.get('/data.json', (req, res) => {
    // console.log('Request for data.json was made');
    // NEXT STEPS
    // 1. Get our bearer token from twitter
    getToken((err, bearerToken) => {
        if (err) {
            console.log('err getting the bearer token: ', err);
            return;
        }
        // console.log('bearerToken: ', bearerToken);
        // 2. Get the tweets from twitter using the bearer token.
        getTweets(bearerToken, (err, tweets) => {
            if (err) {
                console.log('error getting tweets: ', err);
                return;
            }
            // console.log('tweets: ', tweets);
            // 3. Filter & sort them into the correct format
            const filteredTweets = filterTweets(tweets);
            // 4. Send them back as JSON to ticker
            console.log(filteredTweets);
            res.json(filteredTweets);
        });
    });
});

// PORT
const PORT = process.env.PORT || 8080;
app.listen(8080, () => {
    console.log(`Server started on ${PORT}`);
});
