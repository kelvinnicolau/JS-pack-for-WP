
document.addEventListener("DOMContentLoaded", function () {
    // Pega o elemento do círculo com a classe circle-animation
    var circle = document.querySelector('.circle-animation');
    // Pega os elementos com os IDs buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive, loja, transporte, download, people
    var buttonOne = document.getElementById('buttonOne');
    var buttonTwo = document.getElementById('buttonTwo');
    var buttonThree = document.getElementById('buttonThree');
    var buttonFor = document.getElementById('buttonFor');
    var buttonFive = document.getElementById('buttonFive');
    var loja = document.getElementById('loja');
    var transporte = document.getElementById('transporte');
    var download = document.getElementById('download');
    var people = document.getElementById('people');
    // Pega o botão com o ID activeAnimation
    var restartButton = document.getElementById('activeAnimation');

    // Define os valores desejados de stroke-dashoffset
    var dashOffsets = [1217, 950, 740, 510, 270, 0];

    // Índice para rastrear a posição atual nos valores de dashOffsets
    var currentDashIndex = 0;

    // Função para reiniciar a animação
    function restartAnimation() {
        // Restaura o valor inicial de stroke-dashoffset
        circle.setAttribute('stroke-dashoffset', initialDashOffset.toString());
        // Reinicia o índice
        currentDashIndex = 0;
        // Remove a classe 'active' dos elementos
        buttonOne.classList.remove('active');
        buttonTwo.classList.remove('active');
        buttonThree.classList.remove('active');
        buttonFor.classList.remove('active');
        buttonFive.classList.remove('active');
        loja.classList.remove('active');
        transporte.classList.remove('active');
        download.classList.remove('active');
        people.classList.remove('active');

        // Inicia a animação novamente
        animateCircle();
    }

    // Adiciona um ouvinte de eventos ao botão para reiniciar a animação
    restartButton.addEventListener('click', restartAnimation);

    // Obtém o valor inicial de stroke-dashoffset
    var initialDashOffset = parseFloat(circle.getAttribute('stroke-dashoffset'));

    // Função para realizar a animação
    function animateCircle() {
        // Obtém o próximo valor de dash-offset
        var currentDashOffset = dashOffsets[currentDashIndex];

        // Define o stroke-dashoffset
        circle.setAttribute('stroke-dashoffset', currentDashOffset.toString());

        // Adiciona a classe 'active' aos elementos nas etapas correspondentes
        switch (currentDashIndex) {
            case 1:
                buttonOne.classList.add('active');
                loja.classList.add('active');
                break;
            case 2:
                buttonTwo.classList.add('active');
                transporte.classList.add('active');
                break;
            case 3:
                buttonThree.classList.add('active');
                download.classList.add('active');
                break;
            case 4:
                buttonFor.classList.add('active');
                people.classList.add('active');
                break;
            case 5:
                buttonFive.classList.add('active');
                break;
        }

        // Incrementa o índice para o próximo valor na próxima etapa
        currentDashIndex++;

        // Pausa por 3 segundos após cada etapa
        setTimeout(function () {
            // Verifica se ainda há etapas restantes
            if (currentDashIndex < dashOffsets.length) {
                // Chama a próxima etapa da animação
                animateCircle();
            }
        }, 3000);
    }

    // Chama a função de animação após um pequeno intervalo
    setTimeout(function () {
        animateCircle();
    }, 1000);
});

