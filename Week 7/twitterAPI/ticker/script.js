(function () {
    var headlines = $('.headlines');
    var links = $('a');
    var left = headlines.offset().left;

    var widthL = links.eq(0).outerWidth();
    var animation;

    $.ajax({
        url: '/data.json',
        method: 'GET',
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                // console.log(data[i]);
                headlines.append(
                    `<a href="${data[i].url}">${data[i].text} (${data[i].user})  &nbsp&nbsp</a>`
                );
            }
            links = $('a');

            move();
        },
        error: function (error) {
            console.log('error: ', error);
        },
    });

    function move() {
        left--;
        links = $('a');
        var firstLink = links.eq(0);
        widthL = firstLink.outerWidth();
        if (left <= widthL * -1) {
            left += widthL;
            headlines.append(firstLink);
        }

        headlines.css({
            left: left + 'px',
        });
        animation = requestAnimationFrame(move);
    }

    headlines.on('mouseenter', function (e) {
        cancelAnimationFrame(animation);
    });

    headlines.on('mouseleave', function (e) {
        move();
    });
})();
