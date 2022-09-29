
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const yearSeasons1 = ({ spring, summer, autumn, winter}) => [...spring, ...summer, ... autumn, ...winter];

console.log(yearSeasons1(yearSeasons));

const products = [
    {
      name: 'laptop',
      price: 1000,
      id: 3,
    },
    {
      name: 'desktop',
      price: 1500,
      id: 2,
    },
    {
      name: 'phone',
      price: 500,
      id: 1,
    },
  ];
  
  console.log(products.sort((a, b) => b.price - a.price));
  