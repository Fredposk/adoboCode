(function () {
    $('#restartBtn').on('click', function () {
        // window.location.reload();
        $('.board').addClass('animate__animated animate__wobble');
        $('.board').find('*').removeClass('player1');
        $('.board').find('*').removeClass('player2');
        $('h2').html(``);

        startbtn.attr('disabled', false);

        $('.chip3').removeClass('player11');
        $('.chip3').removeClass('player22');

        setTimeout(() => {
            $('.board').removeClass('animate__animated animate__wobble');
            $('.board').removeClass('animate__animated animate__flash');
            // $('.chip3').addClass('player11');
        }, 1000);
    });

    $('.column').on('mouseenter', function (e) {
        // console.log(e.currentTarget);
        var hover = $(e.currentTarget);
        hover.addClass('hover');
    });

    $('.column').on('mouseleave', function (e) {
        var hover = $(e.currentTarget);
        hover.removeClass('hover');
    });

    var computer = $('.computer');
    computer.on('click', function () {
        // console.log('clicked');
        if (computer.hasClass('fa-robot')) {
            // console.log(true);
            computer.removeClass('fa-robot ');
            computer.addClass('fa-user');
            $('.user2').removeClass('fa-user ');
            $('.user2').addClass('fa-robot ');
        } else {
            computer.removeClass('fa-user');
            computer.addClass('fa-robot');
            $('.user2').removeClass('fa-robot');
            $('.user2').addClass('fa-user');
        }
    });

    $('.fa-github-square').on('click', function () {
        // location.href = 'https://github.com/Fredposk';
        window.open('https://github.com/Fredposk');
    });
    $('.fa-book').on('click', function () {
        // location.href = 'https://en.wikipedia.org/wiki/Connect_Four';
        window.open('https://en.wikipedia.org/wiki/Connect_Four');
    });

    var startbtn = $('#startBtn');

    var currentPlayer;
    startbtn.on('click', function () {
        // console.log("$: ", $);
        currentPlayer = 'player1';
        $('.chip3').addClass('player11');
        startbtn.attr('disabled', true);
        $('h2').text('GAME ON');

        setTimeout(() => {
            $('h2').text('');
        }, 2500);
    });
    $('.column').on('click', function (e) {
        var startBTN = document.getElementById('startBtn');

        if (!startBTN.hasAttribute('disabled')) {
            return;
        }
        if ($("h2:contains('WINNER!! ')").length) {
            return;
        }

        // $('.chip3').addClass(currentPlayer);
        if ($('.chip3').hasClass('player22')) {
            $('.chip3').removeClass('player22');
            $('.chip3').addClass('player11');
        } else {
            $('.chip3').removeClass('player11');
            $('.chip3').addClass('player22');
        }

        var col = $(e.currentTarget);
        // returns all the slots in the column that was clicked on
        var slotsInCol = col.children().children();

        // play against computer

        function get() {
            var num = Math.floor(Math.random() * 6);
            // console.log(num);
            var slotsInCol = $('.column').eq(num).children().children();
            // console.log(slotsInCol);
            for (var j = slotsInCol.length - 1; j >= 0; j--) {
                // console.log("slotsinCol.eq(i): ", slotsInCol.eq(i));
                if (
                    !slotsInCol.eq(j).hasClass('player1') &&
                    !slotsInCol.eq(j).hasClass('player2')
                ) {
                    // $('.column').eq(i).click();
                    slotsInCol.eq(j).addClass('player2');
                    $('.chip3').removeClass('player22');
                    $('.chip3').addClass('player11');
                    break;
                }
            }

            // checkBoard();
            // checkForVictory(slotsInCol);
        }
        if ($('.user2').hasClass('fa-robot')) {
            $('.chip3').removeClass('player11');
            $('.chip3').addClass('player22');
            setTimeout(get, 1000);
            currentPlayer = 'player1';
        }

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass('player1') &&
                !slotsInCol.eq(i).hasClass('player2')
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);
                break; // ends loop
            }
        }
        var slotsInRow = $('.row' + i).children();
        var slots = $('.row' + i).children();
        if (checkForVictory(slotsInCol)) {
            // console.log('column victory!!!!');
            $('h2').html(`WINNER!! <i class="far fa-laugh-beam"></i>`);
            $('.board').addClass('animate__animated animate__flash');
        }
        if (checkForVictory(slotsInRow)) {
            // console.log('row victory!!!!');
            $('h2').html(`WINNER!! <i class="far fa-laugh-beam"></i>`);
            $('.board').addClass('animate__animated animate__flash');
        }
        if (checkForVictory(slots)) {
            // console.log('row victory!!!!');
            $('h2').html(`WINNER!! <i class="far fa-laugh-beam"></i>`);
            $('.board').addClass('animate__animated animate__flash');
        }
        switchPlayer();
        win();
        function win() {
            checkBoard();
            checkForVictory(slotsInRow);
        }
        function checkBoard() {
            var allWins = [
                [0, 7, 14, 21],
                [1, 8, 15, 22],
                [2, 9, 16, 23],
                [3, 8, 13, 18],
                [4, 9, 14, 19],
                [5, 10, 15, 20],
                [6, 13, 20, 27],
                [7, 14, 21, 28],
                [8, 15, 22, 29],
                [9, 14, 19, 24],
                [10, 15, 20, 25],
                [11, 16, 21, 26],
                [12, 19, 26, 33],
                [13, 20, 27, 34],
                [14, 21, 28, 35],
                [15, 20, 25, 30],
                [16, 21, 26, 31],
                [17, 22, 27, 32],
                [18, 25, 32, 39],
                [19, 26, 33, 40],
                [20, 27, 34, 41],
                [21, 26, 31, 36],
                [22, 27, 32, 37],
                [23, 28, 33, 38],
            ];
            // var hole = $('.hole');
            // var hole = Array.prototype.slice.call(holes);
            // console.log(hole);
            for (var i of allWins) {
                var hole = document.querySelectorAll('.hole');
                // console.log(i[0]);
                var hole1 = hole[i[0]];
                var hole2 = hole[i[1]];
                var hole3 = hole[i[2]];
                var hole4 = hole[i[3]];
                // console.log(hole1);
                if (
                    hole1.classList.contains('player1') &&
                    hole2.classList.contains('player1') &&
                    hole3.classList.contains('player1') &&
                    hole4.classList.contains('player1')
                ) {
                    $('h2').html(`WINNER!! <i class="far fa-laugh-beam"></i>`);
                    $('.board').addClass('animate__animated animate__flash');
                }
                if (
                    hole1.classList.contains('player2') &&
                    hole2.classList.contains('player2') &&
                    hole3.classList.contains('player2') &&
                    hole4.classList.contains('player2')
                ) {
                    $('h2').html(`WINNER!! <i class="far fa-laugh-beam"></i>`);
                    $('.board').addClass('animate__animated animate__flash');
                }
            }
        }
    });

    function checkForVictory(slots) {
        // console.log(slots);
        var counter = 0; // number of adjacent chips in a column
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                counter++;
                if (counter === 4) {
                    // console.log('win');
                    return true;
                }
            } else {
                counter = 0;
                // console.log('counter reset to 0 :(');
            }
        }
    }
    function switchPlayer() {
        if (currentPlayer === 'player1') {
            currentPlayer = 'player2';
        } else {
            currentPlayer = 'player1';
        }
    }
})();
