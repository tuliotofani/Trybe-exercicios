const sum = (...numbers) => numbers.reduce(((acum, curr) => acum + curr), 0);

console.log(sum(1, 2, 3));
