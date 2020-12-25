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
var moreBtn = document.getElementById('moreBtn');
var prevBtn = document.getElementById('prevBtn');
var headResults = document.getElementById('headResults');

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
    function cleanUp() {
        var media = document.querySelector('.media');
        if (resultsContainer.hasChildNodes()) {
            media.parentNode.innerHTML = '';
            moreBtn.style.visibility = 'hidden';
            prevBtn.style.visibility = 'hidden';
        }
    }
    cleanUp();
    if (document.getElementById('searchText').value === '') {
        headResults.style.visibility = 'hidden';
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

    var userInput2 = document.getElementById('searchText').value.toUpperCase();

    var artistOrAlbum = encodeURIComponent(
        document.getElementById('dropDown').value.toLowerCase()
    );

    function head() {
        headResults.innerHTML = `<i class="fa fa-headphones" aria-hidden="true"></i> SHOWING
                RESULTS FOR : ${userInput2}`;
        headResults.style.visibility = 'visible';
    }
    function noHead() {
        headResults.innerHTML = `<i class="fa fa-headphones" aria-hidden="true"></i> ${userInput} didn't turn up any results <i class="fas fa-sad-cry"></i>`;
        headResults.style.visibility = 'visible';
    }

    var searchUrl = `https://spicedify.herokuapp.com/spotify?query=${userInput}&type=${artistOrAlbum}`;

    handle(searchUrl);
    function handle(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (this.status == 200) {
                try {
                    var response = JSON.parse(this.response);
                } catch (error) {
                    console.log('not JSON');
                }

                if (artistOrAlbum === 'artist') {
                    if (response.artists.items.length === 0) {
                        noHead();
                    } else {
                        head();
                        createNew(response);
                    }
                } else if (artistOrAlbum === 'album') {
                    if (response.albums.items.length === 0) {
                        noHead();
                    } else {
                        head();
                        // console.log(response);
                        createNewAlbum(response);
                    }
                }
            } else if (this.status != 200 && this.status != 400) {
                console.log('OUR servers are down');
            }
        };
        xhr.send();
    }

    function createNew(response) {
        cleanUp();
        var nextUrl =
            response.artists.next &&
            response.artists.next.replace(
                'api.spotify.com/v1/search',
                'spicedify.herokuapp.com/spotify'
            );
        if (nextUrl != null) {
            // console.log(nextUrl);
            moreBtn.style.visibility = 'visible';
            moreBtn.addEventListener('click', () => {
                handle(nextUrl);
            });
        } else if (nextUrl == null) {
            moreBtn.style.visibility = 'hidden';
        }
        var prevUrl =
            response.artists.previous &&
            response.artists.previous.replace(
                'api.spotify.com/v1/search',
                'spicedify.herokuapp.com/spotify'
            );
        if (prevUrl != null) {
            // console.log(nextUrl);
            prevBtn.style.visibility = 'visible';
            prevBtn.addEventListener('click', () => {
                handle(prevUrl);
                window.scrollTo(0, 0);
                cleanUp();
            });
        } else if (prevUrl == null) {
            prevBtn.style.visibility = 'hidden';
        }
        for (var i = response.artists.items.length - 1; i >= 0; i--) {
            var artistName = response.artists.items[i].name;
            var genres = response.artists.items[i].genres;
            var followers = response.artists.items[i].followers.total;
            var picture =
                'https://images.pexels.com/photos/3391933/pexels-photo-3391933.jpeg?cs=srgb&dl=pexels-miguel-á-padriñán-3391933.jpg&fm=jpg';
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
        cleanUp();
        var nextUrl =
            response.albums.next &&
            response.albums.next.replace(
                'api.spotify.com/v1/search',
                'spicedify.herokuapp.com/spotify'
            );
        if (nextUrl != null) {
            // console.log(nextUrl);
            moreBtn.style.visibility = 'visible';
            moreBtn.addEventListener('click', () => {
                handle(nextUrl);
            });
        } else if (nextUrl == null) {
            moreBtn.style.visibility = 'hidden';
        }
        var prevUrl =
            response.albums.previous &&
            response.albums.previous.replace(
                'api.spotify.com/v1/search',
                'spicedify.herokuapp.com/spotify'
            );
        if (prevUrl != null) {
            // console.log(nextUrl);
            prevBtn.style.visibility = 'visible';
            prevBtn.addEventListener('click', () => {
                handle(prevUrl);
                window.scrollTo(0, 0);
                cleanUp();
            });
        } else if (prevUrl == null) {
            prevBtn.style.visibility = 'hidden';
        }

        for (var i = response.albums.items.length - 1; i >= 0; i--) {
            var albumName = response.albums.items[i].name;
            var link = response.albums.items[i].external_urls.spotify;
            var picture =
                'https://images.pexels.com/photos/3391933/pexels-photo-3391933.jpeg?cs=srgb&dl=pexels-miguel-á-padriñán-3391933.jpg&fm=jpg';
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
                    <p class="mb-0">Artist: ${artist}
                    </p>
                </div>
            </div></a>`;

            resultsContainer.insertAdjacentHTML('afterbegin', result);
        }
    }
}
