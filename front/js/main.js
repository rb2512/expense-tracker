import { btnAddDepense, btnAddRevenu, btnHistorique, afficherFormDepense, afficherFormRevenu, afficherHistoriqueContainer, btnCloseDepense, btnCloseRevenu, toutDésafficher } from "./ui.js";

btnAddDepense.addEventListener("click", () => {
    afficherFormDepense();
});

btnAddRevenu.addEventListener("click", () => {
    afficherFormRevenu();
})

btnHistorique.addEventListener("click", () => {
    afficherHistoriqueContainer();
});

btnCloseDepense.addEventListener("click", () => {
    toutDésafficher();
});
btnCloseRevenu.addEventListener("click", () => {
    toutDésafficher();
})