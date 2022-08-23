// Exercício 1
// let factorial = 5;
// let result = 1;

// for (let index = factorial; index >= 2; index -= 1){
//     result *= index;
// }
// console.log(result);

// Exercício 2
// let word = 'transferir';
// let result = [];

// for (let index = (word.length - 1); index >= 0; index -= 1){
//     result += word[index];
// }
// console.log(result);

// Exercício 3
// let arr = ['javasssssss', 'javascript', 'python', 'html', 'css'];
// let biggestWord = arr[0];
// let smallestWord = arr[0];

// for (let index = 1; index < arr.length; index += 1){
//     if (arr[index].length > biggestWord.length){
//         biggestWord = arr[index];
//     }
// }
// for (let index = 1; index < arr.length; index += 1){
//     if (arr[index].length < biggestWord.length){
//         smallestWord = arr[index];
//     }
// }

// console.log(biggestWord);
// console.log(smallestWord);

// Exercício 4
// let numeros = [];
// let primos = 0;

// for (let number = 2; number <= 150; number += 1){
//     numeros.push(number);
//     let isPrime = true;
//    for (let divisor = 2; divisor < number; divisor += 1){
//     if (number % divisor === 0){
//         isPrime = false;
//     }
//    }
//    if (isPrime) {primos = number;
//     }
// }    

// console.log(primos);

// Exercício Bônus 1

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let index = 0; index < n; index += 1){
//     inputLine = inputLine + symbol;
// }
// for (let index = 0; index < n; index += 1){
//     console.log(inputLine);
// }

// Exercício Bônus 2

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let index = 0; index <= n; index += 1){
//     console.log(inputLine);
//     inputLine = inputLine + symbol;
// }

// Exercício Bônus 3

// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let counter = n - 1;

// for (let index = 0; index < n; index += 1){
//     for (let index2 = 0; index2 < n; index2 += 1){
//         if (index2 < counter){
//             inputLine = inputLine + ' ';
//         } else {
//             inputLine = inputLine + symbol;
//         }
//     }
//     console.log(inputLine);
//     inputLine = '';
//     counter -= 1;
// }



// Exercício Bônus 4

// let n = 11;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRigth = midOfMatrix;

// for (let index = 0; index <= midOfMatrix; index += 1){
//     for (let indexColumn = 0; indexColumn <= n; indexColumn += 1){
//         if (indexColumn > controlLeft && indexColumn < controlRigth){
//             inputLine = inputLine + symbol;
//         } else {
//             inputLine = inputLine + ' ';
//         }
//     }
//     console.log(inputLine);
//     inputLine = '';
//     controlRigth += 1;
//     controlLeft -= 1;    
// }


// Exercício Bônus 5

// let n = 15;
// let symbol = '*';
// let mid = (n + 1) / 2;
// let controlLeft = mid;
// let controlRigth = mid;


// for (let indexLine = 1; indexLine <= mid; indexLine += 1){  
//     let inputLine = '';      
//     for (let indexColumn = 1; indexColumn <= n; indexColumn += 1){
//         if (indexColumn == controlLeft || indexColumn == controlRigth || indexLine == mid){
//             inputLine = inputLine + symbol;
//         } else {
//             inputLine = inputLine + ' ';
//         }
//     }    
//     controlLeft -= 1;
//     controlRigth += 1;
//     console.log(inputLine);
// }


// Exercício 6
// let number = 101;
// let divisor = 0;

// for (let index = 1; index <= number; index += 1){
//     if (number % index === 0){
//         divisor += 1;        
//     }
// }
// if (divisor === 2){
//     console.log(number, 'é primo');
// } else {console.log(number, 'não é primo')}