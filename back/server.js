import fs from "fs";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const data = JSON.parse(fs.readFileSync("/data/history.json", "utf-8"));

app.use((req, res, next) => {
    console.log(`HTTP: ${req.method}`);
    console.log(`URL: ${req.url}`);
    console.log(`Heure: ${new Date().toLocaleDateString()}`);
});
app.get("/history", (req, res) => {
    res.send(data);
});
app.get("/history/categorie")