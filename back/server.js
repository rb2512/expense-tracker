import fs from "fs";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const data = JSON.parse(fs.readFileSync("./data/history.json", "utf-8"));

function getnewId (tableau) {
    const tableauId = tableau.map(t => t.id);
    const oldId = Math.max(... tableauId);
    const newId = oldId + 1;
    return newId;
};

app.use((req, res, next) => {
    console.log(`HTTP: ${req.method}`);
    console.log(`URL: ${req.url}`);
    console.log(`Heure: ${new Date().toLocaleDateString()}`);
    next();
});
app.get("/history", (req, res) => {
    res.send(data);
});
app.get("/history/categorie/:categorie", (req, res) => {
    const resultatCategorie = data.filter(d => d.categorie.toLowerCase() === req.params.categorie.toLowerCase());
    res.send(resultatCategorie);
});
app.get("/history/accountType/:accountType", (req, res) => {
    const resultatAccountType = data.filter(d => d.accountType.toLowerCase() === req.params.accountType.toLowerCase());
    res.send(resultatAccountType);
});
app.get("/history/type/:type", (req, res) => {
    const resultatType = data.filter(d => d.type.toLowerCase() === req.params.type.toLowerCase());
    res.send(resultatType);
})
app.post("/history", (req, res) => {
    const newHistoryId = getnewId(data);
    const newDate = new Date().toLocaleDateString();
    const newTransaction = {
        id: newHistoryId,
        montant: req.body.montant,
        categorie: req.body.categorie,
        accountType: req.body.accountType,
        type: req.body.type,
        date: newDate
    };
    data.push(newTransaction);
    fs.writeFileSync("./data/history.json", JSON.stringify(data), "utf-8");
    res.status(201).send(newTransaction);
});
app.listen(3000, () => console.log("Serveur actif, Port 3000"));
