// Altera  o titulo de uma seção pela escolha do select filter (foi utilizado jetFilter do Crocoblock)
document.addEventListener('DOMContentLoaded', function() {
    // Define o texto inicial como "MEMBROS"
    document.getElementById("titleSegmento").innerText = "MEMBROS";

    // Função para atualizar o texto na div
    function updateTitleSegmento() {
        // Obtém o elemento do filtro JetSmartFilters
        var selectElement = document.querySelector('.jet-select__control');

        // Verifica se o elemento existe e tem uma seleção
        if (selectElement && selectElement.options && selectElement.options[selectElement.selectedIndex]) {
            var selectedText = selectElement.options[selectElement.selectedIndex].text;
            document.getElementById("titleSegmento").innerText = selectedText;
        }
    }

    // Adiciona um event listener para o evento de mudança do filtro JetSmartFilters
    var filterElement = document.querySelector('.jet-select__control');
    if (filterElement) {
        filterElement.addEventListener('change', updateTitleSegmento);
    }
});