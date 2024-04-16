

document.addEventListener('DOMContentLoaded', function () {
    var buttonSobre = document.querySelector('#e-n-menu-title-5491 button');
    var buttonProdutos = document.querySelector('#e-n-menu-title-5492 button');
    var buttonConteudo = document.querySelector('#e-n-menu-title-5495 button');
    var buttonContato = document.querySelector('#e-n-menu-title-5496 button');

    document.addEventListener('click', function (e) {

        if (buttonSobre.getAttribute('aria-expanded', 'true') === 'true') {
            const svgs = document.querySelectorAll('#e-n-menu-title-5491 .e-n-menu-dropdown-icon-opened svg');
            const span = document.querySelector('#e-n-menu-title-5491 .e-n-menu-title-container span');

            svgs.forEach(svg => {
                svg.style.fill = '#1E478E';
            });
            span.style.color = '#1E478E';
        } else {
            const svgs = document.querySelectorAll('#e-n-menu-title-5491 .e-n-menu-dropdown-icon-opened svg');
            const span = document.querySelector('#e-n-menu-title-5491 .e-n-menu-title-container span');

            svgs.forEach(svg => {
                svg.style.fill = ''; // Remove a cor
            });
            span.style.color = ''; // Remove a cor
        }

        if (buttonProdutos.getAttribute('aria-expanded', 'true') === 'true') {
            const svgs = document.querySelectorAll('#e-n-menu-title-5492 .e-n-menu-dropdown-icon-opened svg');
            const span = document.querySelector('#e-n-menu-title-5492 .e-n-menu-title-container span');

            svgs.forEach(svg => {
                svg.style.fill = '#1E478E';
            });
            span.style.color = '#1E478E';
        } else {
            const svgs = document.querySelectorAll('#e-n-menu-title-5492 .e-n-menu-dropdown-icon-opened svg');
            const span = document.querySelector('#e-n-menu-title-5492 .e-n-menu-title-container span');

            svgs.forEach(svg => {
                svg.style.fill = ''; // Remove a cor
            });
            span.style.color = ''; // Remove a cor
        }

        if (buttonConteudo.getAttribute('aria-expanded', 'true') === 'true') {
            const svgs = document.querySelectorAll('#e-n-menu-title-5495 .e-n-menu-dropdown-icon-opened svg');
            const span = document.querySelector('#e-n-menu-title-5495 .e-n-menu-title-container span');

            svgs.forEach(svg => {
                svg.style.fill = '#1E478E';
            });
            span.style.color = '#1E478E';
        } else {
            const svgs = document.querySelectorAll('#e-n-menu-title-5495 .e-n-menu-dropdown-icon-opened svg');
            const span = document.querySelector('#e-n-menu-title-5495 .e-n-menu-title-container span');

            svgs.forEach(svg => {
                svg.style.fill = ''; // Remove a cor
            });
            span.style.color = ''; // Remove a cor
        }

        if (buttonContato.getAttribute('aria-expanded', 'true') === 'true') {
            const svgs = document.querySelectorAll('#e-n-menu-title-5496 .e-n-menu-dropdown-icon-opened svg');
            const span = document.querySelector('#e-n-menu-title-5496 .e-n-menu-title-container span');

            svgs.forEach(svg => {
                svg.style.fill = '#1E478E';
            });
            span.style.color = '#1E478E';
        } else {
            const svgs = document.querySelectorAll('#e-n-menu-title-5496 .e-n-menu-dropdown-icon-opened svg');
            const span = document.querySelector('#e-n-menu-title-5496 .e-n-menu-title-container span');

            svgs.forEach(svg => {
                svg.style.fill = ''; // Remove a cor
            });
            span.style.color = ''; // Remove a cor
        }

    });
});

