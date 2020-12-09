var box = document.querySelector('.box');
var box2 = document.querySelector('.box2');

function randomColor() {
    function rgb() {
        return Math.floor(Math.random() * 256);
    }
    var r = rgb();
    var g = rgb();
    var b = rgb();
    // return `rgb(${r},${g},${b}`;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

box.addEventListener('mousedown', function () {
    box.style.backgroundColor = randomColor();
});
box2.addEventListener('mousedown', function (e) {
    box2.style.backgroundColor = randomColor();
    e.stopPropagation();
});
