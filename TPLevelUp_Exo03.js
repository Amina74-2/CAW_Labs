
// 1. Suppression des doublons
const setOne = arr => [...new Set(arr)];
console.log("Sans doublons :", setOne([4, 5, 5, 2, 2, 4, 3, 1, 5, 2]));

// 2. Suppression de valeurs spécifiques
const getRidOf = (tab, ...val) => tab.filter(item => !val.includes(item));
console.log("Après suppression :", getRidOf(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'b', 'e', 'x'));

