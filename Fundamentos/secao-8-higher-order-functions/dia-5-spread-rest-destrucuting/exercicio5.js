const myList = [5, 2, 3];

const [number1, number2, number3] = myList;
const swap1 = [number3, number2, number1];
console.log(swap1);
const swap = (a, b, c) => [c , b, a];
console.log(swap(...myList));