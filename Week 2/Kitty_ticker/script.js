// Grab all the kiities

var kitties = document.querySelectorAll('#kitties img');
var dots = document.getElementsByClassName('dot');

//  Kiity counter
var currentKitty = 0;
// Timer
var timer;
// Transition
var isInTransition = false;

// functions

function remove() {
    kitties[currentKitty].classList.remove('onscreen');
}
function exitStage() {
    kitties[currentKitty].classList.add('exit-left');
}
function addOnScreen() {
    kitties[currentKitty].classList.add('onscreen');
}

// Dot functions

function dotOff() {
    dots[currentKitty].classList.remove('on');
}
function dotOn() {
    dots[currentKitty].classList.add('on');
}
///////////////// Main function
function moveKitties() {
    isInTransition = true;
    remove();
    exitStage();
    dotOff();
    if (arguments.length) {
        currentKitty = arguments[0];
    } else {
        currentKitty++;
        if (currentKitty >= kitties.length) {
            currentKitty = 0;
        }
    }

    addOnScreen();
    dotOn();
    // this moves the kittens again
    timer = setTimeout(moveKitties, 5000);
}
// This starts the kittens
timer = setTimeout(moveKitties, 2000);

// This takes out the exit left class and brings it to the right
document.addEventListener('transitionend', function (e) {
    // console.log(e.target);
    if (e.target.className === 'exit-left') {
        e.target.classList.remove('exit-left');
    }
});

for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', getClickHandler(i));
    isInTransition = false;
}

function getClickHandler(i) {
    return function (e) {
        moveKitties(i);
        if (currentKitty === i) {
            // return;
            clearTimeout(timer);
        }
        if (e.target.contains('on')) {
            return;
        }
        if (isInTransition) {
            return;
        }
    };
}
