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

// Filter projects
const projFilter = (req) => (projects) =>
    projects.directory === req.params.project;

app.get('/projects/:project', (req, res) => {
    const found = projects.some(projFilter(req));
    if (found) {
        // console.log(req.params);
        const projectArray = projects.filter(projFilter(req));
        const [{ title, directory }] = projectArray;
        res.render('description', {
            title: `${title}`,
            projectArray,
            link: directory,
        });
    } else {
        // render 404 page
        console.log('404 not found');
    }
});

// Render / Homepage
app.get('/', (req, res) => {
    // console.log('showhomepage');
    res.render('index', {
        title: 'Home',
        projects,
    });
});

app.use(express.static(path.join(__dirname, 'projects')));
app.use(express.static(path.join(__dirname, 'dist', 'css')));

// PORT
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
