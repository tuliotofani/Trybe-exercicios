// // exercicio 1
// let a = 7, b = 7;
// let result;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// // exercício 2
// let a = 7, b = 7;
// let result;
// if (a > b) {
//     result = a;
// } else if (a < b) {
//     result = b;
// } else result = "os dois números são iguais";

// console.log(result);

// // exercício 3
// let a = 120, b = 15, c = 120;
// let result;

// if (a >= b && a >= c){
//     result = a;
// } else if (b >= c) {
//     result = b;
// } else if (b <= c) {
//     result = c;
// }

// console.log(result) 

// // exercício 4
// let a = -1;
// let result;

// if (a > 0){
//     result = "positive";
// } else if (a === 0){
//     result = "zero";
// } else {
//     result = "negative"
// }

// console.log(result)

// // exercício 5
// let alfa = -30;
// let beta = 60;
// let gama = 120;
// let result;

// if (alfa + beta + gama === 180 && alfa > 0 && beta > 0 && gama > 0) {
//     result = "True";
// } else if (alfa + beta + gama !== 180 && alfa > 0 && beta > 0 && gama > 0){
//     result = "false";
// } else{
//     result = "erro"
// }

// console.log(result)

// // exercício 6
// let pacaDeXadrex = "Knight".toLowerCase();
// let result;

// switch (pacaDeXadrex){
//     case "pawn":
//         result = "Pode mover duas casas para a frente, caso seja a inicial, de restante apenas uma casa para frente. Pode capturar uma peça uma casa a sua diagonal para frente, assumindo a posição da mesma";
//         break;
//     case "king":
//         result = "Move uma casa para qualquer direção."
//         break;
//     case "queen":
//         result = "Move em qualquer quantidade de casas na horizontal, vertical ou diagonal. Não pode pular peças.";
//         break;
//     case "rook":
//         result = "Move nas qualqur quantidade de casas nas direções horizontal ou vertical. Não pode pular peças.";
//         break
//     case "knight":
//         result = "Move no formato de um L, pode pular peças."
//         break;
//     case "bishop":
//         result = "Move qualquer quantidade de casa nas diagonais. Não pode pular peças.";
//         break;
//     default:
//         result = "Erro!!"
//         break
// }

// console.log(result)

// // Exercício 7
// let grade = 4;
// let result;

// if (grade >= 90 && grade <=100){
//     result = "A";
// } else if (grade < 90 && grade >= 80){
//     result = "B";
// } else if (grade < 80 && grade >+ 70){
//     result = "C";
// } else if (grade < 70 && grade >= 60){
//     result = "D";
// } else if (grade < 60 && grade >= 50){
//     result = "E";
// } else if (grade < 50 && grade >= 0){
//     result = "F";
// } else if (grade < 0 || grade > 100){
//     result = "ERRO!!"
// }

// console.log(result)

// // Exercício 8
// const a = 5, b = 7, c = 0;
// let result;

// if ((a % 2) === 0 || (b % 2) === 0 || (c % 2) === 0){
//     result = true;
// } else {result = false}

// console.log(result);

// // Exercício 9
// const a = 8, b = 6, c = 10;
// let result;

// if ((a % 2) !== 0 || (b % 2) !== 0 || (c % 2) !== 0){
//     result = true;
// } else {result = false}

// console.log(result);

// // Exercício 10
// let custo = 50;
// let venda = 100;
// let quantidadeVendido = 1000;
// let imposto = 0.2;
// let lucro;

// if (custo >= 0 && venda >= 0){
//     lucro = ((venda - (custo * (1 + imposto))) * quantidadeVendido);
// } else { lucro = "erro"}

// console.log("Seu lucro será de " + lucro);

// Exercício 11
// let salarioBruto = 5000;
// let salarioDescontoINSS;
// let aliqInssCat1 = 0.92;
// let aliqInssCat2 = 0.91;
// let aliqInssCat3 = 0.89;
// let aliqInssCat4 = 570.88;
// let aliqIrCat1 = 0.925;
// let aliqIrCat2 = 0.85;
// let aliqIrCat3 = 0.775;
// let aliqIrCat4 = 0.725;
// let salarioLiquido;

// if (salarioBruto < 1556.94){
//     salarioDescontoINSS = (salarioBruto * aliqInssCat1);
// } else if (salarioBruto <= 2694.92){
//     salarioDescontoINSS = (salarioBruto * aliqInssCat2);
// } else if (salarioBruto < 5189.82){
//     salarioDescontoINSS = (salarioBruto * aliqInssCat3);
// } else if (salarioBruto > 5189.82){
//     salarioDescontoINSS = (salarioBruto - aliqInssCat4);
// } else {salarioBruto = "Erro!"}

// if (salarioDescontoINSS < 1903.98){
//     salarioLiquido = (salarioDescontoINSS);
// } else if (salarioDescontoINSS <= 2826.65){
//     salarioLiquido = ((salarioDescontoINSS * aliqIrCat1) + 142.80);
// } else if (salarioDescontoINSS < 3751.05){
//     salarioLiquido = ((salarioDescontoINSS * aliqIrCat2) + 354.80);
// } else if (salarioDescontoINSS < 4664.68){
//     salarioLiquido = ((salarioDescontoINSS * aliqIrCat3) + 636.13);
// } else if (salarioDescontoINSS > 4664.68){
//     salarioLiquido = ((salarioDescontoINSS * aliqIrCat4) + 869.36);
// } else {salarioBruto = "Erro!"}

// console.log("Com um salário bruto de R$" + salarioBruto + " seu salário líquido será de R$" + salarioLiquido + ".");
