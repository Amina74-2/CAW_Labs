const mean = require('./notation');

test('calcule la moyenne d’un tableau de scores', () => {
    const scores = [1, 20, 12, 10, 17];
    expect(mean(scores)).toBeCloseTo(12); 
});

test('retourne 0 pour un tableau vide', () => {
    expect(mean([])).toBe(0); 
});
