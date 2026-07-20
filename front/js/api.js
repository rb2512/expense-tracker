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

export async function addElement (newAmount) {
    try {
        const response = await fetch ("http://localhost:3000/history", {
            method: "POST",
            headers : {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(newAmount)
        });
        const dataReponse = await response.json();
        return dataReponse;
    }
    catch(erreur) {
        console.log(`Oups, il y a eu une erreur: ${erreur}`);
    }
}