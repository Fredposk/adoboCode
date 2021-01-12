// Get the text area

var textArea = $('textarea');
var robot = $('i');
// console.log(robot);

// Get button 1

var btn1 = $('#btn1');

// click listener

btn1.on('click', function (e) {
    // console.log('Ive been touched');

    // Save the note and clear field
    var saveMe = $(textArea).val();

    // run the function

    isJSON(saveMe);
});

function isJSON(str) {
    if (typeof str !== 'string') {
        return false;
    }
    try {
        JSON.parse(str);
        // console.log('true');

        robot.addClass('animate__animated animate__shakeY');
        setTimeout(() => {
            robot.removeClass('animate__animated animate__shakeY');
        }, 1000);
        var alert2 = $(`<div class='alert alert-success' role='alert'>
        <strong>AWESOME!</strong> This looks like valid JSON.
    </div>`).appendTo('body');
        setTimeout(() => {
            $(alert2).remove();
        }, 1200);
    } catch (e) {
        // console.log('false');
        robot.addClass('animate__animated animate__shakeX');
        setTimeout(() => {
            robot.removeClass('animate__animated animate__shakeX');
        }, 1000);
        var alert = $(`<div class='alert alert-danger' role='alert'>
        <strong>Sorry!</strong> This doesn't look like valid JSON.
    </div>`).appendTo('body');
        setTimeout(() => {
            $(alert).remove();
        }, 1200);
    }
}
