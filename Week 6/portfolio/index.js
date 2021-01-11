const http = require('http');
const fs = require('fs');
const path = require('path');

const contentExt = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.gif': 'image/gif',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
};

http.createServer((req, res) => {
    req.on('error', (err) => console.log('error in request', err));
    res.on('error', (err) => console.log('error in response', err));

    if (req.method !== 'GET') {
        console.log('go away');
        res.statusCode = 405;
        return res.end();
    }

    const filePath = path.join(__dirname, '/projects', req.url);

    if (!filePath.startsWith(__dirname + '/projects')) {
        console.log('INTRUDER INCOMING');
        res.statusCode = 403;
        return res.end();
    }

    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log('error stat');
            res.statusCode = 404;
            return res.end();
        }
        if (stats.isFile()) {
            const readStreamHtml = fs.createReadStream(filePath);
            let extname = path.extname(filePath);
            res.setHeader('Content-Type', contentExt[extname]);
            readStreamHtml.pipe(res);
            readStreamHtml.on('error', (err) => {
                console.log('err here:', err);
                res.statusCode = 500;
                return res.end();
            });
        } else if (req.url == '/') {
            res.setHeader('Content-Type', 'text/html');
            res.end();
        } else {
            if (req.url.endsWith('/')) {
                const readStreamHtml = fs.createReadStream(
                    filePath + 'index.html'
                );
                res.setHeader('Content-Type', 'text/html');
                readStreamHtml.pipe(res);
                readStreamHtml.on('error', (err) => {
                    res.statusCode = 500;
                    return res.end();
                });
            } else {
                res.setHeader('Location', req.url + '/');
                res.statusCode = 302;
                res.end();
            }
        }
    });
}).listen(8080, () => console.log('BIG BROTHER IS LISTENING'));

// switch (extname) {
//     case '.js':
//         contentType = 'text/javascript';
//         break;
//     case '.css':
//         contentType = 'text/css';
//         break;
//     case '.json':
//         contentType = 'application/json';
//         break;
//     case '.png':
//         contentType = 'image/png';
//         break;
//     case '.jpg':
//         contentType = 'image/jpg';
//         break;
// }
