const express = require('express');
const morgan = require('morgan');
const { getToken, getTweets, filterTweets } = require('./twitter');

const app = express();

// Logging middleware
app.use(morgan('tiny'));
// static route
app.use(express.static('./ticker'));

app.get('/data.json', async (req, res) => {
    try {
        const bearerToken = await getToken();
        const unfilteredTweets = await Promise.all([
            getTweets(bearerToken, 'BBCNews'),
            getTweets(bearerToken, 'nytimes'),
            getTweets(bearerToken, 'deutschewelle'),
        ]);
        const filteredTweets = await filterTweets(unfilteredTweets.flat());
        // console.log(filteredTweets);
        res.json(filteredTweets);
    } catch (error) {
        console.log(error);
    }
});

// promises
//     getToken()
//         .then((bearerToken) => {
//             return Promise.all([
//                 getTweets(bearerToken, 'BBCNews'),
//                 getTweets(bearerToken, 'nytimes'),
//                 getTweets(bearerToken, 'deutschewelle'),
//             ]);
//         })
//         .then((unfilteredTweets) => {
//             filterTweets(unfilteredTweets);
//         })
//         .then((filteredTweets) => {
//             res.json(filteredTweets);
//         });
// });

// PORT
const PORT = process.env.PORT || 8080;
app.listen(8080, () => {
    console.log(`Server started on ${PORT}`);
});
