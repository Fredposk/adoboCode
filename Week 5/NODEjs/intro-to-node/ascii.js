const figlet = require('figlet');

// figlet.fonts(function (err, fonts) {
//     if (err) {
//         console.log('something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.dir(fonts);
// });

const welcome = figlet.textSync('WELCOME TO HELL!', {
    font: 'Delta Corps Priest 1',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true,
});
const wrong = figlet.textSync('WRONG', {
    font: 'Delta Corps Priest 1',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true,
});
const num1 = figlet.textSync('one', {
    font: 'Delta Corps Priest 1',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true,
});
const num2 = figlet.textSync('two', {
    font: 'Delta Corps Priest 1',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true,
});
const num3 = figlet.textSync('three', {
    font: 'Delta Corps Priest 1',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true,
});
const game = figlet.textSync('GAME', {
    font: 'Delta Corps Priest 1',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true,
});
const over = figlet.textSync('OVER', {
    font: 'Delta Corps Priest 1',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true,
});
const loadingGame = figlet.textSync('Loading...', {
    font: 'Banner3',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true,
});
const congrats = figlet.textSync('CONGRATS!!!', {
    font: 'Banner3',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true,
});

module.exports.wrong = wrong;
module.exports.welcome = welcome;
module.exports.num1 = num1;
module.exports.num2 = num2;
module.exports.num3 = num3;
module.exports.game = game;
module.exports.over = over;
module.exports.loadingGame = loadingGame;
module.exports.congrats = congrats;
