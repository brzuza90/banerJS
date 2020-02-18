/* Parametry funkcji */
let activeElement = 0;
const timeChange = 4000;
/* Pobieramy elementy na których pracujemy */
const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');
/* Informacje w tablicach o elementach */
const colorImages = ["img/s1.png", "img/s2.png", "img/s3.png"];
const grayImages = ["img/s1a.png", "img/s2a.png", "img/s3a.png"];
const names = ["Imię1 Nazwisko1", "Imię2 Nazwisko2", "Imię1 Nazwisko2"];
const profession = ["Programistka JS", "UX i UI Designer", "Front-End Developer"];

function changeElement() {
    activeElement++;
    if (activeElement == colorImages.length) {
        activeElement = 0;
    }
    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = profession[activeElement];
};
setInterval(changeElement, timeChange);