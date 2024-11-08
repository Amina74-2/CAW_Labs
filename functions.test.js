const { first, last, joinArray, chunk } = require('./functions');

test('retourne les premiers n éléments d’un tableau', () => {
    expect(first([1, 2, 3, 4], 2)).toEqual([1, 2]);
    expect(first([1, 2, 3, 4], 0)).toEqual([]);
    expect(first([1, 2, 3, 4])).toEqual([1]); 
});

test('retourne les derniers n éléments d’un tableau', () => {
    expect(last([1, 2, 3, 4], 2)).toEqual([3, 4]);
    expect(last([1, 2, 3, 4], 0)).toEqual([]);
    expect(last([1, 2, 3, 4])).toEqual([4]); 
});

test('concatène tous les éléments d’un tableau de chaînes', () => {
    expect(joinArray(['Red', 'Green', 'White', 'Black'])).toBe('RedGreenWhiteBlack');
});

test('divise un tableau en sous-tableaux de taille prédéfinie', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
});
