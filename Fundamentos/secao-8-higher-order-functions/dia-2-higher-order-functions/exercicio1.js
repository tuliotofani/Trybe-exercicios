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
  
const authorBornInYear = (year, array) => array.find((book) => book.author.birthYear === year).author.name;
// console.log(authorBornInYear(1947, books));

const smallerBookName = (array) => {
  let bookName;
  let size = 10;
  array.forEach((book) => {
    if (book.name.length < size) {
        bookName = book.name;
        size = book.name.length;
    }
  });
  return bookName;
};

// console.log(smallerBookName(books));

const getNameBySize = (size, array) => array.find((book) => book.name.length === size); 

// console.log(getNameBySize(26, books));

// books.sort((a, b) => a.releaseYear - b.releaseYear);
const sortBookByRealeseDate = (array) => {
  return array.sort((a, b) => a.releaseYear - b.releaseYear)
}

// console.log(books);
// console.log(sortBookByRealeseDate(books));

const authorsBornInXX = (year, array) => array.every((book) => book.author.birthYear > year ? true : false);

// console.log(authorsBornInXX(1900, books))

const bookRealeaseIndec = (year1, year2, array) => {
  return array.some((book) => book.releaseYear > year1 && book.releaseYear < year2 ? true : false)
}

// console.log(bookRealeaseIndec(1980, 1989, books));

const sameBirthYear = (array) => {
  let result = false;
  array.forEach((book) => {
    array.forEach((book2) => {
      if (book.author.birthYear === book2.author.birthYear && book.author.name !== book2.author.name) {
        result = true;
      }
    });
  });
  return result;
}

// console.log(sameBirthYear(books));