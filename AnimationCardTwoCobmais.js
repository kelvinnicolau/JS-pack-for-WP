

const animationSvg = document.getElementById('animationTwo').querySelector('svg');
const line1 = animationSvg.querySelector('.line-1');
const line2 = animationSvg.querySelector('.line-2');
const btnAnimation = animationSvg.querySelector('.buttonAnimation');
const textAnimation = animationSvg.querySelector('.textoAnimation');
const logAnimation = animationSvg.querySelector('.logoAnimation');

function changeSvg() {
    line1.style.stroke = 'transparent';
    line2.style.stroke = 'transparent';
    btnAnimation.style.fill = 'transparent';
    textAnimation.style.fill = 'transparent';
    logAnimation.style.fill = 'transparent';

    let i = 1;

    const interval = setInterval(() => {
        if (i === 1) {
            line1.style.strokeDasharray = '30%';
        } else if (i === 2) {
            line1.style.stroke = '#00EDFF';
        } else if (i === 3) {
            line1.style.strokeDasharray = '100%';
        } else if (i === 4) {
            btnAnimation.style.fill = '#19283F';
            textAnimation.style.fill = '#FFFFFF';
            logAnimation.style.fill = '#FFFFFF';
        } else if (i === 5) {
            line1.style.stroke = '#19283F';
            btnAnimation.style.fill = '#00EDFF';
            textAnimation.style.fill = '#0F1825';
            logAnimation.style.fill = '#0F1825';
        } else if (i === 6) {
            line2.style.strokeDasharray = '60%';
        } else if (i === 7) {
            btnAnimation.style.fill = '#19283F';
            textAnimation.style.fill = '#FFFFFF';
            logAnimation.style.fill = '#FFFFFF';
            line2.style.stroke = '#00EDFF';
        } else if (i === 8) {
            line2.style.strokeDasharray = '100%';
            line2.style.stroke = '#00EDFF';
            clearInterval(interval); // Limpa o intervalo quando todas as fases forem concluídas
            setTimeout(startAnimationTwo, 500); // Reinicia a animação
        }
        i++;
    }, 1000); // Atraso de 1 segundo entre cada fase
}

function startAnimationTwo() {
    changeSvg(); // Chama a função inicialmente
}

document.addEventListener('DOMContentLoaded', startAnimationTwo);
