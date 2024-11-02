const fs = require('fs');

// Partie 1 
const contentPart1 = process.argv[2]; 
fs.writeFileSync('f.txt', contentPart1);
console.log("Le fichier f.txt a été sauvegardé !");

// -------------------------------------------------------------------------

// Partie 2 
const fileName = process.argv[3]; 
const contentPart2 = process.argv[4];   


if (!fileName || !contentPart2) {
    console.error("Veuillez fournir un nom de fichier et un contenu à écrire.");
    process.exit(1);
}

fs.writeFileSync(fileName, contentPart2);
console.log(`Le fichier ${fileName} a été sauvegardé !`);

// -------------------------------------------------------------------------

// Partie 3 
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error("Erreur lors de la lecture du fichier :", err);
        return;
    }
    console.log("Contenu du fichier:\n", data);
});

