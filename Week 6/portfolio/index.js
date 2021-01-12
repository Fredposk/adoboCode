const http = require('http');
const fs = require('fs');
const path = require('path');
const getProjectsPage = require('./projects');

const contentTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.gif': 'image/gif',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
};

http.createServer(function (req, res) {
    req.on('error', (err) => console.log(err));
    res.on('error', (err) => console.log(err));

    if (req.method != 'GET') {
        res.statusCode = 405;
        return res.end();
    }

    if (req.url == '/') {
        res.setHeader('Content-Type', 'text/html');
        return res.end(getProjectsPage());
    }

    const reqItem = path.normalize(`${__dirname}/projects${req.url}`);

    if (!reqItem.startsWith(`${__dirname}/projects/`)) {
        res.statusCode = 403;
        return res.end();
    }

    fs.stat(reqItem, function (err, stats) {
        if (err) {
            res.statusCode = 404;
            return res.end();
        }
        let readStream;
        if (stats.isDirectory()) {
            if (req.url.endsWith('/')) {
                res.setHeader('Content-Type', 'text/html');
                readStream = fs.createReadStream(reqItem + 'index.html');
            } else {
                res.statusCode = 302;
                res.setHeader('Location', req.url + '/');
                return res.end();
            }
        } else {
            const contentType = contentTypes[path.extname(reqItem)];
            contentType && res.setHeader('Content-Type', contentType);
            readStream = fs.createReadStream(reqItem);
        }

        readStream.on('error', function (err) {
            console.log(err);
            res.statusCode = err.code == 'ENOENT' ? 404 : 500;
            res.end();
        });

        readStream.pipe(res);
    });
}).listen(8080, () => console.log(`I'm listening.`));
