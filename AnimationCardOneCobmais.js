const images = document.querySelectorAll('.image');

const positions = [
    { top: '100px', left: '45px' },
    { top: '120px', left: '125px' },
    { top: '120px', left: '225px' },
    { top: '60px', left: '290px' },
    { top: '0px', left: '250px' },
    { top: '10px', left: '76px' }
];

let currentIndex = 0;

function changePositions() {
    images.forEach((image, index) => {
        const position = positions[(currentIndex + index) % positions.length];
        image.style.top = position.top;
        image.style.left = position.left;
    });
    currentIndex = (currentIndex + 1) % positions.length;
}

function startAnimation() {
    setInterval(changePositions, 3000);
}

document.addEventListener('DOMContentLoaded', startAnimation);