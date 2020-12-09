// 1
function Rectangle(h, w) {
    this.height = h;
    this.width = w;
}

function Square(x) {
    this.height = x;
    this.width = x;
}

Rectangle.prototype = {
    getArea: function () {
        return this.height * this.width;
    },
};

Square.prototype = {
    getArea: function () {
        return this.height * this.width;
    },
};

// Below is the correct (I think) answer but it will create the method into every Object on the page commented out atm
/*
Object.prototype.getArea = function () {
    return this.height * this.width;
};
*/
var rect = new Rectangle(4, 5);
var square = new Square(4);

console.log(rect.getArea());
console.log(square.getArea());

console.log(rect);

// #2

function invertCase(string) {
    var arry = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            arry.push(string[i].toLowerCase());
        } else {
            arry.push(string[i].toUpperCase());
        }
    }
    return arry.join('');
}

console.log(invertCase('BaNaNa'));
console.log(invertCase('bAnAnA'));

// BONUS - work in progress, cant get it to stop yet

function Countdown(x) {
    this.number = x;
    this.start = function () {
        setInterval(function () {
            console.log(x);
            x--;
            if (x === 0) {
                clearInterval(this.start());
            }
        }, 1000);
    };
}
