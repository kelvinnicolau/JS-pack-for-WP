document.addEventListener('DOMContentLoaded', function () {
    var mobileMenu = document.querySelector('.e-n-menu-content');
    var sectionMenu = document.querySelector('.e-n-menu-wrapper');
    var btnToggle = document.querySelector('.e-n-menu-toggle');

    if (btnToggle.getAttribute('aria-expanded', 'true')) {
        // Adicione um ouvinte de evento de clique no documento
        document.addEventListener('click', function (e) {
            if (mobileMenu.classList.contains('e-active') === true && !sectionMenu.contains(e.target) === true && !btnToggle.contains(e.target) === true) {
                // Define o atributo aria-expanded como "false" para fechar o menu
                btnToggle.setAttribute('aria-expanded', 'false');
                // Remova a classe que mantém o menu aberto
                mobileMenu.classList.remove('e-active');
            }
        });
    }
});