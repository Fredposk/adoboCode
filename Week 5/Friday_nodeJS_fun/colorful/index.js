const chalk = require('chalk');
const http = require('http');
const qs = require('querystring');
const url = require('url');

const server = http.createServer((req, res) => {
    req.on('error', (error) => console.log('error: ', error));
    res.on('error', (error) => console.log('error: ', error));

    if (req.method === 'GET') {
        res.statusCode = 200;
        res.write(
            `
            <!doctype html>
            <html>
            <title>Colors</title>
            <form method="POST">
            <input type="text" name="text">
            <select name="color">
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
                <option value="gray">gray</option>
                <option value="magenta">magenta</option>
                <option value="cyan">cyan</option>
            </select>
            <button type="submit">Go</button>
            </form>
            </html>
            `
        );
        res.end();
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        }).on('end', () => {
            let str = qs.parse(body);
            console.log('str: ', str);
            let color = Object.entries(str);
            let thing = color[1][1];
            console.log(chalk[thing](`${color[0][1]}`));
            res.writeHead(200, { 'Content-Type': 'text/html' });
            {
                res.end(`<!doctype html>
<html>
<title>${color[0][1]}</title>
<a href="/" style="color:${thing}">${color[0][1]}</a>
</html>`);
            }
        });
    }
});

server.listen(8080, () => console.log('Colorful Console Listening'));

// text=adobo&color=blue
