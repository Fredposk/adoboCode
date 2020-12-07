var headlines = document.querySelector('.headlines');
var ticker = document.querySelector('.ticker');
var links = document.getElementsByTagName('a');
var left = headlines.offsetLeft;
var width = links[0].offsetWidth;

console.log(width);

function move() {
    // left = Math.abs(left);
    left--;
    if (left < width) {
        ticker.style.right = width + 'px';
    }
    // links[0].appendChild(ticker);
    headlines.style.left = left + 'px';
    requestAnimationFrame(move);
}
move();
console.log(left);
