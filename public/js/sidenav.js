// Logging for broswer console
$(window).on('load', function () {
  console.log('jQuery and DOM loaded');

  class MySidenav extends HTMLElement {
    connectedCallback() {
      console.log('<my-sidenav> connected');
      $.get('sidenav.html', (data) => {
        this.innerHTML = data;
        console.log('Sidenav loaded');

        // Now that .sidenav exists inside this component, hook up toggle
        $('#menuToggle').on('click', () => {
          const sidenav = $(this).find('.sidenav');
          if (sidenav.length) {
            sidenav.toggleClass('open');
            console.log('Toggle working: .open toggled');
          } else {
            console.warn('.sidenav not found inside my-sidenav');
          }
        });
        $('.sidenav .close').on('click', () => {
          const sidenav = $(this).find('.sidenav');
          if (sidenav.length) {
            sidenav.removeClass('open');
            console.log('Sidenav closed');
          } else {
            console.warn('.sidenav not found inside my-sidenav');
          }
        });
      }
      );
    }
  }

  customElements.define('my-sidenav', MySidenav);

  // Theme toggle remains global
  $('#themeToggle').on('click', () => {
    const html = $('html');
    const current = html.attr('data-theme') || 'light';
    html.attr('data-theme', current === 'light' ? 'dark' : 'light');
    console.log('Theme toggled to:', html.attr('data-theme'));
  });
});
