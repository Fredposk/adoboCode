function each(objOrArr, callback) {
    if (Array.isArray(objOrArr)) {
        // return "isArray"
        objOrArr.forEach((element, position) => {
            callback(element, position);
        });
    } else if (typeof objOrArr === 'object') {
        //  return "isObject"
        for (var key in objOrArr) {
            {
                callback(objOrArr[key], [key]);
            }
        }
    }
}

/*each(
    {
        a: 1,
        b: 2,
        banana: 'delicious',
        c: 3,
    },
    function (val, name) {
        console.log(`The value of ${name} is ${val}`);
    }
);

each(['a', 'b', 'c', 'd'], function (val, idx) {
    console.log(`The value of item ${idx} is ${val}`);
});
*/

// #2

function reverseArray(arr) {
    var arrY = [];
    for (var i = 0; i < arr.length; i++) {
        arrY.unshift(arr[i]);
    }
    // console.log to check if array unchanged
    // console.log(arr);
    return arrY;
}
// reverseArray(["Hello", "Goodbye", 3, "buddy", "spiced"]);

// #3

function getLessThanZero(arr) {
    var answer3 = arr.filter((num) => num < 0);
    return answer3;
}

// getLessThanZero([1, 2, -1, -90, 10]);
