const chalk = require('chalk');
const url = require('url');

const reqUrl = process.argv[2];

const urlEx = url.parse(reqUrl, true);
const params = urlEx.query;

console.log(chalk.bgGreenBright(`The URL YOU GAVE ME IS ${reqUrl}`));
console.log(chalk.redBright(`The protocol is ${urlEx.protocol}`));
console.log(chalk.whiteBright(`The host is ${urlEx.host}`));
console.log(chalk.cyanBright(`The hostname is ${urlEx.hostname}`));
console.log(chalk.yellowBright(`The hostname is ${urlEx.port}`));
console.log(chalk.greenBright(`The path-name is ${urlEx.pathname}`));
if (urlEx.search === null) {
    console.log('The query is null');
} else {
    console.log(chalk.redBright(`The query is ${urlEx.search}}`));

    for (const key in params) {
        console.log(`The value of the ${key} parameter is ${params[key]}`);
    }
}
