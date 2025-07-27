$(window).on('load', function () {
  console.log('jQuery and DOM loaded');

  class MySidenav extends HTMLElement {
    connectedCallback() {
      console.log('<my-sidenav> connected');
      $.get('sidenav.html', (data) => {
        this.innerHTML = data;
        console.log('Sidenav loaded');

        // Optional: confirm class toggle from inside component
        $('#menuToggle').on('click', () => {
          $(this).find('.sidenav').toggleClass('open');
          console.log('Toggled sidenav from inside');
        });
      });
    }
  }

  customElements.define('my-sidenav', MySidenav);

  // Also allow toggle globally (after DOM is loaded)
  $('#menuToggle').on('click', () => {
    console.log('Global toggle');
    $('my-sidenav .sidenav').toggleClass('open');
  });

  $('#themeToggle').on('click', () => {
    const html = $('html');
    const current = html.attr('data-theme') || 'light';
    html.attr('data-theme', current === 'light' ? 'dark' : 'light');
    console.log('Theme toggled to:', html.attr('data-theme'));
  });
});
