const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const nome = order.name;
    const entregador = order.order.delivery.deliveryPerson;
    const phoneNumber = order.phoneNumber;
    const street = order.address.street;
    const streetNumber = order.address.number;
    const apartamento = order.address.apartment;
    console.log(`Olá ${entregador}, entrega para: ${nome},
Telefone: ${phoneNumber}, ${street}, Nº${streetNumber}, AP: ${apartamento}`)
  };
  
//   customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Túlio Tófani';
    order.payment.total = 50;
    // console.log(order);
    const nome = order.name;
    const paymentValue = order.payment.total;
    console.log(`Olá ${nome}, o total do seu pedido de
marguerita, pepperoni e Coca-Cola Zero é R$${paymentValue},00.`)
  
  };
  
  orderModifier(order);