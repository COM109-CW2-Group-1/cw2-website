class MyNavbar extends HTMLElement {
    connectedCallback() {
      console.log('<my-nav> connected');
      $.get('navbar.html', (data) => {
        this.innerHTML = data;
        console.log('nav loaded');
      });
    }
}

customElements.define('my-navbar', MyNavbar);

// This class isnt being hit, most likely in index.html