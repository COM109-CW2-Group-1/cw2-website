class MyFooter extends HTMLElement {
  connectedCallback() {
    fetch('footer.html')
      .then(res => res.text())
      .then(html => {
        this.innerHTML = html;
        console.log('Footer loaded');

        this.querySelector('#backToTop')?.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      })
      .catch(err => {
        console.error('Failed to load footer:', err);
      });
  }
}

customElements.define('my-footer', MyFooter);

// This web component loads the footer