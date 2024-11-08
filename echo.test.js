const exf = require('./echo');

test('exf affiche la chaîne plusieurs fois', () => {
    console.log = jest.fn(); 
    exf('test', 5)
  
    expect(console.log).toHaveBeenCalledTimes(5);
   
    expect(console.log).toHaveBeenCalledWith('test');
});
