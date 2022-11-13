const input = require('prompt-sync')();

const print = msg => console.log(msg);

let tickets = 0;

const LIST_MSG = 'Here\'s the list of gifts:\n';
const BYE = 'Have a nice day!';
const NAN = 'Please enter a valid number!';
const NAN_TICKETS = 'Please enter a valid number between 0 and 1000.';
const NO_GIFT = 'There is no gift with that number!';
const NOT_ENOUGH_TICKETS = 'You don\'t have enough tickets to buy this gift.';
const ZERO_GIFTS = 'Wow! There are no gifts to buy.';

const GIFTS = [
  { id: 1, title: 'Teddy Bear', cost: 10},
  { id: 2, title: 'Big Red Ball', cost: 5},
  { id: 3, title: 'Huge Bear', cost: 50},
  { id: 4, title: 'Candy', cost: 8},
  { id: 5, title: 'Stuffed Tiger', cost: 15},
  { id: 6, title: 'Stuffed Dragon', cost: 30},
  { id: 7, title: 'Skateboard', cost: 100},
  { id: 8, title: 'Toy Car', cost: 25},
  { id: 9, title: 'Basketball', cost: 20},
  { id: 10, title: 'Scary Mask', cost: 75}
];

const welcome = () => {
  print(`
WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
`);
};

const getGiftList = () => {
  if (GIFTS.length <= 0) {
    print(ZERO_GIFTS);
  } else {
    GIFTS.forEach((gift) => print(`${gift.id}- ${gift.title}, Cost: ${gift.cost} tickets`));
  }
  
};

const getTickets = () => {
  print(`Total tickets: ${tickets}`);
};

const checkTickets = (cost) => {
  if (tickets < cost) {
    print(NOT_ENOUGH_TICKETS);
    getTickets();
    start();
  } else {
    tickets -= cost;
  }
};

const getGiftInfo = (id) => {
  return GIFTS.find(e => e.id === id);
};

const removeGift = (id) => {
  const index = GIFTS.findIndex(e => e.id === id);
  GIFTS.splice(index, 1);
};

const getGift = (giftId) => {
  const { id, title, cost } = getGiftInfo(giftId);
  checkTickets(cost);
  print(`Here you go, one ${title}!`);
  removeGift(id);
  getTickets();
};

const checkGifts = () => {
  if (GIFTS.length === 0) {
    print('Wow! There are no gifts to buy.');
  } else {
    buyGift();
  }
};

const checkGiftIds = (userInput) => {
  const giftIds = [];
  GIFTS.forEach(gift => giftIds.push(gift.id));
  return giftIds.includes(userInput);
};

const isNumber = value => Number.isSafeInteger(value);

const checkBuyInput = (userInput) => {
  if (!isNumber(userInput)) {
    print(NAN);
  } else if (!checkGiftIds(userInput)) {
    print(NO_GIFT);
  } else {
    getGift(userInput);
  }
};

const buyGift = () => {
  const giftId = Number(input('Enter the number of the gift you want to get: '));
  checkBuyInput(giftId);
};

const addTickets = () => {
  const amount = Number(input('Enter the ticket amount: '));
  if (!isNumber(amount) || amount < 0 || amount > 1000) {
    print(NAN_TICKETS);
  } else {
    tickets += amount;
    getTickets();
  }
};

const checkStartInput = (userInput) => {
  if (userInput >= 1 && userInput <= 5) {
    return;
  } else {
    print(NAN);
    start();
  }
};

const exit = () => process.exit();

const start = () => {
  print(`
What do you want to do?
1 - Buy a gift 2 - Add tickets 3 - Check tickets 4 - Show gifts 5 - Exit the shop`);

  const option = Number(input('> '));
  checkStartInput(option);

  switch (option) {
    case 1:
      checkGifts();
      start();
      break;
    case 2:
      addTickets();
      start();
      break;
    case 3:
      getTickets();
      start();
      break;
    case 4:
      print(LIST_MSG);
      getGiftList();
      start();
      break;
    case 5:
      print(BYE);
      exit();
      break;
    default:
      break;
  }
};

const startCarnivalShop = () => {
  welcome();
  print(LIST_MSG);
  getGiftList();
  start();
};

module.exports = { startCarnivalShop };
