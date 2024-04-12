document.addEventListener("DOMContentLoaded", function () {
    var telefones = document.querySelectorAll('.maskTelefone');

    telefones.forEach(function (element) {
        var telefone = element.innerText.replace(/\D/g, ''); // Remove tudo que não é número
        var formattedTelefone = formatarTelefone(telefone);
        element.innerText = formattedTelefone;
    });

    function formatarTelefone(value) {
        var formattedValue = '';

        if (value.length > 0) {
            formattedValue = '(' + value.substring(0, 2) + ')';

            if (value.length > 2) {
                formattedValue += value.substring(2, 7);

                if (value.length > 7) {
                    formattedValue += '-' + value.substring(7, 11);
                } else {
                    formattedValue += '-' + value.substring(7);
                }
            } else {
                formattedValue += value.substring(2);
            }
        }

        return formattedValue;
    }
});