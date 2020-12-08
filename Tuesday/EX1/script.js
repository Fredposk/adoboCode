var box = document.querySelector('.box');
var pointer = window.document;
// console.log(box);
// console.log(pointer);

pointer.addEventListener('mousemove', function (e) {
    // console.log(e);
    pos1 = e.clientX - 50;
    pos2 = e.clientY - 50;

    box.style.left = pos1 + 'px';
    box.style.top = pos2 + 'px';
});
