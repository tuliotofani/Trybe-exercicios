const { uppercase } = require('./script2');

describe('test the function uppercase ', () => {
  it('should return test to TEST', () => {
    uppercase('test', (strUpperCase) => {
      try {
        expect(strUpperCase).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    })
  });
})



// Verifique se a importação do arquivo correto está sendo feita.
// const { getPokemonDetails } = require('./get-pokemon-details');

// describe('A função getPokemonDetails', () => {
//   it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
//     const expectedError = new Error('Não temos esse pokémon para você :('); // 1. Criamos o erro esperado

//     getPokemonDetails('Pikachu', (error, _message) => { // 2, 3. Chamamos a função passando os parâmetros
//       try { // 4. Adiciona um `try/catch`
//         expect(error).toEqual(expectedError); // 5. Criamos o expect
//         done(); // 6. Chamamos a função `done()`
//       } catch (error) {
//         done(error); // 7. Chamamos a função `done()` com o parâmetro `error`
//       }
//     });
//   });

//   it('retorna um pokémon que existe no banco de dados', (done) => { // 8. Os mesmos processos do primeira `it` com seus ajustes
//     const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

//     getPokemonDetails('Charmander', (_error, result) => {
//       try {
//         expect(result).toBe(expectedString);
//         done();
//       } catch (error) {
//         done(error);
//       }
//     });
//   });
// });
