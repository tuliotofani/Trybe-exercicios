// Exercísio I

const setEmail = (nome) => {
    return {nome, email: `${nome.replace(' ', '').toLowerCase()}@trybe.com`}
}

const newEmployees = () => {
    const employees = {
      id1: setEmail('Tulio Tofani'),
      id2: setEmail('Natalia Oliveira'),
      id3: setEmail('Kiwi RuthRaquel'),
    }
    return employees;
  };

console.log(newEmployees())

// Exercício II

const luckNumber = () => {
    return Math.ceil(Math.random() * 5);
}

const checkWinner = (number, callback) => {
  if (number === callback()) {
    return 'Parabéns você ganhou!';
  }
  return 'Tente novamente'
}

// console.log(checkWinner(3, luckNumber));

// Ecercício III

const RIGHT_ANSWERS =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'C', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (answers, student) => {
  let note = 0;
  for (let index = 0; index < answers.length; index += 1) {
    if (answers[index] === student[index]) {
      note += 1;
    } else if (student[index] === 'N.A') {
      note -= 0;
    } else if (answers[index] !== student[index]) {
        note -= 0.5;
    }        
  }
  return `Resulado final: ${note} pontos`;
}

// console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS));
