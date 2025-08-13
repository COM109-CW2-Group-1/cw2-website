$(document).ready(function () {

    $.getJSON('../public/json/cards.json', function (data) {
        let contentHtml = '';

        data.forEach(section => {
            contentHtml += `
                <section>
                    <h2>${section.category}</h2>
                    <div class="scroll-section">
                        ${section.items.map(item => `
                            <div class="card">
                                <img src="${item.image}" alt="${item.title}">
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `;
        });

        $('#card-output').html(contentHtml);

        initCardEvents();
    });

    function initCardEvents() {
        $('body').append('<div class="card-overlay"></div>');

        $('.card').each(function () {
            $(this).data('originalContent', $(this).html());
        });

        $('.card').click(function () {
            let $this = $(this);
            if ($this.hasClass('card-expanded')) return;

            $('.card-overlay').fadeIn(300);

            let expandedContent = `
                ${$this.data('originalContent')}
                <p style="margin-top:15px;">
                    <button class="btn">Contact For Support</button>
                </p>
                <span class="card-close">&times;</span>
            `;

            $this.html(expandedContent).addClass('card-expanded');
        });

        $(document).on('click', '.card-close', function (e) {
            e.stopPropagation();
            let $card = $(this).closest('.card');
            $card.html($card.data('originalContent')).removeClass('card-expanded');
            $('.card-overlay').fadeOut(600);
        });

        $('.card-overlay').click(function () {
            $('.card-expanded').each(function () {
                $(this).html($(this).data('originalContent')).removeClass('card-expanded');
            });
            $(this).fadeOut(600);
        });

        $('.card').on('click', '.btn', function (e) {
            e.stopPropagation();
            let cardTitle = $(this).closest('.card').find('h3').text();
            let cardDescription = $(this).closest('.card').find('p').first().text();
            window.location.href = `contact.html?title=${encodeURIComponent(cardTitle)}&desc=${encodeURIComponent(cardDescription)}`;
        });
    }
});
// displays the cards on the page creates popups when you click the cards navigates you to a seperate page when you click the button storing the information in the url