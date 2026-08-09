// js/menu.js
// Menu hamburger toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.cabecalho-nav');

// Toggle menu ao clicar no botão hamburger
menuToggle.addEventListener('click', function() { 
    navMenu.classList.toggle('ativa');
    
    // Atualizar atributo aria-expanded para acessibilidade
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.cabecalho-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('ativa');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// Fechar menu ao clicar fora dele (opcional)
document.addEventListener('click', function(event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('ativa')) {
        navMenu.classList.remove('ativa');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});