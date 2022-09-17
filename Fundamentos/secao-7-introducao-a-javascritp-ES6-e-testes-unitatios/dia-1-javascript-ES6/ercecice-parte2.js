// Parte II

// const order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//       street: 'Rua das Flores',
//       number: '389',
//       apartment: '701',
//     },
//     order: {
//       pizza: {
//         marguerita: {
//           amount: 1,
//           price: 25,
//         },
//         pepperoni: {
//           amount: 1,
//           price: 20,
//         },
//       },
//       drinks: {
//         coke: {
//           type: 'Coca-Cola Zero',
//           price: 10,
//           amount: 1,
//         },
//       },
//       delivery: {
//         deliveryPerson: 'Ana Silveira',
//         price: 5,
//       },
//     },
//     payment: {
//       total: 60,
//     },
//   };
  
//   const customerInfo = (order) => {
//     // Adicione abaixo as informações necessárias.
//     const nome = order.name;
//     const entregador = order.order.delivery.deliveryPerson;
//     const phoneNumber = order.phoneNumber;
//     const street = order.address.street;
//     const streetNumber = order.address.number;
//     const apartamento = order.address.apartment;
//     console.log(`Olá ${entregador}, entrega para: ${nome},
// Telefone: ${phoneNumber}, ${street}, Nº${streetNumber}, AP: ${apartamento}`)
//   };
  
// //   customerInfo(order);
  
//   const orderModifier = (order) => {
//     // Adicione abaixo as informações necessárias.
//     order.name = 'Túlio Tófani';
//     order.payment.total = 50;
//     // console.log(order);
//     const nome = order.name;
//     const paymentValue = order.payment.total;
//     console.log(`Olá ${nome}, o total do seu pedido de
// marguerita, pepperoni e Coca-Cola Zero é R$${paymentValue},00.`)
  
//   };
  
//   orderModifier(order);

// Parte III

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addTurno = (obj, key, value) => {
    obj[key] = value
  }
  addTurno(lesson2, 'turno', 'noite');
//   console.log(lesson2);

const showKeys = (lesson) => Object.keys(lesson);
// console.log(lesson2);

const showSize = (lesson) => Object.entries(lesson).length;
// console.log(showSize(lesson2));

const valueList = (lesson) => Object.values(lesson);
// console.log(lesson2);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

const showNumeroEstudantes = (lesson) => {
    const studentes1 = lesson1.numeroEstudantes;
    const studentes2 = lesson2.numeroEstudantes;
    const studentes3 = lesson3.numeroEstudantes;
    if (lesson === allLessons) {
        const sum = studentes1 + studentes2 + studentes3;
        return `O total de alunos em todas as aulas é: ${sum}`;
    }
    return `O total de alunos nessa lesson é: ${lesson.numeroEstudantes}`;
}

// console.log(showNumeroEstudantes(lesson1));

// const getKey = (lesson, key) => {
//     const position = lesson;
//     return position[key];
// }

// console.log(getKey(lesson2, 'materia'));

// const getValueByNumber = (obj, number) => Object.values(obj)[number];

// console.log(getValueByNumber(lesson1, 2));

const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let index in arr) {
      if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));
