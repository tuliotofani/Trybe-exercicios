function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
};

module.exports = sum;

  function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

module.exports = myRemove;

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

module.exports = myFizzBuzz;

const vogais = ['a', 'e', 'i', 'o', 'u'];
const code = [1, 2, 3, 4, 5];

function encode(text) {
  const caracters = text.split('');
  caracters.forEach((letra, i) => {
    vogais.forEach((vogal, k) => {
      caracters[i] = (letra === vogal) ? code[k] : caracters[i];
    });
  });

  return caracters.join('');
}

function decode(text) {
  const caracters = text.split('');
  caracters.forEach((caracter, i) => {
    code.forEach((num, k) => {
      caracters[i] = (caracter === num.toString()) ? vogais[k] : caracters[i];
    });
  });

  return caracters.join('');
}

// module.exports = {encode, decode};

const techList = (array, nome) => {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let tech = [];
  for (let index = 0; index < array.length; index += 1) {
    array.sort();
    const tech1 = {
      tech: array[index],
      name: nome
    }
    tech.push(tech1);
  }
  tech = tech.sort();
  return tech;
}

module.exports = techList;

const hydrate = (array) => {
  let sumHydrate = 0;
  let number = array.replace(/[^0-9]/g, '');
  for (let index = 0; index < number.length; index += 1) {
    let x = parseInt(number[index], 10);
    // console.log(typeof x);
    sumHydrate += x;
  }
  if (sumHydrate > 1) {
    return `${sumHydrate} copos de água`;
  }
  return `${sumHydrate} copo de água`;
}
// console.log(hydrate('3 cerveja'))
module.exports = hydrate;

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (ids, detail) => {
  let idNumber = '';
  for (let index = 0; index < professionalBoard.length; index += 1) {
    if (ids === professionalBoard[index].id) {
      idNumber = professionalBoard[index];
    }
  }
  if (!idNumber) {return "ID não identificada"}
  if (!idNumber[detail]) {return "Informação indisponível"}
  return idNumber[detail];
};
// console.log(searchEmployee('4678-', 'lastName'));
module.exports = searchEmployee;