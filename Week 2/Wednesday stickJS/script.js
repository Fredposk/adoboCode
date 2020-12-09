(function () {
    var canvas = document.querySelector('#canvas');
    var context = canvas.getContext('2d');

    // context.beginPath();
    // context.strokeStyle = 'black';
    // context.lineWidth = 3;
    // context.moveTo(150, 150);
    // context.lineTo(300, 300);
    // context.lineTo(450, 150);
    // context.closePath();
    // context.stroke();

    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 3;
    context.arc(100, 400, 25, 0, Math.PI * 2);
    context.stroke();
    context.fillStyle = 'blue';
    context.fill();

    // context.beginPath();
    // context.strokeStyle = 'blue';
    // context.lineWidth = 3;
    context.moveTo(100, 400);
    context.lineTo(100, 500);
    context.lineTo(75, 560);
    context.moveTo(100, 500);
    context.lineTo(125, 560);
    context.moveTo(100, 450);
    context.lineTo(60, 490);
    context.moveTo(100, 450);
    context.lineTo(140, 490);
    context.stroke();
})();
