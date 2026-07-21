import { calculerSolde } from "./utils.js";
import { addElement, fetchElement } from "./api.js";
import { afficherSolde,afficherMessageDepense, afficherMessageRevenu,historiqueList, btnAddDepense, btnAddRevenu, btnHistorique, afficherFormDepense, afficherFormRevenu, afficherHistoriqueContainer, btnCloseDepense, btnCloseRevenu, toutDésafficher, formDepense, formRevenu, recupererInputDepense, recupererInputRevenu, creerElement } from "./ui.js";
let donnees;

document.addEventListener("DOMContentLoaded", async () => {
    donnees = await fetchElement();
    donnees.forEach(d => {
        historiqueList.appendChild(creerElement(d));
    })
    const newSolde = calculerSolde(donnees);
    afficherSolde(newSolde);
});
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
});

formDepense.addEventListener("submit", async (event) => {
    event.preventDefault();
    const {montantDepense, categorieDepense, accountTypeDepense} = recupererInputDepense();
    const newTransaction = {
        montant: montantDepense,
        categorie: categorieDepense,
        accountType: accountTypeDepense,
        type: "depense"
    };

    const transactionCree = await addElement(newTransaction);
    donnees.push(transactionCree);
    historiqueList.appendChild(creerElement(transactionCree));
    afficherMessageDepense();
    const newSolde = calculerSolde(donnees);
    afficherSolde(newSolde);
});
formRevenu.addEventListener("submit", async (event) => {
    event.preventDefault();
    const {montantRevenu, categorieRevenu, accountTypeRevenu} = recupererInputRevenu();
    const newTransaction = {
        montant: montantRevenu,
        categorie: categorieRevenu,
        accountType: accountTypeRevenu,
        type: "revenu"
    };

    const transactionCree = await addElement(newTransaction);
    donnees.push(transactionCree);
    historiqueList.appendChild(creerElement(transactionCree));
    afficherMessageRevenu();
    const newSolde = calculerSolde(donnees);
    afficherSolde(newSolde);
});