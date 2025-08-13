$(document).ready(function () {
    function breatheCycle() {
        $('.prompt').text('Inhale');
        $('.circle').animate({
            width: '400px',
            height: '400px'
        }, 4000, function () {
            $('.prompt').text('Hold');
            setTimeout(function () {
                $('.prompt').text('Exhale');
                $('.circle').animate({
                    width: '200px',
                    height: '200px'
                }, 4000, function () {
                    $('.prompt').text('Hold');
                    setTimeout(function () {
                        breatheCycle();
                    }, 2000);
                });
            }, 2000);
        });
    }

    breatheCycle();
});
