const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 450,
    strength: 75,
    damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => Math.floor((Math.random() * (dragon.strength - 15)) + 15);

const warriorDamage = (warrior) => {
const str = warrior.strength;
  return Math.floor((Math.random() * (str * (warrior.weaponDmg - 1))) + str);
}

let manaCost = 0;
const mageDamage = (mage) => {
  const mageMana = mage.mana;
//   let manaCost = 0;
  if (mageMana >= 15) {
    manaCost = 15;
    return Math.floor((Math.random() * (mage.intelligence)) + mage.intelligence);
  }
  manaCost = 0;
  console.log(`Não possui mana suficiente`);
  return 0;
}

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const warriorAtt = warriorDamage(warrior);
    dragon.healthPoints -= warriorAtt;
    warrior.damage = warriorAtt;
  },
  mageTurn: (mageDamage) => {
    const mageAtt = mageDamage(mage);
    dragon.healthPoints -= mageAtt;
    mage.damage = mageAtt;
    mage.mana -= manaCost;
  },
  dragonTurn: (dragonDamage) => {
    const dragonAtt = dragonDamage(dragon);
    warrior.healthPoints -= dragonAtt;
    mage.healthPoints -= dragonAtt;
    dragon.damage = dragonAtt;
  },
  turnResult: () => battleMembers,
}

const battle = () => {
  while (dragon.healthPoints > 0 && (warrior.healthPoints > 0 || mage.healthPoints > 0)) {
    gameActions.warriorTurn(warriorDamage);
    gameActions.mageTurn(mageDamage);
    gameActions.dragonTurn(dragonDamage);
    console.log(gameActions.turnResult());
  }
  if (dragon.healthPoints < 0) {
    console.log('A party vence a batalha!')
  } else {
    console.log('O dragão venceu a batalha!')
  }
  
}

battle();
