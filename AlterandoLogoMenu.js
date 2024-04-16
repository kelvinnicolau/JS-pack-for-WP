
document.addEventListener('DOMContentLoaded', function () {
    var buttonSobre = document.querySelector('#e-n-menu-title-5491 button');
    var buttonProdutos = document.querySelector('#e-n-menu-title-5492 button');
    var buttonConteudo = document.querySelector('#e-n-menu-title-5495 button');
    var buttonContato = document.querySelector('#e-n-menu-title-5496 button');

    document.addEventListener('click', function (e) {

        if (buttonSobre.getAttribute('aria-expanded', 'true') === 'true') {
            const logoAzul = document.querySelector("#logoAzul");
            const logoBranco = document.querySelector("#id-image-logo");

            logoAzul.style.display = 'block';
            logoBranco.style.display = 'none';
        } else if (buttonProdutos.getAttribute('aria-expanded', 'true') === 'true') {
            const logoAzul = document.querySelector("#logoAzul");
            const logoBranco = document.querySelector("#id-image-logo");

            logoAzul.style.display = 'block';
            logoBranco.style.display = 'none';
        } else if (buttonConteudo.getAttribute('aria-expanded', 'true') === 'true') {
            const logoAzul = document.querySelector("#logoAzul");
            const logoBranco = document.querySelector("#id-image-logo");

            logoAzul.style.display = 'block';
            logoBranco.style.display = 'none';
        } else if (buttonContato.getAttribute('aria-expanded', 'true') === 'true') {
            const logoAzul = document.querySelector("#logoAzul");
            const logoBranco = document.querySelector("#id-image-logo");

            logoAzul.style.display = 'block';
            logoBranco.style.display = 'none';
        } else {
            const logoAzul = document.querySelector("#logoAzul");
            const logoBranco = document.querySelector("#id-image-logo");

            logoAzul.style.display = 'none';
            logoBranco.style.display = 'block';
        }
    });
});
