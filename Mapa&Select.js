// Com esse codigo podemos carregar o select com qualquer valor e ele alterara a cor do mapa e os resultados da busca do JetEngine, pois foi utilizado JetFilter, se clicarmos em qualquer regiao do mapa ele vai alterar os resultados do select e pintar a região, vice e versa

// Função para remover acentos de uma string
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

var select = document.querySelector('select[name="related_parents*5"]');
var svg = document.getElementById('mapa-brasil'); // Substitua 'seuSVG' pelo ID do seu mapa SVG
var svgExportacao = document.getElementById('exportacao'); // Novo SVG com ID 'exportacao'
console.log(svgExportacao);

// Adicionar evento de clique para SVG de Exportação
var elementosExp = svgExportacao.querySelectorAll('g, path');
for (var i = 0; i < elementosExp.length; i++) {
    elementosExp[i].addEventListener('click', function (event) {
        // Capturar o ID do elemento clicado
        var idClicado = event.target.closest('[id]').getAttribute('id');

        // Comparar o texto do select com o ID do SVG
        for (var j = 0; j < select.options.length; j++) {
            var textoOption = removerAcentos(select.options[j].textContent.toLowerCase().replace(/\s/g, '-'));
            if (textoOption === idClicado) {
                // Atualizar o valor do select
                select.value = select.options[j].value;

                // Trigger de mudança para JetFilters
                jQuery(select).trigger('change');

                // Destacar a região no mapa
                destacarRegiaoExp(idClicado);

                break;
            }
        }
    });
}

// Adicionar evento de clique para cada elemento SVG dentro do mapa
var elementosSVG = svg.querySelectorAll('g, path');
for (var i = 0; i < elementosSVG.length; i++) {
    elementosSVG[i].addEventListener('click', function (event) {
        // Capturar o ID do elemento clicado (procurando nos pais até encontrar um ID)
        var idClicado = event.target.closest('[id]').getAttribute('id');

        // Comparar o texto do select com o ID do SVG
        for (var j = 0; j < select.options.length; j++) {
            var textoOption = removerAcentos(select.options[j].textContent.toLowerCase().replace(/\s/g, '-'));
            if (textoOption === idClicado) {
                // Atualizar o valor do select
                select.value = select.options[j].value;

                // Trigger de mudança para JetFilters
                jQuery(select).trigger('change');

                // Destacar a região no mapa
                destacarRegiao(idClicado);

                break;
            }
        }
    });
}

function destacarRegiaoExp(id) {
    var elementosSVG = svg.querySelectorAll('.cor-select'); // Remover a classe 'cor-select' de todas as regiões já destacadas
    for (var i = 0; i < elementosSVG.length; i++) {
        elementosSVG[i].classList.remove('cor-select');
    }

    var elementoClicado = document.getElementById(id);
    if (elementoClicado) {
        if (elementoClicado.tagName.toLowerCase() === 'g') {
            // Se o elemento clicado for uma tag 'g', adicione a classe 'btnExp' ao elemento 'path' dentro do grupo
            var elementoPath = elementoClicado.querySelector('path');
            if (elementoPath) {
                elementoPath.classList.add('btnExp');
            }
        } else {
            // Caso contrário, adicione a classe 'btnExp' diretamente ao elemento clicado
            elementoClicado.classList.add('btnExp');
        }
    }
}

function destacarRegiao(id) {
    svgExportacao.classList.remove('btnExp'); // Remove a classe 'btnExp' de todos os elementos

    var elementosSVG = svg.querySelectorAll('.cor-select'); // Remover a classe 'cor-select' de todas as regiões já destacadas
    for (var i = 0; i < elementosSVG.length; i++) {
        elementosSVG[i].classList.remove('cor-select');
    }

    var elementoClicado = document.getElementById(id);
    if (elementoClicado) {
        if (elementoClicado.tagName.toLowerCase() === 'g') {
            // Se o elemento clicado for uma tag 'g', adicione a classe 'cor-select' ao elemento 'path' dentro do grupo
            var elementoPath = elementoClicado.querySelector('path');
            if (elementoPath) {
                elementoPath.classList.add('cor-select');
            }
        } else {
            // Caso contrário, adicione a classe 'cor-select' diretamente ao elemento clicado
            elementoClicado.classList.add('cor-select');
        }
    }
}

select.addEventListener('change', function () {
    var option = this.selectedOptions[0];
    var texto = removerAcentos(option.textContent.toLowerCase().replace(/\s/g, '-')); // Remover acentos e converter para minúsculas

    // Restante do seu código para destacar a região no mapa
    var elementosSVG = svg.getElementsByTagName('*');
    // ... (restante do código permanece o mesmo)

    // Remover a classe 'cor-select' de todos os elementos SVG
    for (var i = 0; i < elementosSVG.length; i++) {
        var elemento = elementosSVG[i];
        elemento.classList.remove('cor-select');
    }

    svgExportacao.classList.remove('btnExp');

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
