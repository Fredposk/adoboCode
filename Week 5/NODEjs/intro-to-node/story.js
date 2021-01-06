const readline = require('readline');
const chalk = require('chalk');
const welcome = require('./ascii');
const wrong = require('./ascii');
const num1 = require('./ascii');
const num2 = require('./ascii');
const num3 = require('./ascii');
const game = require('./ascii');
const over = require('./ascii');
const loadingGame = require('./ascii');
const congrats = require('./ascii');
// process.exit();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const startGame = () => {
    console.log(welcome.welcome);
    setTimeout(() => {
        console.log(
            chalk.bold('__________________________________________________')
        );
        console.log(chalk.bold('A Text-Based Adventure'));
        console.log(chalk.redBright('By: Frederico'));
    }, 2000);

    setTimeout(() => {
        askToStart();
    }, 4000);

    const askToStart = () => {
        rl.question(
            chalk.bold(`Do you dare enter these gates?? [yes | no]  `),
            function (answer) {
                if (answer === 'yes') {
                    console.log(chalk.bold('Good answer'));
                    askName();
                    // rl.close();
                } else {
                    setTimeout(() => {
                        console.log(wrong.wrong);
                        console.log(
                            chalk.bold("Don't you know where you are?")
                        );
                        console.log(
                            chalk.bold('YOUR CHOICES HAVE NO SAY HERE')
                        );
                    }, 500);

                    setTimeout(() => {
                        askToStart();
                    }, 2000);
                }
            }
        );
    };

    askName = () => {
        rl.question(
            chalk.bold(`What is your Name? ${chalk.dim('[type your name]')}  `),
            (answer) => {
                setTimeout(() => {
                    console.log(
                        chalk.bold(`Oh, so your name is ${chalk.blue(answer)}`)
                    );
                }, 1100);
                setTimeout(() => {
                    console.log(
                        chalk.bold(
                            `${chalk.blue(
                                answer
                            )}, I will give you a chance to return to earth`
                        )
                    );
                    console.log(chalk.bold(`_____________________`));
                    console.log(
                        chalk.bold(
                            `But ${chalk.red(
                                'ONLY'
                            )} if you can complete these challenges`
                        )
                    );
                }, 2500);

                setTimeout(() => {
                    setTimeout(() => {
                        advStart();
                    }, 4000);
                }, 3000);
            }
        );
    };

    const advStart = () => {
        console.log(chalk.bold(`_______________________________`));
        console.log(chalk.bold(`Are you ready to Begin?`));
        console.log(chalk.bold(`Remember you cant say no here`));
        rl.question(`[YES | YES]  `, function (answer) {
            if (answer === 'yes') {
                console.log(
                    chalk.bold(`Great! Hell thanks you for your service`)
                );
                console.log(chalk.bold(`Lets take you the challenge!`));

                setTimeout(() => {
                    console.log(num1.num1);
                }, 3000);
                setTimeout(() => {
                    console.log(num2.num2);
                }, 4000);
                setTimeout(() => {
                    console.log(num3.num3);
                }, 5000);
                setTimeout(() => {
                    academy();
                }, 6300);
            } else {
                console.log(wrong.wrong);
                advStart();
            }
        });
    };

    const academy = () => {
        console.log(chalk.bold(`You arrive in Berlin`));
        setTimeout(() => {
            console.log(
                chalk.bold(`You must complete a full stack development course`)
            );
            console.log(chalk.bold(`____________________________`));
        }, 1000);
        setTimeout(() => {
            console.log(
                chalk.bold(
                    `Luckily for you, you can pick your Bootcamp academy`
                )
            );
        }, 2000);
        setTimeout(() => {
            ask();
        }, 3500);
    };
    function ask() {
        rl.question(
            `You can choose between [Spiced and LeWagon]  `,
            function (answer) {
                if (answer === 'spiced') {
                    console.log(chalk.bold(`Good Choice!`));
                    firstQ();
                } else {
                    console.log('WRONG ANSWER!!!!');
                    ask();
                }
            }
        );
    }

    const firstQ = () => {
        rl.question(`What are the first 3 digits of pie  `, function (answer) {
            if (answer === '3.14') {
                console.log('great answer!');
                secondQ();
            } else {
                console.log('WRONG ANSWER!!!!');
                setTimeout(() => {
                    console.log(game.game);
                }, 1000);
                setTimeout(() => {
                    console.log(over.over);
                }, 2000);
                setTimeout(() => {
                    playAgain();
                }, 3000);
            }
        });
    };

    const secondQ = () => {
        rl.question(`Are arrow functions ()=>{awesome}?  `, function (answer) {
            if (answer === 'yes') {
                console.log('great answer!');
                thirdQ();
            } else {
                console.log('WRONG ANSWER!!!!');
                setTimeout(() => {
                    console.log(game.game);
                }, 1000);
                setTimeout(() => {
                    console.log(over.over);
                }, 2000);
                setTimeout(() => {
                    playAgain();
                }, 3000);
            }
        });
    };
    const thirdQ = () => {
        rl.question(
            `Last question, are you tired? ${chalk.dim('[answer as ! ]')}  `,
            function (answer) {
                if (answer === '!no') {
                    console.log('great answer!');
                    congrat();
                } else {
                    console.log('WRONG ANSWER!!!!');
                    setTimeout(() => {
                        console.log(game.game);
                    }, 1000);
                    setTimeout(() => {
                        console.log(over.over);
                    }, 2000);
                    setTimeout(() => {
                        playAgain();
                    }, 3000);
                }
            }
        );
    };

    const playAgain = () => {
        function ask() {
            rl.question(`Want to play again?  `, function (answer) {
                if (answer === 'yes') {
                    console.log('great!');
                    other();
                } else if (answer === 'no') {
                    console.log(chalk.bold('Thanks for playing!'));
                    setTimeout(() => {
                        process.exit();
                    }, 2000);
                } else {
                    console.log('WRONG ANSWER!!!!');
                    playAgain();
                }
            });
        }
        ask();
    };
    const congrat = () => {
        console.log(congrats.congrats);
        setTimeout(() => {
            ask();
        }, 1500);
        function ask() {
            rl.question(`Want to play again?  `, function (answer) {
                if (answer === 'yes') {
                    console.log('great!');
                    other();
                } else if (answer === 'no') {
                    console.log(chalk.bold('Thanks for playing!'));
                    setTimeout(() => {
                        process.exit();
                    }, 2000);
                } else {
                    console.log('WRONG ANSWER!!!!');
                    playAgain();
                }
            });
        }
    };

    const other = () => {
        console.log(loading.loading);

        setTimeout(() => {
            startGame();
        }, 1500);
    };
};
startGame();
