const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
 const formatedBookNames = (array) => array.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

//  console.log(formatedBookNames(books));

const nameAndAge = (array) => array.map((book) => ({ age: book.releaseYear - book.author.birthYear, author: book.author.name })).sort((a, b) => a.age - b.age);

// console.log(nameAndAge(books));

const fantasyOrSF = (array) => array.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

// console.log(fantasyOrSF(books))

const oldBookOrdered = (array, year) => array.filter((book) => year - book.releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear);

// console.log(oldBookOrdered(books, 2022));

const fantasyOrScienceFictionAuthors = (array) => array.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica').map((book1) => book1.author.name).sort();

// console.log(fantasyOrScienceFictionAuthors(books));

const oldBookOrderedName = (array, year) => array.filter((book) => year - book.releaseYear > 60).map((book1) => book1.name);

// console.log(oldBookOrderedName(books, 2022));

const authorWith3DotsOnName = (array, dots) => {
  return array.find((book) => (book.author.name.split(' ').filter((word) => word.endsWith('.')).length === dots)).name;
}

// console.log(authorWith3DotsOnName(books, 3));