const searchInput = document.querySelector('.form');
const results = document.querySelector('.results');
searchInput.addEventListener('change', getValue);
searchInput.addEventListener('keyup', getValue);
// From the input it will run a function to fetch data and change query

const countries = [];
function getValue() {
    // console.log(searchInput.value);
    let endpoint = `https://spicedworld.herokuapp.com/?q=${searchInput.value}`;

    fetch(endpoint)
        .then((blob) => blob.json())
        .then((data) => countries.push(...data));

    console.log(findMatches(searchInput, countries));
}

function findMatches(wordToMatch, countries) {
    return countries.filter((place) => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.match(regex);
    });
}
