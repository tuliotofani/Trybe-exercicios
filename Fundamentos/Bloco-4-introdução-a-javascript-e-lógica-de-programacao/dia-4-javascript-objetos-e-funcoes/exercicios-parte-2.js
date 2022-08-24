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
//         return biggerName;
// }
// console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// Exercício 5

function repet(numbers){
    let counter = 0;
    for (let index in numbers){
        for (let index2 in numbers){
        if (numbers[index] === numbers[index2]){
            counter += 1;
        }
        }
    }
    return counter;
}
console.log(repet([2, 3, 2, 5, 8, 2, 3]));