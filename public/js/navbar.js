class MyNavbar extends HTMLElement { 
		connectedCallback() { 
				console.log('<my-nav> connected'); 
				$.get('navbar.html', (data) => { 
						this.innerHTML = data; 
						console.log('nav loaded');  
						const menuBtn = this.querySelector('#menu-btn'); 
						const mobileMenu = this.querySelector('#mobile-menu'); 
						if (menuBtn && mobileMenu) { 
								menuBtn.addEventListener('click', () => { 
										mobileMenu.classList.toggle('visible'); 
								}); this.querySelectorAll('.ja-mobile-menu-link').forEach(link => {
										link.addEventListener('click', () => { 
												mobileMenu.classList.remove('visible'); 
										}); 
								}); 
						} 
				}); 
		} 
} customElements.define('my-navbar', MyNavbar);
