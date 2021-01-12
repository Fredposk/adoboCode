const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    req.on('error', (err) => console.log(err));
    res.on('error', (err) => console.log(err));

    const banana = () => {
        const thing = Math.floor(Math.random() * 5);
        console.log(thing);
        if (thing > 2) {
            throw Error;
        }
    };
    banana();

    // if (req.url === '/requests.txt/') {
    //     res.writeHead(200, { contentType: 'text/plain' });
    //     console.log('');
    //     res.end();
    // }

    fs.appendFile(
        'requests.txt',
        `${new Date()} \t ${req.method} \t ${req.url} \t ${
            req.headers['user-agent']
        } \n`,
        (err) => {
            if (err) throw err;
            console.log('Saved!');
        }
    );
    // console.log(req.method);
    console.log(req.url);
    // console.log(req.headers);
    if (req.method === 'GET' || req.method === 'HEAD') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        if (req.method === 'GET') {
            res.end(`
               <!doctype html>
                <html>
                <title>Hello World!</title>
                <p>Hello World!</p>
                    </html>`);
        }
    } else if (req.method === 'POST') {
        let repo = '';
        req.on('data', (chunk) => {
            console.log(chunk);
            repo += chunk;
        });
        req.on('end', () => {
            console.log(repo);
            console.log(req.url);
            res.writeHead(302, { Location: '/' });
            res.end();
        });
    } else {
        res.writeHead(405);
        console.log('Not Allowed');
        res.end();
    }
});

server.listen(8080, () => console.log('My server is listening...'));
