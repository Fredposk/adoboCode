var btn = $('#btn1');
// console.log(btn);
var german = $('.german');
var nummer = [
    'null',
    'eins',
    'zwei',
    'drei',
    'vier',
    'fünf',
    'sechs',
    'sieben',
    'acht',
    'neun',
    'zehn',
];

btn.on('click', function (e) {
    translateNumberToGerman();
});

function translateNumberToGerman() {
    function askForNumber() {
        var num = prompt('Please enter a number between 1 and 10');
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            // console.log(num);
            nummer.forEach(function (element, index) {
                // console.log(element, index);
                if (index == num) {
                    // console.log(element);
                    german.text(element);
                }
            });
            return;
        }
        throw new Error('Bad number');
    }

    try {
        askForNumber();
    } catch (e) {
        console.log(e);
        translateNumberToGerman();
    }
}
