window.onload = function () {
    verificarBarraRolagem();
    document.getElementById("btnLateral").addEventListener("click", rolarParaDireita);
    document.getElementById("btnLateralEsquerda").addEventListener("click", rolarParaEsquerda);
    window.addEventListener("resize", verificarBarraRolagem);
    document.getElementById("repeaterBtns").addEventListener("scroll", verificarBarraRolagem);
};

function verificarBarraRolagem() {
    var minhaDiv = document.getElementById("repeaterBtns");
    var botaoRolarParaDireita = document.getElementById("btnLateral");
    var botaoRolarParaEsquerda = document.getElementById("btnLateralEsquerda");

    if (minhaDiv.scrollWidth > minhaDiv.clientWidth) {
        botaoRolarParaDireita.style.display = "inline-block";
        botaoRolarParaEsquerda.style.display = "inline-block";
    } else {
        botaoRolarParaDireita.style.display = "none";
        botaoRolarParaEsquerda.style.display = "none";
    }
}

function rolarParaDireita() {
    var minhaDiv = document.getElementById("repeaterBtns");
    minhaDiv.scrollLeft += 100;

}

function rolarParaEsquerda() {
    var minhaDiv = document.getElementById("repeaterBtns");
    minhaDiv.scrollLeft -= 100;
}