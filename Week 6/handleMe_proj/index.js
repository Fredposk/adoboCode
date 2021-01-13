const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const projects = require('./projects.json');

const app = express();
// Logging middleware
app.use(morgan('tiny'));
// Rendering Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// Render / Homepage
app.get('/', (req, res) => {
    // console.log('showhomepage');
    res.render('index', {
        projects,
    });
});

app.use(express.static(path.join(__dirname, 'projects')));
app.use(express.static(path.join(__dirname, 'dist', 'css')));

// PORT
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
