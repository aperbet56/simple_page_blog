// Récupération de l'élément HTML5
const footerYear = document.querySelector(".footer__text__year");

// Récupération de la date actuelle
const today = new Date();
// Récupération de  l'année en cours
const year = today.getFullYear();
console.log(year);
// Affichage dynamique de l'année
footerYear.textContent = `${year}`;
