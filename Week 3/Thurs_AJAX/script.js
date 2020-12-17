var btn = $('.btn');
var results = document.getElementById('jokey');

btn.on('click', function () {
    // var xhr = new XMLHttpRequest();
    // console.log('results: ', results);
    // console.log('xhr: ', xhr);
    // xhr.open('GET', 'https://icanhazdadjoke.com/');
    // xhr.setRequestHeader('Accept', 'text/plain');
    // xhr.send();
    // // readystates
    // // 0 - unsent
    // // 1 - opened
    // // 2 - headers received
    // // 3 - loading
    // // 4 - done
    // xhr.addEventListener('readystatechange', function () {
    //     if (xhr.readyState !== 4) {
    //         return;
    //     }
    //     // console.log('readystatechange happened!');
    //     // console.log('xhr.readyState: ', xhr.readyState);
    //     var status;
    //     try {
    //         status = xhr.status;
    //     } catch (error) {
    //         // console.log('error', error);
    //         return;
    //     }
    //     // console.log('status: ', status);
    //     if (status !== 200) {
    //         return;
    //     }
    //     console.log('xhr.responseText: ', xhr.responseText);
    //     results.innerText = xhr.responseText;
    // });

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://icanhazdadjoke.com/', true);
    xhr.setRequestHeader('Accept', 'text/plain');

    xhr.onload = function () {
        if (this.status == 200) {
            results.innerText = xhr.responseText;
        }
    };
    xhr.send();
});
