var box = document.querySelector('.box');

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

box.addEventListener('mouseup', function () {
    box.style.backgroundColor = randomColor();
});
