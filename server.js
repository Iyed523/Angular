const express = require('express');
const path = require('path');

const app = express();

// Dossier où Angular build met les fichiers compilés
const distFolder = path.join(__dirname, 'dist', 'assignment-app', 'browser');

// Servir les fichiers statiques Angular
app.use(express.static(distFolder));

// Toutes les autres routes renvoient le fichier index.html d'Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(distFolder, 'index.html'));
});

// Port d'écoute
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
