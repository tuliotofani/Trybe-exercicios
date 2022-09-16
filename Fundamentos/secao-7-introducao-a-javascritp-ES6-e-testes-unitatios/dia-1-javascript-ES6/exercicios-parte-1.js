// exercice 1

// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} + ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//       console.log(elseScope);
//     }
//     // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

  // testingScope(false);

//   Exercice 2

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// oddsAndEvens.sort(function(a, b){return a - b});
// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// const sortOddsAndEvens = (numbers) => {
//   for (let index = 1; index < numbers.length; index += 1) {
//     for (let index2 = 0; index2 < index; index2 += 1) {
//       if (numbers[index] < numbers[index2]) {
//         let position = numbers[index];
//         numbers[index] = numbers[index2];
//         numbers[index2] = position;
//       }
//     }
//   }
//   return numbers;
// }

// console.log(sortOddsAndEvens(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`));

// PARTE II

// Exercice 1

// const factorial = (number) => {
//   let result = 1;
//   if (number < 2) {
//     return result;
//   } else {
//     for (let index = 2; index <= number; index += 1) {
//       result *= index;
//     }
//   }
//   return result;
// }

// console.log(`Esse é o fatorial ${factorial(4)}`);

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(3));

// Exercice 2 

// const longestWord = (array) => {
//   let ordenado = array.split(' ');
//   for (let index = 1; index < ordenado.length; index += 1) {
//     for (let index2 = 0; index2 < index; index2 += 1) {
//       if (ordenado[index].length < ordenado[index2].length) {
//         let position = ordenado[index];
//         ordenado[index] = ordenado[index2];
//         ordenado[index2] = position
//       }
//     }
//   }
//   return ordenado[ordenado.length - 1];
// }

// const sortArray = (array) => array.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// const longestWord = (array) => {
//   const wordArray = array.split(' ');
//   let maxLength = 0;
//   let result = '';
//   for (const word of wordArray) {
//     if (word.length > maxLength) {
//       maxLength = word.length;
//       result = word;      
//     }    
//   }  
//   return result;
// }

// console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));

// Exercice 4

const substituaX = (nome) => {
  const frase = `Tryber * aqui!`
  let text = frase.replace('*', nome);
  return text;
}

const minhasSkills = (skills) => {
  let result = `${substituaX('Túlio Tófani')}

Minhas três principais habilidades são:`
  skills.forEach((skill) => {
    result = `${result}
    * ${skill}`
  })
  return result;
}

// console.log(substituaX('Tulio'));
console.log(minhasSkills(['JavaScript', 'HTML', 'CSS']));
