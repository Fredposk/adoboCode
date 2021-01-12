const fs = require('fs');

const projects = fs.readdirSync(__dirname + '/projects');

module.exports = () => `
    <!doctype html>
    <title>Outstanding Work Completed By Me</title>
    <h1>Outstanding Work Completed By Me</h1>
    <ul>
        ${projects.map((proj) => `<li><a href="${proj}">${proj}</a>`).join('')}
    </ul>
`;
