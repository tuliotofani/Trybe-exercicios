// Exercício 1 a 5
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos qudrinhos do Pato Donald'
// };
// console.log('Bem vinda,', info.personagem);

// info.recorrente = 'sim';
// console.log(info);

// for (let key in info){
    // console.log(key);
// }

// for (let key in info){
    // console.log(info[key]);
// }

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christimas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'sim'
// };

// for (let key in info){
//     if (key === 'recorrente' && info[key] === 'sim' && info2[key] === 'sim'){
//         console.log('Ambos são recorretens');
//     } else {
//         console.log(info[key], 'e', info2[key]);
//     }
// }

// Exercício 6
let leitor = {
    nome: 'Júlia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas'
        },
    ]
};
// console.log('O livro favorito de', leitor.nome, leitor.nome, 'se chama', '"',leitor.livrosFavoritos[0].titulo,'".');

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
    }
);
// console.log(leitor);

console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos.')