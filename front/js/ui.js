const solde = document.getElementById("solde");
export const btnAddDepense = document.getElementById("btnAddDepense");
export const btnAddRevenu = document.getElementById("btnAddRevenu");
export const btnHistorique = document.getElementById("btnHistorique");
const formContainerDepense = document.getElementById("formContainerDepense");
const formContainerRevenu = document.getElementById("formContainerRevenu");
const historiqueContainer = document.getElementById("historiqueContainer");
export const btnCloseDepense = document.getElementById("btnCloseDepense");
export const btnCloseRevenu = document.getElementById("btnCloseRevenu");

export const formDepense = document.getElementById("formDepense");
const inputMontantDepense = document.getElementById("montantDepense");
const inputCategorieDepense = document.getElementById("categorieDepense");
const inputAccountTypeDepense = document.getElementById("accountTypeDepense");

export const formRevenu = document.getElementById("formRevenu");
const inputMontantRevenu = document.getElementById("montantRevenu");
const inputCategorieRevenu = document.getElementById("categorieRevenu");
const inputAccountTypeRevenu = document.getElementById("accountTypeRevenu");

export function afficherFormDepense () {
    formContainerDepense.classList.remove("hidden");
    formContainerRevenu.classList.add("hidden");
    historiqueContainer.classList.add("hidden");
};
export function afficherFormRevenu () {
    formContainerRevenu.classList.remove("hidden");
    formContainerDepense.classList.add("hidden");
    historiqueContainer.classList.add("hidden");
};
export function afficherHistoriqueContainer () {
    historiqueContainer.classList.remove("hidden");
    formContainerRevenu.classList.add("hidden");
    formContainerDepense.classList.add("hidden");
};
export function toutDésafficher () {
    formContainerDepense.classList.add("hidden");
    formContainerRevenu.classList.add("hidden");
    historiqueContainer.classList.add("hidden");
};
export function recupererInputDepense () {
    const montantDepense = inputMontantDepense.value;
    const categorieDepense = inputCategorieDepense.value;
    const accountTypeDepense = inputAccountTypeDepense.value;
    return {montantDepense, categorieDepense, accountTypeDepense};
};
export function recupererInputRevenu () {
    const montantRevenu = inputMontantRevenu.value;
    const categorieRevenu = inputCategorieRevenu.value;
    const accountTypeRevenu = inputAccountTypeRevenu.value;
    return {montantRevenu, categorieRevenu, accountTypeRevenu};
};
export function creerElement (element, newId, newDate) {
    const divDepenseEl = document.createElement("div");
    divDepenseEl.classList.add("transaction-row");
    const idDepenseEl = document.createElement("p");
    idDepenseEl.textContent = newId;
    const strongDepenseEl = document.createElement("strong");
    const montantDepenseEl = document.createElement("p");
    montantDepenseEl.textContent = element.depense;
    strongDepenseEl.appendChild(montantDepenseEl);
    const categorieDepenseEl = document.createElement("p");
    categorieDepenseEl.textContent = element.categorie;
    const accountTypeDepenseEl = document.createElement("p");
    accountTypeDepenseEl.textContent = element.accountType;
    const dateDepenseEl = document.createElement("p");
    dateDepenseEl.textContent = newDate;
    divDepenseEl.appendChild(idDepenseEl);
    divDepenseEl.appendChild(dateDepenseEl);
    divDepenseEl.appendChild(strongDepenseEl);
    divDepenseEl.appendChild(categorieDepenseEl);
    divDepenseEl.appendChild(accountTypeDepenseEl);
    return divDepenseEl;
};