document.querySelector('.fa-facebook-square').addEventListener('click', () => {
    window.open('https://www.facebook.com');
});
document.querySelector('.fa-instagram').addEventListener('click', () => {
    window.open('https://www.instagram.com');
});
document.querySelector('.fa-github-square').addEventListener('click', () => {
    window.open('https://github.com/Fredposk');
});

var resultsContainer = document.querySelector('.resultsContainer');

document.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
        e.preventDefault();
        submit();
    }
});

document.getElementById('submitBtn').addEventListener('click', function () {
    submit();
});

function submit() {
    var media = document.querySelector('.media');
    if (resultsContainer.hasChildNodes()) {
        media.parentNode.innerHTML = '';
    }
    if (document.getElementById('searchText').value === '') {
        var alertBad = `<div class="alert alert-dismissible alert-danger">
  <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
</div>`;
        document.body.insertAdjacentHTML('afterbegin', alertBad);
        setTimeout(() => {
            document.body.removeChild(document.body.firstChild);
        }, 2000);
    }
    var userInput = encodeURIComponent(
        document.getElementById('searchText').value.toLowerCase()
    );
    var artistOrAlbum = encodeURIComponent(
        document.getElementById('dropDown').value.toLowerCase()
    );

    handle();
    function handle() {
        var xhr = new XMLHttpRequest();
        xhr.open(
            'GET',
            `https://spicedify.herokuapp.com/spotify?query=${userInput}&type=${artistOrAlbum}`,
            true
        );
        xhr.onload = function () {
            if (this.status == 200) {
                var response = JSON.parse(this.response);
                if (artistOrAlbum === 'artist') {
                    createNew(response);
                } else if (artistOrAlbum === 'album') {
                    console.log(response);
                    createNewAlbum(response);
                }
            } else {
                console.log('OUR servers are down');
            }
        };
        xhr.send();
    }
}

function createNew(response) {
    for (var i = response.artists.items.length - 1; i >= 0; i--) {
        var artistName = response.artists.items[i].name;
        var genres = response.artists.items[i].genres;
        var followers = response.artists.items[i].followers.total;
        var picture = '/brett-jordan-yBBrTuOwhNA-unsplash.jpg';
        if (response.artists.items[i].images.length > 0) {
            picture = response.artists.items[i].images[0].url;
        }
        var link = response.artists.items[i].external_urls.spotify;
        var result = `
        <a href="${link}"
        <div class="media">
                <img
                    src="${picture}"
                    class="align-self-center mr-3"
                    id="returnImg"
                />
                <div class="media-body">
                    <h5 class="mt-0">${artistName}</h5>
                    <p>Genre: ${genres}</p>
                    <p class="mb-0">Followers: ${followers}
                    </p>
                </div>
            </div></a>`;

        resultsContainer.insertAdjacentHTML('afterbegin', result);
    }
}

function createNewAlbum(response) {
    for (var i = response.albums.items.length - 1; i >= 0; i--) {
        var albumName = response.albums.items[i].name;
        var link = response.albums.items[i].external_urls.spotify;
        var picture = '/brett-jordan-yBBrTuOwhNA-unsplash.jpg';
        if (response.albums.items[i].images.length > 0) {
            picture = response.albums.items[i].images[0].url;
        }
        var release = response.albums.items[0].release_date;
        var artist = response.albums.items[0].artists[0].name;
        var result = `
        <a href="${link}"
        <div class="media">
                <img
                    src="${picture}"
                    class="align-self-center mr-3"
                    id="returnImg"
                />
                <div class="media-body">
                    <h5 class="mt-0">${albumName}</h5>
                    <p>Release: ${release}</p>
                    <p class="mb-0">Followers: ${artist}
                    </p>
                </div>
            </div></a>`;

        resultsContainer.insertAdjacentHTML('afterbegin', result);
    }
}
