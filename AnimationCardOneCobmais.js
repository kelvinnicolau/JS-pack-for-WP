const images = document.querySelectorAll('.image');
const card = document.getElementById('cardOne'); // Selecionando o card com o ID 'cardOne'

const positions = [
    { top: '100px', left: '45px' },
    { top: '120px', left: '125px' },
    { top: '120px', left: '225px' },
    { top: '60px', left: '290px' },
    { top: '0px', left: '250px' },
    { top: '10px', left: '76px' }
];

let currentIndex = 0;
let animationInterval;

function changePositions() {
    images.forEach((image, index) => {
        const position = positions[(currentIndex + index) % positions.length];
        image.style.top = position.top;
        image.style.left = position.left;
    });
    currentIndex = (currentIndex + 1) % positions.length;
}

function startAnimation() {
    animationInterval = setInterval(changePositions, 1500);
}

function stopAnimation() {
    clearInterval(animationInterval);
}

card.addEventListener('mouseover', startAnimation);
card.addEventListener('mouseout', stopAnimation);