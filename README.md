
# Suivi des dépenses

Application de suivi de dépenses/revenus en JavaScript vanilla (front) connectée à une API REST maison en Node.js/Express (back). Projet développé dans le cadre d'un apprentissage progressif du développement backend, en complément d'un profil front-end déjà solide.

## Fonctionnalités

- Ajout de dépenses et de revenus via formulaires dédiés
- Calcul du solde en temps réel, recalculé à chaque transaction (jamais stocké en dur — toujours dérivé de l'historique)
- Historique complet des transactions, affiché façon relevé de compte
- Séparation compte personnel / compte commun sur chaque transaction
- Persistance réelle des données côté serveur (fichier JSON réécrit à chaque ajout — pas de `localStorage`)

## Stack technique

**Front** : HTML / CSS / JavaScript (ES6 modules), `fetch` pour la communication avec l'API

**Back** : Node.js, Express

- `express.json()` pour le parsing du body des requêtes
- `cors` pour autoriser les appels cross-origin entre front et back en développement
- `fs` pour la lecture/écriture du fichier de données

## Structure du projet

```
├── back/
│   └── server.js          # serveur Express, routes, logique métier
├── data/
│   └── history.json       # persistance des transactions
├── front/
│   ├── index.html
│   ├── style.css
│   └── js/
│       ├── main.js         # logique d'interaction, event listeners
│       ├── ui.js            # sélecteurs DOM, création d'éléments, affichage
│       ├── api.js           # appels fetch vers le backend
│       └── utils.js         # fonctions pures (calcul du solde, etc.)
```

## Installation et lancement

### Backend

```bash
cd back
npm install
node server.js
```

Le serveur démarre sur `http://localhost:3000`.

### Frontend

Ouvrir `front/index.html` avec un serveur local (par exemple l'extension **Live Server** de VS Code) — un simple double-clic sur le fichier ne fonctionnera pas correctement à cause des imports de modules ES6 et des appels réseau.

## Routes de l'API

| Méthode | Route                                 | Description                                    |
| -------- | ------------------------------------- | ---------------------------------------------- |
| `GET`  | `/history`                          | Renvoie toutes les transactions                |
| `GET`  | `/history/categorie/:categorie`     | Filtre par catégorie                          |
| `GET`  | `/history/accountType/:accountType` | Filtre par type de compte (personnel / commun) |
| `GET`  | `/history/type/:type`               | Filtre par type (revenu / dépense)            |
| `POST` | `/history`                          | Ajoute une nouvelle transaction                |

Toutes les requêtes passent par un middleware de log (méthode, URL, heure).

## Pistes d'évolution

- Authentification (comptes séparés + vue partagée du compte commun)
- Remplacement du stockage fichier JSON par une vraie base de données ou un service géré (Firebase/Supabase), pour une vraie persistance multi-appareils
- Filtres combinés côté front (catégorie + période, par exemple)
