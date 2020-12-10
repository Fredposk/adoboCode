// Grab all the kiities

var kitties = document.querySelectorAll('#kitties img');
//  Kiity counter
var currentKitty = 0;
// functions

function remove() {
    kitties[currentKitty - 1].classList.remove('onscreen');
}
function exitStage() {
    kitties[currentKitty - 1].classList.add('exit-left');
}
function addOnScreen() {
    kitties[currentKitty].classList.add('onscreen');
}
///////////////// Main function
function moveKitties() {
    currentKitty++;
    if (currentKitty >= kitties.length) {
        currentKitty = 0;
    }
    remove();
    exitStage();
    addOnScreen();
    // this moves the kittens again
    setTimeout(moveKitties, 5000);
}
// This starts the kittens
setTimeout(moveKitties, 2000);

document.addEventListener('transitionend', function (e) {
    // console.log(e.target);
    if (e.target.className === 'exit-left') {
        e.target.classList.remove('exit-left');
    }
});
