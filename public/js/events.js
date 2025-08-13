$(document).ready(function(){
    $('.filters button').click(function(){
        var filter = $(this).attr('data-filter');

        // highlight active button
        $('.filters button').removeClass('active');
        $(this).addClass('active');

        // show/hide events
        if(filter === 'all') {
            $('.event').show();
        } else {
            $('.event').hide();
            $('.event[data-category="' + filter + '"]').show();
        }
    });
});
