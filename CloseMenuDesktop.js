document.body.addEventListener('click', function (event) {
    let menuAtivo = jQuery('.e-n-menu-content').children('.e-active');
    if (!event.target.closest('.e-n-menu') && menuAtivo.length > 0) {
        menuAtivo.removeClass('e-active');
        menuAtivo.hide();
        jQuery('.e-n-menu-dropdown-icon').attr('aria-expanded', 'false');
    }
});