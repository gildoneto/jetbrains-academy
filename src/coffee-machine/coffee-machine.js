/* eslint-disable no-case-declarations */
const EN = require('./en-US.json');
const PT = require('./pt-BR.json');
const prompt = require('prompt-sync')();

const LANGUAGE = 'Type EN to choose english:\nDigite PT se prefere português BR:';

let ASK = JSON.parse(JSON.stringify(EN));

const inventory = {
  water: 400,
  milk: 540,
  beans: 120,
  cups: 9,
  money: 550
};

const resetInventory = () => {
  inventory.water = 400;
  inventory.milk = 540;
  inventory.beans = 120;
  inventory.cups = 9;
  inventory.money = 550;
  return inventory;
};

const COFFEE = {
  1: { // espresso
    water: 250,
    milk: 0,
    beans: 16,
    price: 4
  },
  2: { // latte
    water: 350,
    milk: 75,
    beans: 20,
    price: 7
  },
  3: { // cappuccino
    water: 200,
    milk: 100,
    beans: 12,
    price: 6
  },
  back: 'back'
};

const getAnswer = () => {
  return prompt('> ');
};

const getInventory = () => {
  return inventory;
};

const arrangeInventory = (inputs) => {
  const { water, milk, beans, cups, money } = inputs;
  return `${ASK.INVENTORY.MACHINE}
${water} ${ASK.INVENTORY.WATER}
${milk} ${ASK.INVENTORY.MILK}
${beans} ${ASK.INVENTORY.BEANS}
${cups} ${ASK.INVENTORY.CUPS}
$${money} ${ASK.INVENTORY.MONEY}
`;
};

const buyOrBack = (option) => {
  if (option === 'back') {
    askAction();
  } else {
    console.log(canBuy(COFFEE[option]));
  }
};

const canBuy = (coffee) => {
  const hasWater = inventory.water >= coffee.water;
  const hasMilk = inventory.milk >= coffee.milk;
  const hasBeans = inventory.beans >= coffee.beans;
  const hasCups = inventory.cups > 0;
  if (!hasWater) {
    return ASK.RESOURCES.NOT_ENOUGH_WATER;
  }
  if (!hasMilk) {
    return ASK.RESOURCES.NOT_ENOUGH_MILK;
  }
  if (!hasBeans) {
    return ASK.RESOURCES.NOT_ENOUGH_BEANS;
  }
  if (!hasCups) {
    return ASK.RESOURCES.NOT_ENOUGH_CUPS;
  }
  buy(coffee);
  return ASK.RESOURCES.ENOUGH;
};

const buy = (coffee) => {
  const {water, milk, beans, price} = coffee;
  inventory.water -= water;
  inventory.milk -= milk;
  inventory.beans -= beans;
  inventory.money += price;
  inventory.cups--;
  return inventory;
};

const arrangeTakeMoney = (money) => {
  return ASK.TAKE_QUESTION + money; 
};

const takeMoney = () => {
  const profit = inventory.money;
  inventory.money = 0;
  return profit;
};

const fillMachine = () => {
  const fill = {};
  console.log(ASK.FILL.WATER);
  fill.water = Number(getAnswer());
  console.log(ASK.FILL.MILK);
  fill.milk = Number(getAnswer());
  console.log(ASK.FILL.BEANS);
  fill.beans = Number(getAnswer());
  console.log(ASK.FILL.CUPS);
  fill.cups = Number(getAnswer());

  inventory.water += fill.water;
  inventory.milk += fill.milk;
  inventory.beans += fill.beans;
  inventory.cups += fill.cups;
};

const print = (updatedInventory) => {
  console.log('\n' + arrangeInventory(updatedInventory));
};

const exit = (mode) => {
  if (mode === 'bye') {
    console.log(ASK.BYE);
    process.exit();
  } else {
    console.log(ASK.ERROR);
    process.exit();
  }
};

const askLanguage = () => {

  console.log(LANGUAGE);
  const language = getAnswer().toUpperCase();

  switch (language) {
    case 'PT':
      ASK = JSON.parse(JSON.stringify(PT));
      askAction();
      break;
    case 'EN':
      askAction();
      break;
    case 'SAIR':
    case 'EXIT':
      exit('bye');
      break;
    default:
      exit();
      break;
  }
};

const askAction = () => {
  console.log(ASK.DEFAULT);
  const answer = getAnswer();
  switch (answer) {
    case ASK.MODE.BUY:
      console.log(ASK.BUY.OPTIONS);
      const option = getAnswer();
      buyOrBack(option);
      askAction();
      break;
    case ASK.MODE.FILL:
      fillMachine();
      askAction();
      break;
    case ASK.MODE.TAKE:
      console.log(arrangeTakeMoney(takeMoney()));
      askAction();
      break;
    case ASK.MODE.REMAINING:
      print(getInventory());
      askAction();
      break;
    case ASK.MODE.EXIT:
      exit('bye');
      break;
    default:
      exit();
      break;
  }
};

askLanguage();

module.exports = {
  getInventory, 
  arrangeInventory,
  buy,
  takeMoney,
  resetInventory,
  canBuy,
  COFFEE
};