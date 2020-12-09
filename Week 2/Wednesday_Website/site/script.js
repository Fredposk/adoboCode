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
