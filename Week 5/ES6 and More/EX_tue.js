// EX1
let arr1 = [3, 5, 'hamburger', 'burgerKing'];

const result = (num) => num.reduce((curr, acc) => [acc, ...curr], []);

console.log(result(arr1));
console.log(arr1);

// EX2
let arr2 = ['banana', 'orange', 4, 9];
let arr3 = [3, 5, 'hamburger', 'burgerKing'];
const putTogether = (one, two) => [...one, ...two];

console.log(putTogether(arr2, arr3));
console.log(arr2);
console.log(arr3);

// EX3
function logInfo(city) {
    const { name, country, numPeople } = city;

    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
}
const city = {
    name: 'Berlin',
    country: 'Germany',
    numPeople: 34000000,
};
logInfo(city);

// EX4
var getNameAndCountry = function getNameAndCountry(city) {
    var name = city.name,
        country = city.country;
    return [name, country];
};
var getRelocatedCity = function getRelocatedCity(city1, city2) {
    if (city2 === undefined) {
        city2 = {
            country: 'Germany',
        };
    }
    var getNameAndCountry1 = getNameAndCountry(city2),
        country = getNameAndCountry1[1];
    return { ...city1, country: country };
};
console.log(getNameAndCountry({ name: 'Paris', country: 'France' }));
console.log(getRelocatedCity('Berlin'));

// EX5

function* numbers() {
    for (var i = 1; i <= 100; i++) {
        if (i % 15 == 0) yield 'FizzBuzz';
        else if (i % 3 == 0) yield 'Fizz';
        else if (i % 5 == 0) yield 'Buzz';
        else yield i;
    }
}
for (const num of numbers()) {
    console.log(num);
}

// EX6

const emojis = ['🎲', '⚔', '🏹', '🧩'];
function* getMoreEmojis() {
    return emojis.reduce((a, b) => [b, ...a], []);
}
const gen = getMoreEmojis();
console.log('gen: ', gen);
console.log('gen.next(): ', gen.next());
console.log(emojis);

/*Below is change to increment reverse

const emojis = ['🎲', '⚔', '🏹', '🧩'];
function* getMoreEmojis() {
    for (let i = emojis.length - 1; i >= 0; i--) {
        yield emojis[i];
    }
}
const gen = getMoreEmojis();
console.log('gen: ', gen);
console.log('gen.next(): ', gen.next());
console.log('gen.next(): ', gen.next());
console.log('gen.next(): ', gen.next());
console.log('gen.next(): ', gen.next());
console.log(emojis);
*/
