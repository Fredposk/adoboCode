//get the box/ not needed
// var box = document.querySelector('.box');
//get the bar
var bar = document.getElementById('bar');
//bottom pane is on top of the first pane so we keep 1 visible and the other will be moving
var paneToMove = document.querySelector('.panes2');
// console.log(paneToMove);
// find out if its clicked
var clicked = false;
// set the position outside the function
var posInit = 0;
//Check if its within the box
// removed , added to if statement
bar.addEventListener('mousedown', function (e) {
    clicked = true;
    posInit = bar.offsetLeft - e.clientX;
    // console.log(bar.offsetLeft);
});
document.addEventListener('mouseup', function () {
    clicked = false;
});

document.addEventListener('mousemove', function (e) {
    if (clicked && e.clientX <= 805 && e.clientX >= 10) {
        var move = e.clientX + posInit + 'px';
        // console.log(move);
        bar.style.left = move;
    }
    paneToMove.style.width = move;
});
