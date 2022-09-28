
const user = {
    nome: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const userJobInfo = { ...user, ...jobInfos};

  const { nome, age, nationality, profession, squad, squadInitials} = userJobInfo

  console.log(`Hi, my name is ${nome}, I'm ${age} years old I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`);