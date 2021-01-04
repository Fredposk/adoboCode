const searchInput = document.querySelector('.form');
const results = document.querySelector('.results');
searchInput.addEventListener('change', display);
searchInput.addEventListener('keyup', display);
// From the input it will run a function to fetch data and change query

let endpoint = `https://spicedworld.herokuapp.com/?q=${searchInput.value}`;
const countries = [];

// console.log(searchInput.value);

const fetch = () => {
    fetch(endpoint)
        .then((blob) => blob.json())
        .then((data) => countries.push(...data));
};
// console.log(findMatches(searchInput, countries));

function findMatches(wordToMatch, countries) {
    return countries.filter((place) => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.match(regex);
    });
}

function display() {
    fetch;
    const match = findMatches(this.value, countries);
    console.log(match);
}
