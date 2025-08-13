function getQueryParam(param) {
    let params = new URLSearchParams(window.location.search);
    return params.get(param);
}

$(document).ready(function () {
    let title = getQueryParam('title');
    let desc = getQueryParam('desc');

    if (title) {
        $('#service-title').text(title);
    }
    if (desc) {
        $('#service-description').text(desc);
    }
});
// Function gets data from url and displays it on contact page