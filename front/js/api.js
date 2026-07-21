export async function fetchElement () {
    try {
        const response = await fetch("http://localhost:3000/history");
        const data = await response.json();
        return data;
    }
    catch(erreur) {
        console.log(`Oups, il y a eu une erreur: ${erreur}`);
    }
};
export async function fetchElementCategorie () {
    const response = await fetch ("")
}
export async function addElement (newTransaction) {
    try {
        const response = await fetch ("http://localhost:3000/history", {
            method: "POST",
            headers : {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(newTransaction)
        });
        const dataReponse = await response.json();
        return dataReponse;
    }
    catch(erreur) {
        console.log(`Oups, il y a eu une erreur: ${erreur}`);
    }
}