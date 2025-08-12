$(document).ready(function () {
    $('.accordion2 h3').click(function () {
        const content = $(this).next('.content');
        const arrow = $(this).find('.arrow-toggle');

        // Close others if needed
        $('.accordion2 .content').not(content).slideUp();
        $('.accordion2 .arrow-toggle').not(arrow).text('>');

        // Toggle current
        content.slideToggle();
        const isExpanded = content.is(':visible');
        arrow.text(isExpanded ? '>' : 'v'); // Will correct after animation

        // Use a timeout to wait for animation before checking state
        setTimeout(() => {
            arrow.text(content.is(':visible') ? 'v' : '>');
        }, 200);
    });
});
