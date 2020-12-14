// var headlines = document.querySelector('.headlines');
var headlines = $('.headlines');
// var ticker = document.querySelector('.ticker');
var ticker = $('.ticker');
// var links = document.getElementsByTagName('a');
var links = $('a');
// var left = headlines.offsetLeft;
var left = $(headlines).offset();
// var width = links[0].offsetWidth;
var width = links.eq(0).outerWidth();

// console.log(headlines);
// console.log(ticker);
// console.log(links);
// console.log(left);
// console.log(width);

function move() {
    left--;
    if (left < width) {
        // ticker.style.right = width + 'px';
        $(ticker).css({
            right: width + 'px',
        });
        var oldChild = headlines.remove.eq(links(0));
        $(headlines).append(oldChild);
        // console.log(oldChild);
        left += width;
        // width = links[0].offsetWidth;
        width = $(links).eq(0).outerWidth();

    a = requestAnimationFrame(move);
    // headlines.style.left = left + 'px';
    $(headlines).css({
        left: left + 'px',
    });
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
