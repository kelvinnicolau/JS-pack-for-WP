// Seleciona os botões e divs de conteúdo
const buttonsModelo = document.querySelectorAll('.headerBtns');
const divConteudosModelo = document.querySelectorAll('.divConteudo');

// Função para numerar as classes
function numerarClasses(elementos) {
    elementos.forEach((elemento, index) => {
        elemento.classList.add(`${elemento.classList[0]}_${index + 1}`);
    });
}

// Chama a função para numerar as classes
numerarClasses(buttonsModelo);
numerarClasses(divConteudosModelo);

// Adiciona estilo inicial para mostrar apenas a primeira divConteudo
divConteudosModelo.forEach((div, index) => {
    if (index !== 0) {
        div.style.display = 'none';
    }
});

// Adiciona classe active ao primeiro botão
buttonsModelo[0].classList.add('active');

// Adiciona evento de clique aos botões
buttonsModelo.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Esconde todos os conteúdos
        divConteudosModelo.forEach((div) => {
            div.style.display = 'none';
        });
        // Remove a classe active de todos os botões
        buttonsModelo.forEach(btn => btn.classList.remove('active'));
        // Mostra o conteúdo correspondente ao botão clicado
        divConteudosModelo[index].style.display = 'block';
        // Adiciona a classe active apenas ao botão clicado
        button.classList.add('active');
    });
});

// Método para encontrar a próxima divConteudo com display: block
function encontrarProximaDivVisivel(currentIndex) {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= divConteudosModelo.length) {
        nextIndex = 0;
    }
    return nextIndex;
}

// Adiciona evento de ocultar conteúdo quando uma divConteudo é escondida
divConteudosModelo.forEach((div, index) => {
    div.addEventListener('transitionend', () => {
        if (div.style.display === 'none') {
            const nextIndex = encontrarProximaDivVisivel(index);
            divConteudosModelo[nextIndex].style.display = 'block';
            buttonsModelo[nextIndex].classList.add('active');
        }
    });
});