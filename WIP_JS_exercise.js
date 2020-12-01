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
