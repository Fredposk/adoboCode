// #1
function logType(arg) {
    if (typeof arg === 'undefined') {
        console.log('undefined!');
    } else if (typeof arg === 'string') {
        console.log('string!');
    } else if (typeof arg === 'boolean') {
        console.log('boolean!');
    } else if (typeof arg === 'bigint') {
        console.log('bigint!');
    } else if (typeof arg === 'function') {
        console.log('function!');
    } else if (Array.isArray(arg)) {
        console.log('array!');
    } else if (arg === null) {
        console.log('null!');
    } else if (typeof arg === 'object') {
        console.log('object!');
    } else if (isNaN(arg)) {
        console.log('not a number!');
    } else if (typeof arg === 'number') {
        console.log('number!');
    } else {
        console.log('I have no idea!');
    }
}

/*
logType()
logType("Hello")
logType(true)
logType(37n)
logType(function(){})
logType([1,2,3])
logType(null)
logType({})
logType(NaN)
logType(3)
*/

// #2

var a = {
    Berlin: 'Germany',
    Paris: 'France',
    'New York': 'USA',
};

var b = {};
for (var key in a) {
    b[a[key]] = key;
}

console.log(b);

// console.log(`${a[key]}: ${key}`);

// #3
for (let i = 10; i > 0; i--) {
    console.log(i);
}
