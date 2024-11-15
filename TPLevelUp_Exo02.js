// === Exercice 2 ===

// 1. Conversion au format ES6 : `plus_one`
const arr = [3, 5, 8];
const plus_one = arr.map(n => n + 1);
console.log("Plus un :", plus_one); 

// 2. Fonction pour doubler les valeurs
const double = arr => arr.map(val => val * 2);
console.log("Doubler les valeurs :", double([3, 5, 8])); 

// 3. Destructuration d'un objet
const obj = { numbers: { a: 1, b: 2 } };
const { a, b } = obj.numbers;
console.log("Valeurs extraites :", "a =", a, ", b =", b); 
// 4. Fonction avec valeurs par défaut
const add = (a = 10, b = 10) => (a === 0 ? 0 : a) + (b === 0 ? 0 : b);
console.log("Addition avec valeurs par défaut :", add(0, 5)); 
