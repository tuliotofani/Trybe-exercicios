const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (car) => {
  const [carro, marca, ano] = car;
  return { carro, marca, ano};
}

const toObject1 = ([name, brand, year]) => ({ name, brand, year });

console.log(toObject1(palio));
console.log(toObject(palio));