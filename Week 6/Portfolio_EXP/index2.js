const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const basicAuth = require('basic-auth');
app.use(
    express.urlencoded({
        extended: false,
    })
);
// PORT
const PORT = process.env.PORT || 1337;

// Middleware
app.use(morgan('tiny'));
app.use(require('cookie-parser')());

app.get('/cookie', (req, res) => {
    res.send(`<h1>You must accept cookies to continue</h1><form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">

             <div>
                <input type="checkbox" name="subscribe"><span>Would you like to Continue</span>
            </div>
            <button> ACCEPT 🍪 </button>
        </form>
    `);
});

app.post('/cookie', (req, res, next) => {
    const { subscribe } = req.body;
    if (subscribe) {
        res.cookie('session_ID2', true);
        res.send(`<h1>WELCOME TO ASTROWORLD</h1>`);
    } else {
        res.send(`<h1>Must accept cookies to continue</h1>`);
    }
});

const validateCookie = (req, res, next) => {
    const { cookies } = req;
    // console.log(cookies);
    if ('session_ID2' in cookies) {
        next();
    } else {
        res.locals.myvar = req.originalUrl;
        console.log(res.locals.myvar);
        res.redirect('/cookie');
    }
};

app.use(validateCookie);

// const redirect = (req, res, next) => {
//     console.log(res.locals.myvar);
//     next();
// };
// app.use(redirect);

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != 'fred' || creds.pass != 'adobo') {
        res.setHeader(
            'WWW-Authenticate',
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.get('/connect4', auth, function (req, res) {
    res.sendFile(path.join(__dirname, 'Projects', 'connect4'));
});

app.use(express.static(path.join(__dirname, 'projects')));
app.use(express.static('./public'));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
