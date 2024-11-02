const fs = require('fs');
const fileName = 'f.txt'; 

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error("Erreur lors de la lecture du fichier :", err);
        return;
    }
    console.log("Contenu du fichier:\n", data);
});
