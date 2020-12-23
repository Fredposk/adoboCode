$('.fa-facebook-square').on('click', function () {
    // location.href = 'https://en.wikipedia.org/wiki/Connect_Four';
    window.open('https://www.facebook.com');
});
$('.fa-instagram').on('click', function () {
    // location.href = 'https://en.wikipedia.org/wiki/Connect_Four';
    window.open('https://www.instagram.com');
});
$('.fa-github-square').on('click', function () {
    // location.href = 'https://github.com/Fredposk';
    window.open('https://github.com/Fredposk');
});

var resultsContainer = document.querySelector('.resultsContainer');

// console.log(resultsContainer);
document.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
        e.preventDefault();
    }
});

var submit = document
    .getElementById('submitBtn')
    .addEventListener('click', function () {
        var media = document.querySelector('.media');
        if (resultsContainer.hasChildNodes()) {
            media.parentNode.innerHTML = '';
        }

        if (document.getElementById('searchText').value === '') {
            //             {
            //                 var alertBad = $(`<div class="alert alert-dismissible alert-danger">
            //   <button type="button" class="close" data-dismiss="alert">&times;</button>
            //   <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
            // </div>`).appendTo('body');
            //                 setTimeout(() => {
            //                     $(alertBad).remove();
            //                 }, 2000);
            //             }

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
        // console.log(userInput);
        // console.log(artistOrAlbum);

        try {
            handle();
        } catch (error) {
            console.log('error');
        }

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
                    // console.log(response);
                    // console.log(response.artists.items[0].name);
                    // console.log(response.artists.items[0].genres);
                    // console.log(response.artists.items[0].followers.total);
                    // console.log(response.artists.items[0].images[0].url);
                    // console.log(
                    //     response.artists.items[0].external_urls.spotify
                    // );
                    if (artistOrAlbum === 'artist') {
                        createNew(response);
                    }
                }
            };
            xhr.send();
        }
    });

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
