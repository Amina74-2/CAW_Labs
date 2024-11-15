
// 1. Échanger deux variables en une seule ligne
let v1 = 10, v2 = 20;
[v1, v2] = [v2, v1];
console.log("Après échange :", "v1 =", v1, ", v2 =", v2); 

// 2. Concaténer plusieurs tableaux
const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];
const foods = ["mango", "pecan pie"];
const combinedArray = [...numbers, ...letters, ...foods];
console.log("Tableau concaténé :", combinedArray);


// 3. Décomposer une chaîne en un tableau de caractères
const str = "hello";
const charArray = [...str];
console.log("Tableau de caractères :", charArray);

// 4. 
function fn(a, b, ...args) {
    console.log("a =", a, "b =", b, "args =", args);
}

fn(1, 2, 3, 'A', 'B', 'C'); // Résultat : a = 1, b = 2, args = [3, 'A', 'B', 'C']
fn(1, 2);                   // Résultat : a = 1, b = 2, args = []
let x = ['a', 'b', 'c', 'd'];
fn(...x);                   // Résultat : a = 'a', b = 'b', args = ['c', 'd']
