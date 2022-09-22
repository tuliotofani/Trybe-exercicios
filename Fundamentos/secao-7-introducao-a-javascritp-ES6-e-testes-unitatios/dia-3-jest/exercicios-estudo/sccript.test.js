// const sum = require('./script');

// describe('Testa a soma de dois némeros', () => {
//   it('Retorna a soma de 4 e 5 igual a 9', () => {
//     expect(sum(4, 5)).toBe(9);
//   });
//   it('Retorna a soma de 0 e 0 igual a 0', () => {
//     expect(sum(0, 0)).toBe(0);
//   });
//   it('Retorna um erro quando os parâmetros são 4 e "5".', () => {
//     expect(() => sum(4, '5')).toThrowError();
//   });
//   it('Retorna "parameters must be numbers" quando os parâmetros são 4 e "5".', () => {
//     expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
//   });
// });

// const myRemove = require('./script');

// describe('Testa se a função remove o elemento informado do array', () => {
//   it('Verifica se o elemento 3 é removido do array [1, 2, 3, 4]', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
//   });
//   it('Verifica se ao remover o elemente, o retorno é diferente do array original', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
//   });
//   it('Verifica se retorna o array esperado ([1, 2, 3, 4], 5)', () => {
//     expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
//   });
// });

// const myFizzBuzz = require('./script');

// describe('Testa se a função fizzbuzz funciona de acordo', () => {
//   it('verifica se ao informar o número 15, retorna fizzbuzz', () => {
//     expect(myFizzBuzz(15)).toBe('fizzbuzz');
//   });
//   it('verifica se ao informar o número 6, retorna fizz', () => {
//     expect(myFizzBuzz(6)).toBe('fizz');
//   });
//   it('verifica se ao informar o número 10, retorna buzz', () => {
//     expect(myFizzBuzz(10)).toBe('buzz');
//   });
//   it('verifica se ao informar o número 11, retorna false', () => {
//     expect(myFizzBuzz(11)).toBe(11);
//   });
// })

// const {encode, decode} = require('./script');

// describe('Testa se a função fizzbuzz funciona de acordo', () => {
//   it('verifica se encode é uma função', () => {
//     expect(typeof encode).toBe('function');    
//   });
//   it('se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente:', () => {
//     expect(encode('a')).toBe('1');
//     expect(encode('e')).toBe('2');
//     expect(encode('i')).toBe('3');
//     expect(encode('o')).toBe('4');
//     expect(encode('u')).toBe('5');
//   });
//   it('se as demais letras/números não são convertidos para cada caso', () => {
//     expect(encode('q')).not.toBe('1');
//     expect(encode('w')).not.toBe('2');
//     expect(encode('t')).not.toBe('3');
//     expect(encode('y')).not.toBe('4');
//     expect(encode('p')).not.toBe('5');
//   });
//   it('se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
//     expect(encode('teste').length).toBe(5);
//   });
// })

// describe('Testa se as funções fizzbuzz funciona de acordo', () => {
//   it('verifica se decode é uma função', () => {
//     expect(typeof decode).toEqual('function');
//   });
//   it('se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
//     expect(decode('1')).toBe('a');
//     expect(decode('2')).toBe('e');
//     expect(decode('3')).toBe('i');
//     expect(decode('4')).toBe('o');
//     expect(decode('5')).toBe('u');
//   });
//   it('se as demais letras/números não são convertidos para cada caso', () => {
//     expect(decode('1')).not.toBe('q');
//     expect(decode('2')).not.toBe('w');
//     expect(decode('3')).not.toBe('r');
//     expect(decode('4')).not.toBe('t');
//     expect(decode('5')).not.toBe('y');
//   });
//   it('se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
//     expect(decode('t2st2s').length).toBe(6);
//   });
// })

// const techList = require('./script');

// describe('Testa a função techList', () => {
//   it('Testa se a função techList é definida', () => {
//     expect(techList).toBeDefined();
//   });
//   it('Testa se techList é uma função', () => {
//     expect(typeof techList).toBe('function');
//   });
//   it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
//     expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
//       {
//         tech: 'CSS',
//         name: 'Lucas'
//       },
//       {
//         tech: 'HTML',
//         name: 'Lucas'
//       },
//       {
//         tech: 'JavaScript',
//         name: 'Lucas'
//       },
//       {
//         tech: 'Jest',
//         name: 'Lucas'
//       },
//       {
//         tech: 'React',
//         name: 'Lucas'
//       }
//     ]);
//   });
//   it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
//     expect(techList([], 'Lucas')).toBe('Vazio!');
//   });
// });

// const hydrate = require('./script');

// describe('Testa a função hydrate', () => {
//   it('Testa se a função hydrate é definida', () => {
//     expect(hydrate).toBeDefined();
//   });
//   it('Testa se hydrate é uma função', () => {
//     expect(typeof hydrate).toBe('function');
//   });
//   it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
//     expect(hydrate('1 cerveja')).toBe('1 copo de água');
//     expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
//     expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
//     expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
//     expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
//   });
// });

const searchEmployee = require('./script')

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  // it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
  //   expect(hydrate('1 cerveja')).toBe('1 copo de água');
  //   expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
  //   expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
  //   expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
  //   expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  // });
});