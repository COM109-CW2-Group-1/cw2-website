class MainContent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'main-content');

    const slot = document.createElement('slot');
    wrapper.appendChild(slot);

    const style = document.createElement('style');
    style.textContent = `
      .main-content {
        margin-left: 220px;
        padding: 2rem;
        margin-top: 50px;
        transition: margin-left 0.3s ease;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

customElements.define('main-content', MainContent);

// This web component allows for a consistent layout across pages.
// It wraps the content in a <main> element where we can apply styles.
// Also allows for dynamic loading of page content i.e. AJAX/jQuery