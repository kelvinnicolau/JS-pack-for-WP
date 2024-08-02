// JS para ativar o iframe no click do container

document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.getElementById('play-iframeOne');
  const iframe = document.getElementById('iframeOne');
  const container = document.getElementById('container-tendaOne');

  playButton.addEventListener('click', function () {
    playButton.style.opacity = '0';
    playButton.style.zIndex = '1';
    iframe.style.opacity = '1';
    iframe.style.zIndex = '2';
    container.style.backgroundImage = 'none';
  });
});


// JS para deixar os containers responsivo no hover

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container-tenda');

    containers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            containers.forEach(c => c.classList.remove('tenda-active'));
            container.classList.add('tenda-active');
        });
    });
});
