$(document).ready(function () {
    var ticker = $('#ticker');
    var headlines = ticker.find('.headlines');
    var links = headlines.find('a');
    var curX = headlines.offset().left;
    var linkWidth = links.eq(0).outerWidth();
    var animId;

    $.ajax({
        url: './links.json',
        method: 'GET',
        data: {
            limit: 20,
        },
        success: function (data) {
            // console.log(data[0].site);
            var linkY = '';
            for (var j = 0; j < data.length; j++) {
                linkY += `<a href=${data[j].site}> ${data[j].city}</a>`;
            }
            // console.log('html we will be injecting:', linkY);
            headlines.html(linkY);
        },
    });

    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', './links.json');
    // xhr.onload = function () {
    //     if (xhr.status === 200) {
    //         var parse = JSON.parse(xhr.response);
    //         console.log(parse);
    //     } else {
    //         console.log('didnt work');
    //     }
    // };
    // xhr.send();

    headlines.on('mouseenter', function () {
        cancelAnimationFrame(animId);
    });

    headlines.on('mouseleave', function () {
        moveHeadlines();
    });

    moveHeadlines();

    function moveHeadlines() {
        curX--;
        // console.log(curX, -linkWidth);
        if (curX < -linkWidth) {
            curX += linkWidth;
            links.eq(0).appendTo(headlines);
            links = headlines.find('a');
            linkWidth = links.eq(0).outerWidth();
        }
        headlines.css({
            left: curX + 'px',
        });
        animId = requestAnimationFrame(moveHeadlines);
    }
});
