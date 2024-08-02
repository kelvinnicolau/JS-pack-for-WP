// Altera o logo do Menu no hover das opções (APENAS NO DESKTOP)

document.addEventListener('DOMContentLoaded', function () {
    // Função para verificar a largura da tela
    function isMobile() {
        return window.innerWidth <= 768; // Ajuste o valor conforme necessário para definir o breakpoint do mobile
    }

    // Só executa o código se não for dispositivo móvel
    if (!isMobile()) {
        var buttonSobre = document.querySelector('#e-n-menu-title-5491 button');
        var buttonProdutos = document.querySelector('#e-n-menu-title-5492 button');
        var buttonConteudo = document.querySelector('#e-n-menu-title-5494 button');
        var buttonContato = document.querySelector('#e-n-menu-title-5495 button');

        document.addEventListener('click', function (e) {
            if (buttonSobre.getAttribute('aria-expanded') === 'true') {
                const logoAzul = document.querySelector("#logoAzul");
                const logoBranco = document.querySelector("#id-image-logo");
                const buttonBlue = document.getElementById('btnBlue');
                const buttonWhite = document.getElementById('btnWhite');

                buttonWhite.classList.add('btn-active-white');
                buttonBlue.classList.add('btn-active');
                logoAzul.style.display = 'block';
                logoBranco.style.display = 'none';
            } else if (buttonProdutos.getAttribute('aria-expanded') === 'true') {
                const logoAzul = document.querySelector("#logoAzul");
                const logoBranco = document.querySelector("#id-image-logo");
                const buttonBlue = document.getElementById('btnBlue');
                const buttonWhite = document.getElementById('btnWhite');
                
                buttonWhite.classList.add('btn-active-white');
                buttonBlue.classList.add('btn-active');
                logoAzul.style.display = 'block';
                logoBranco.style.display = 'none';
            } else if (buttonConteudo.getAttribute('aria-expanded') === 'true') {
                const logoAzul = document.querySelector("#logoAzul");
                const logoBranco = document.querySelector("#id-image-logo");
                const buttonBlue = document.getElementById('btnBlue');
                const buttonWhite = document.getElementById('btnWhite');
                
                buttonWhite.classList.add('btn-active-white');
                buttonBlue.classList.add('btn-active');
                logoAzul.style.display = 'block';
                logoBranco.style.display = 'none';
            } else if (buttonContato.getAttribute('aria-expanded') === 'true') {
                const logoAzul = document.querySelector("#logoAzul");
                const logoBranco = document.querySelector("#id-image-logo");
                const buttonBlue = document.getElementById('btnBlue');
                const buttonWhite = document.getElementById('btnWhite');
                
                buttonWhite.classList.add('btn-active-white');
                buttonBlue.classList.add('btn-active');
                logoAzul.style.display = 'block';
                logoBranco.style.display = 'none';
            } else {
                const logoAzul = document.querySelector("#logoAzul");
                const logoBranco = document.querySelector("#id-image-logo");
                const buttonBlue = document.getElementById('btnBlue');
                const buttonWhite = document.getElementById('btnWhite');
                
                buttonWhite.classList.remove('btn-active-white');
                buttonBlue.classList.remove('btn-active');
                logoAzul.style.display = 'none';
                logoBranco.style.display = 'block';
            }
        });
    }
});