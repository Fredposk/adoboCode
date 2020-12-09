var x;

var x = 997;
var xx;

function timesTwo(num) {
    return num * 2;
}

// console.log(timesTwo(3));
// call times2 as argument and store as as doubleXX

xx = timesTwo(x);

// console.log(xx);

var numbers = [x, xx];

// console.log(numbers);

numbers.forEach(function (element) {
    console.log(element);
});

numbers = {};

// console.log(numbers);

numbers.prototype.y = xx;
