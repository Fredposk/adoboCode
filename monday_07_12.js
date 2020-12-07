// 1

function makeMeStyle(string) {
    var arry = [];
    var thing = document.getElementsByTagName(`${string}`);
    for (var i = 0; i < thing.length; i++) {
        arry.push(thing[i]);
    }
    arry.forEach((element) => {
        element.style.fontStyle = 'italic';
        element.style.textDecoration = 'underline';
        element.style.fontWeight = 'bold';
    });
    // console.log(arry);
}

// 2

function spitArray(className) {
    var arry = [];
    for (let i = 0; i < className.length; i++) {
        arry.push(className[i]);
    }
    return arry;
}

// arry.forEach((element) => {
//     element.style.backgroundColor = 'gold';
// });

// 3

function insertMe() {
    var text = document.createTextNode('AWESOME');
    var element = document.createElement('div');
    element.appendChild(text);
    var awesome = document.body.appendChild(element);
    awesome.style.fontSize = '200px';
    awesome.style.position = 'fixed';
    awesome.style.left = '20px';
    awesome.style.top = '100px';
    awesome.style.zIndex = '2147483647';
}
