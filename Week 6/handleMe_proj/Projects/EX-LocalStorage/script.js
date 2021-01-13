// Get the text area

var textArea = $('textarea');

// Get button 1 and button 2

var btn1 = $('#btn1');
var btn2 = $('#btn2');

// click listeners

btn1.on('click', function (e) {
    // console.log('Ive been touched');
    var alert = $(`<div class='alert alert-success' role='alert'>
        <strong>Well done!</strong> Your Note Has Been Saved.
    </div>`).appendTo('body');
    setTimeout(() => {
        $(alert).remove();
    }, 1300);
    // Save the note and clear field
    var saveMe = $(textArea).val();
    localStorage.setItem('note', saveMe);
    textArea.val('').empty();
});
btn2.on('click', function (e) {
    // console.log('Ive been touched2');

    try {
        // console.log(localStorage.getItem('note'));
        $(textArea).val(localStorage.getItem('note'));
    } catch (error) {
        var alertBad = $(`<div class='alert alert-warning' role='alert'>
        <strong>Sorry!</strong> Your Note Has Been Lost.
    </div>`).appendTo('body');
        setTimeout(() => {
            $(alertBad).remove();
        }, 1300);
    }
});
