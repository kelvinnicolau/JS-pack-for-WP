
jQuery(document).ready(function () {
    let previousSlide = 0;
    let numberSliders = 0;
    let larguraDaLinhaDoTempo = 10;

    function atualizarLarguraDaLinhaDoTempo() {
        if (larguraDaLinhaDoTempo < 0) {
            larguraDaLinhaDoTempo = 0;
        } else if (larguraDaLinhaDoTempo > 100) {
            larguraDaLinhaDoTempo = 100;
        }

        document.styleSheets[0].insertRule(
            "#linhaDoTempo::before { width:" + larguraDaLinhaDoTempo + "% !important; }",
            document.styleSheets[0].cssRules.length // Insira a regra no final das regras CSS existentes
        );
    }

    jQuery('#linhaTempo').on('init', function (event, slick, currentSlide, nextSlide) {
        numberSliders = slick.slideCount;
        larguraDaLinhaDoTempo = 100 / numberSliders;
        atualizarLarguraDaLinhaDoTempo();
    });

    jQuery('#linhaTempo').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        if (currentSlide === 0) {
            larguraDaLinhaDoTempo = 100 / numberSliders;
        } else if (currentSlide === numberSliders - 1) {
            larguraDaLinhaDoTempo = 100;
        } else if (currentSlide > previousSlide) {
            larguraDaLinhaDoTempo += 100 / numberSliders;
        } else {
            larguraDaLinhaDoTempo -= 100 / numberSliders;
        }

        atualizarLarguraDaLinhaDoTempo();
        previousSlide = currentSlide;
    });
});

