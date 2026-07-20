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
    const divEl = document.createElement("div");
    divEl.classList.add("transaction-row");
    const idEl = document.createElement("p");
    idEl.textContent = newId;
    const strongEl = document.createElement("strong");
    const montantEl = document.createElement("p");
    montantEl.textContent = element.depense;
    strongEl.appendChild(montantDepenseEl);
    const categorieEl = document.createElement("p");
    categorieEl.textContent = element.categorie;
    const typeEl = document.createElement("p");
    typeEl.textContent = element.type
    const accountTypeEl = document.createElement("p");
    accountTypeEl.textContent = element.accountType;
    const dateEl = document.createElementr("p");
    dateEl.textContent = newDate;
    divEl.appendChild(idEl);
    divEl.appendChild(dateEl);
    divEl.appendChild(strongEl);
    divEl.appendChild(categorieEl);
    divEl.appendChild(typeEl);
    divEl.appendChild(accountTypeEl);
    return divEl;
};