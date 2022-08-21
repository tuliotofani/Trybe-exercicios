let jogoTulio = [3, 17, 25, 37, 50, 57];
let resultadoMega = [];
let acertos = [];

resultadoMega.push(Math.floor(Math.random() * 60) + 1);
resultadoMega.push(Math.floor(Math.random() * 60) + 1);
resultadoMega.push(Math.floor(Math.random() * 60) + 1);
resultadoMega.push(Math.floor(Math.random() * 60) + 1);
resultadoMega.push(Math.floor(Math.random() * 60) + 1);
resultadoMega.push(Math.floor(Math.random() * 60) + 1);

console.log('Seu jogo:', jogoTulio);
console.log('Resultado da Mega Sena: ', resultadoMega);

for (let index = 0; index < jogoTulio.length; index += 1){
    for (let index2 = 0; index2 < resultadoMega.length; index2 += 1){
        if (jogoTulio[index] === resultadoMega[index2]){
            acertos.push(resultadoMega[index2]);
        }
    }
}
console.log('Você acertou', acertos.length, 'números!!');