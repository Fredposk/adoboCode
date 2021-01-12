const express = require('express');
const path = require('path');
const url = require('url');
const app = express();
const morgan = require('morgan');
app.use(
    express.urlencoded({
        extended: false,
    })
);
// PORT
const PORT = process.env.PORT || 8081;

// Middleware
app.use(morgan('tiny'));
app.use(require('cookie-parser')());
app.use(cookie);

app.use(express.static(path.join(__dirname, 'projects')));
app.use(express.static('./public'));

app.get('/cookie', (req, res) => {
    res.send(`<h1>You must accept cookies to continue</h1><form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">

             <div>
                <input type="checkbox" name="subscribe"><span>Would you like to Continue</span>
            </div>
            <button> ACCEPT 🍪 </button>
        </form>
    `);
});

app.post('/cookie', (req, res) => {
    const { subscribe } = req.body;
    if (subscribe) {
        res.cookie('CookieCrisp', true);
        res.send(`<h1>WELCOME TO ASTROWORLD</h1>`);
    } else {
        res.send(`<h1>Must accept cookies to continue</h1>`);
    }
});

const cookie = () => {
    app.use((req, res, next) => {
        let local = req.url;
        if (req.url == '/cookie') {
            console.log(local);
            next();
        } else {
            if (!res.cookie('CookieCrisp')) {
                console.log('thing');
                res.redirect('./cookie');
            } else {
                next();
            }
        }
    });
};

app.listen(PORT, () => console.log(`listening on port ${PORT}}`));
