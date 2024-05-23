

const iconBanner = document.querySelectorAll('.iconesBanner');

const positionsIcon = [
    { top: '5px', left: '350px' },
    { top: '-28px', left: '488px' },
    { top: '13px', left: '631px' },
    { top: '180px', left: '770px' },
    { top: '240px', left: '725px' },
    { top: '340px', left: '775px' },
    { top: '535px', left: '620px' },
    { top: '495px', left: '488px' },
    { top: '535px', left: '350px' }
];

let currentIndexIcon = 0;

function changePositionsIcon() {
    iconBanner.forEach((icon, index) => {
        const positionIc = positionsIcon[(currentIndexIcon + index) % positionsIcon.length];
        icon.style.top = positionIc.top;
        icon.style.left = positionIc.left;
    });
    currentIndexIcon = (currentIndexIcon + 1) % positionsIcon.length;
}

function startAnimationBannerPrincipal() {
    setInterval(changePositionsIcon, 1500);
}

// Inicia a animação automaticamente quando a página carrega
document.addEventListener('DOMContentLoaded', startAnimationBannerPrincipal);
