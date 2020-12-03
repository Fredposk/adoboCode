// #2
function reverseArray(arr) {
    var arrY = [];
    for (let i = 0; i < arr.length; i++) {
        arrY.unshift(arr[i]);
    }
    console.log(arr);
    return arrY;
}
// console.log(reverseArray(["Hello", "Goodbye", 3, "buddy", "spiced"]));

// #3
function getLessThanZero(arr) {
    var answer3 = arr.filter((num) => num < 0);
    return answer3;
}

// console.log(getLessThanZero([1, 2, -1, -90, 10]));
