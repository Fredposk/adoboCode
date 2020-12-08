var headlines = document.querySelector('.headlines');
var ticker = document.querySelector('.ticker');
var links = document.getElementsByTagName('a');
var left = headlines.offsetLeft;
var width = links[0].offsetWidth;

function move() {
    left--;
    if (left < width) {
        ticker.style.right = width + 'px';
        var oldChild = headlines.removeChild(links[0]);
        headlines.appendChild(oldChild);
        // console.log(oldChild);
        left += width;
        width = links[0].offsetWidth;
    }
    a = requestAnimationFrame(move);
    headlines.style.left = left + 'px';
}
move();

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseenter', function () {
        cancelAnimationFrame(a);
    });
    links[i].addEventListener('mouseleave', function () {
        move();
    });
}
