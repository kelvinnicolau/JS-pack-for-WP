// Função para remover acentos de uma string
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

var select = document.querySelector('select[name="related_parents*13"]');
var svg = document.getElementById('mapa-brasil'); // Substitua 'seuSVG' pelo ID do seu mapa SVG

select.addEventListener('change', function () {
    var option = this.selectedOptions[0];
    var texto = removerAcentos(option.textContent.toLowerCase().replace(/\s/g, '-')); // Remover acentos e converter para minúsculas

    var elementosSVG = svg.getElementsByTagName('*'); // Obter todos os elementos SVG dentro do seu mapa

    // Remover a classe 'cor-select' de todos os elementos SVG
    for (var i = 0; i < elementosSVG.length; i++) {
        var elemento = elementosSVG[i];
        elemento.classList.remove('cor-select');
    }

    for (var i = 0; i < elementosSVG.length; i++) {
        var elemento = elementosSVG[i];
        var id = elemento.getAttribute('id');

        if (id && removerAcentos(id.toLowerCase()) === texto) {
            if (elemento.tagName.toLowerCase() === 'path') {
                elemento.classList.add('cor-select'); // Adicionar a classe 'cor-select' ao elemento 'path'
            } else {
                // Se não for um elemento 'path', procure um elemento filho 'path' e adicione a classe 'cor-select' a ele
                var elementoPathFilho = elemento.querySelector('path');
                if (elementoPathFilho) {
                    elementoPathFilho.classList.add('cor-select');
                }
            }
        }
    }
});