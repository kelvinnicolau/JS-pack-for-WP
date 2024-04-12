const tabOne = document.getElementById("tabTecnicas");
const tabTwo = document.getElementById("tabCaracteristicas");
const tabThree = document.getElementById("tabDownloads");
const tabFor = document.getElementById("tabModelos");

const tabs = [tabOne, tabTwo, tabThree, tabFor]; // Incluindo a nova tab na lista
let tabContents = Array.from(document.querySelectorAll('.e-n-tabs-content > div'));
let activeTextArray = Array.from(document.querySelectorAll('.e-n-tabs-content > div')).filter(function (div) {
    let interna = div.querySelector('.e-con-inner > div');
    return interna && interna.childNodes.length > 0;
}).map(function (div) {
    return div.getAttribute('data-tab-index');
});

tabs.forEach((tab, index) => {
    const dataTab = tab.getAttribute('data-tab-index');
    tab.style.display = activeTextArray.includes(dataTab) ? '' : 'none';
});

tabContents.forEach(function (content) {
    content.classList.remove('e-active');
    if (content.getAttribute('data-tab-index') === activeTextArray[0]) {
        content.classList.add('e-active');
    }
})

if (activeTextArray.indexOf('1') === -1) {
    tabContents[0].style.display = 'none';
}

const visibleTabs = tabs.filter(tab => tab.style.display !== 'none');

if (visibleTabs.length === 1) {
    visibleTabs[0].setAttribute('aria-selected', 'true');
}