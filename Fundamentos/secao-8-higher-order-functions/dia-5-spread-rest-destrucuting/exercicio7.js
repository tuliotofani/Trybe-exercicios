const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
       // measurementUnit: unidade de medida
  ];
  
  // escreva shipLength abaixo
const shipLength = (ship) => {
  return `${ship.name} is ${ship.length} ${ship.measurementUnit} long`
}

const shipLength2 = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`;
  // retorno esperado
  console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
  console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
  console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'
    // retorno esperado
    console.log(shipLength2(ships[0])); // 'Titanic is 269.1 meters long'
    console.log(shipLength2(ships[1])); // 'Queen Mary 2 is 1132 feet long'
    console.log(shipLength2(ships[2])); // 'Yamato is 256 meters long'