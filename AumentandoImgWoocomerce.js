// Seleciona todos os elementos <li> dentro do <ul>
var liElements = document.querySelectorAll('.variable-items-wrapper li');

// Itera sobre os elementos <li> encontrados
liElements.forEach(function (li) {
    // Adiciona um event listener para o evento de clique em cada <li>
    li.addEventListener('click', function () {
        // Obtém o elemento <img> dentro do <li> clicado
        var imgElement = li.querySelector('img');

        // Cria um elemento <div> para o popup
        var popup = document.createElement('div');
        popup.id = 'imgPopup';

        // Cria um elemento <img> dentro do popup e define o src como o src do elemento <img> clicado
        var popupImg = document.createElement('img');
        popupImg.src = imgElement.src;
        popup.appendChild(popupImg);

        // Adiciona o popup ao body do documento
        document.body.appendChild(popup);

        // Adiciona um event listener para fechar o popup quando clicado em qualquer lugar fora dele
        popup.addEventListener('click', function () {
            document.body.removeChild(popup);
        });

        // Previne o comportamento padrão do clique no <li> (para evitar eventos de clique indesejados)
        event.preventDefault();
    });
});
