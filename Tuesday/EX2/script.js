var area = document.querySelector('#getty');

var lincoln =
    'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. ';

var num = 0;
// console.log(lincoln.length);
area.addEventListener('input', function (e) {
    // console.log(e);

    area.value = lincoln.slice(0, area.value.length);
    num++;
});
