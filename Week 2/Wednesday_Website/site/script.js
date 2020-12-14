// Get hamburger buttom
var hamburger = document.querySelector('#hamburger');
// console.log(hamburger);
// Get navBar
var whiteNavBar = document.querySelector('.whiteNavBar');
// console.log(whiteNavBar);
// Get close button
var closeNav = document.querySelector('.closeBtn');
// console.log(closeNav);
//Get outside Area
var outside = document.querySelector('.overlay');
// console.log(outside);
// Get modal object using jquery
var modal = $('.toaster');
// console.log(modal);
// Get close button using jquery
var modalBtn = $('#closeBtn');
// console.log(modalBtn);

///////////////

// Event handlers
hamburger.addEventListener('click', function (e) {
    // console.log(e + 'Hello');
    whiteNavBar.classList.add('slideIn');
    outside.style.visibility = 'visible';
});

closeNav.addEventListener('click', function (e) {
    // console.log(e + 'goodbye');
    whiteNavBar.classList.remove('slideIn');
    outside.style.visibility = 'hidden';
});

outside.addEventListener('click', function (e) {
    // console.log(e + 'imoutside');
    whiteNavBar.classList.remove('slideIn');
    outside.style.visibility = 'hidden';
});

// event to show modal after 1 sec
$(document).ready(function () {
    setTimeout(function () {
        modal.css({
            visibility: 'visible',
        });
    }, 1000);
});
// event to hide modal after clicking close btn
$(modalBtn).on('click', function () {
    modal.css({
        display: 'none',
    });
    // event to show and hide overlay
    outside.style.visibility = 'hidden';
});

// vanilla JS to show overlay
setTimeout(function () {
    outside.style.visibility = 'visible';
}, 1000);
// vanilla and Jquery when clicked overlay will remove modal
outside.addEventListener('click', function () {
    modal.css({
        display: 'none',
    });
});
