const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
  
const expectedResult = 20;
  
const containsA = (array) => {
   let lettersAs = 0;
   array.forEach((name) => {
      name.split('').reduce((acc, curr) => {
        if (curr === 'a' || curr === 'A') {
          lettersAs += 1;
          }
        return acc;  
      }, 0);      
  })
  return lettersAs;
}

console.log(containsA(names));

// const containsA = (array) => {
//     let lettersAs = 0;
//     array.forEach((name) => {
//        const nameSplit = name.split('') 
//        lettersAs += nameSplit.reduce((acc, curr) => {
//          if (curr === 'a' || curr === 'A') {
//            return acc + 1;
//            }
//          return acc;  
//        }, 0);      
//    });
//    return lettersAs;
//  }
 
//  console.log(containsA(names));