const animationSvgThree = document.getElementById('animationThree').querySelector('svg');
const lineOne = animationSvgThree.querySelector('.line1');
const lineTwo = animationSvgThree.querySelector('.line2');
const lineThree = animationSvgThree.querySelector('.line3');
const imgOne = animationSvgThree.querySelector('.imgMais');
const imgTwo = animationSvgThree.querySelector('.imgDinheiro');
const imgThree = animationSvgThree.querySelector('.imgTempo');
const logoOne = animationSvgThree.querySelector('.logoMais');
const logoTwo = animationSvgThree.querySelector('.logoDinheiro');
const logoThree = animationSvgThree.querySelector('.logoTempo');
const btnAnimationThree = animationSvgThree.querySelector('.btnAnimationThree');
const btnText = animationSvgThree.querySelector('.btnText');

function changeSvgThree() {
    lineOne.style.stroke = 'transparent';
    lineTwo.style.stroke = 'transparent';
    lineThree.style.stroke = 'transparent';
    imgOne.style.fill = 'transparent';
    imgTwo.style.fill = 'transparent';
    imgThree.style.fill = 'transparent';
    imgOne.style.stroke = 'transparent';
    imgTwo.style.stroke = 'transparent';
    imgThree.style.stroke = 'transparent';
    logoOne.style.fill = 'transparent';
    logoTwo.style.fill = 'transparent';
    logoThree.style.fill = 'transparent';
    btnAnimationThree.style.fill = 'transparent';
    btnText.style.fill = 'transparent';

    let i = 1;

    const interval = setInterval(() => {
        if (i === 1) {
            imgOne.style.fill = '#00EDFF';
            imgOne.style.stroke = '#00EDFF';
            logoOne.style.fill = '#0F1825';
            lineOne.style.stroke = '#19283F';
        } else if (i === 2) {
            imgOne.style.fill = '#19283F';
            imgOne.style.stroke = '#19283F';
            logoOne.style.fill = '#D9D9D9';
            lineOne.style.stroke = '#00EDFF';
            imgTwo.style.fill = '#19283F';
            logoTwo.style.fill = '#D9D9D9';
        } else if (i === 3) {
            lineOne.style.stroke = '#314665';
            imgTwo.style.fill = '#00EDFF';
            imgTwo.style.stroke = '#00EDFF';
            logoTwo.style.fill = '#0F1825';
        } else if (i === 4) {
            imgTwo.style.fill = '#19283F';
            imgTwo.style.stroke = '#19283F';
            logoTwo.style.fill = '#D9D9D9';
            lineTwo.style.stroke = '#00EDFF';
            imgThree.style.fill = '#19283F';
            imgThree.style.stroke = '#19283F';
            logoThree.style.fill = '#D9D9D9';
        } else if (i === 5) {
            lineTwo.style.stroke = '#314665';
            imgThree.style.fill = '#00EDFF';
            imgThree.style.stroke = '#00EDFF';
            logoThree.style.fill = '#0F1825';
        } else if (i === 6) {
            imgThree.style.fill = '#19283F';
            imgThree.style.stroke = '#19283F';
            logoThree.style.fill = '#D9D9D9';
            lineThree.style.stroke = '#00EDFF';
        } else if (i === 7) {
            btnAnimationThree.style.fill = '#00EDFF';
            btnText.style.fill = '#0F1825';
            lineThree.style.stroke = '#314665';

            clearInterval(interval); // Limpa o intervalo quando todas as fases forem concluídas
            setTimeout(startAnimationThree, 1000); // Reinicia a animação
        }
        i++;
    }, 1000); // Atraso de 1 segundo entre cada fase
}

function startAnimationThree() {
    changeSvgThree(); // Chama a função inicialmente
}

document.addEventListener('DOMContentLoaded', startAnimationThree);