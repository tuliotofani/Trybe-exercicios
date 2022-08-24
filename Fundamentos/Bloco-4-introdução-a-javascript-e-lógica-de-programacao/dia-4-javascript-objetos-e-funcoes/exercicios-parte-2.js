// Exercício 1

// function isPalindrome(word){
//     for (let index in word)
//         if (word[index] != word[(word.length - 1 - index)]){
//             return false;
//         }
//             return true;
// }
// console.log(isPalindrome('renner'));

// Exercício 2

// function isBigger(numbers){
//     let biggerNumberIndex = 0;
//     for (let index in numbers){
//         if (numbers[biggerNumberIndex] < numbers[index]){
//         biggerNumberIndex = index;
//         }
//     }
//     return biggerNumberIndex
// }
// console.log(isBigger([2, 3, 6, 7, 10, 1]));

// Exercício 3

// function isSmaller(numbers){
//     let smallerNumberIndex = 0;
//     for (let index in numbers){
//         if (numbers[smallerNumberIndex] > numbers[index]){
//         smallerNumberIndex = index;
//         }
//     }
//     return smallerNumberIndex
// }
// console.log(isSmaller([2, 4, 6, 7, 10, 0, -3]));

// Exrcício 4

// function biggestName(names){
//     let biggerName = names[0];
//     for (let index in names){
//         if (biggerName.length < names[index].length){
//             biggerName = names[index];
//         }
//     }
//     return biggerName;
// }
// console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// Exercício 5

// function repetition(numbers){
//     let counterRep = 0;
//     let counterNumber = 0;
//     let indexNumberRep = 0;

//     for (let index in numbers){
//         let checkNumber = numbers[index];
//         for (let index2 in numbers){
//             if (checkNumber === numbers[index2] && index !== index2){
//                 counterNumber += 1;
//             }
//         }
//         if (counterNumber > counterRep){
//             counterRep = counterNumber;
//             indexNumberRep = index;
//         }
//         counterNumber = 0;    
//     }
//     return numbers[indexNumberRep];
// }
// console.log(repetition([2, 3, 2, 5, 3, 2, 3]));

// Exercício 6

// function sumNumber(n){
//     let sum = 0;
//     for (let index = 1; index <= n; index += 1){
//         sum += index
//     }
//     return sum;
// }
// console.log(sumNumber(7));

// Exercício 7 primeiro método

// function checkEndOfWords(word1,word2){
//     let word1Test = [];
//     let word2Test = [];

//     for (let index = word1.length - 1; index >= (word1.length - word2.length); index -= 1){
//         word1Test += word1[index]; 
//     }
//     for (let index2 = word2.length - 1; index2 >= 0; index2 -= 1){
//         word2Test += word2[index2];
//     }
//     if (word1Test === word2Test){
//         return true;
//     }   
//         return false;       
// }

// console.log(checkEndOfWords('trybe', 'be'));

// Exercício 7 segundo método

// function checkEndOfWords(word1,word2){
//     let word1Test = [];

//     for (let index = word1.length - word2.length; index < word1.length; index += 1){
//         word1Test += word1[index]; 
//     }  
//         if (word1Test === word2){
//         return true;
//     }
//         return false;       
// }

// console.log(checkEndOfWords('joaofernando', 'fernand'));
