// #1

// function sum() {
//     // arguments is array-like, must make into array
//     let args = [...arguments];
//     // console.log(args);
//     return args.reduce((a, b) => a + b);
// }

// Just in case
function sum2() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) total += arguments[i];
    return total;
}

// console.log(sum(5, 10));
// console.log(sum(5, 10, 15));
// console.log(sum(5, 10, 15, 100, 200));
//
console.log(sum2(5, 10));
console.log(sum2(5, 10, 15));
console.log(sum2(5, 10, 15, 100, 200));

// 2

function waitThenRun() {
    setTimeout(() => {
        console.log('Hello');
    }, 1500);
    setTimeout(() => {
        console.log('Goodbye');
    }, 3000);
}

waitThenRun();
// not sure I understood the question. Testcase works and waitThenRun() works in console

// #3

// Actually wrote the last case incorrectly and returned how many times it takes to run to bigN
/*
function answer(num) {
    let bigN = 1000000;
    if (num < 0 || num === 0 || typeof num !== 'number') {
        return 'ERROR';
    } else if (num >= bigN) {
        return num;
    } else if (num <= bigN) {
        let arr = [];
        for (let i = num; i < bigN; i *= 10) {
            arr.push(i);
        }
        return arr.length;
    }
}
*/

function answer(num) {
    var bigN = 1000000;
    if (num < 0 || num === 0 || typeof num !== 'number') {
        return 'ERROR';
    } else if (num >= bigN) {
        return num;
    } else if (num <= bigN) {
        for (var i = num; i < bigN; i *= 10) {
            var response = i;
        }
        return response * 10;
    }
}

console.log(answer('Hello')); // ERROR
console.log(answer(2000000)); // 2000000
// console.log(answer(2)); // 6 for the previous

// BONUS

// let arry = [];
// let totaler = function getTotal(num) {
//     arry.push(num);
//     return arry.reduce((a, b) => a + b);
// };

// future reference fix is to overwrite the variable
function getTotaler() {
    var total = 0;
    return function (num) {
        total += num;
        return total;
    };
}

console.log(getTotaler(1));
console.log(getTotaler(2));
console.log(getTotaler(5));
