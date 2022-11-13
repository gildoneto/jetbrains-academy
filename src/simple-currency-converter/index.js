const input = require('prompt-sync')();

const currencies = {
  USD: 1.0,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75
};

const GREET = '\nWelcome to Currency Converter!\n';
const print = msg => console.log(msg);

const printCurrencies = () => {
  for (const currency in currencies) {
    print(`1 USD equals ${currencies[currency]} ${currency}`);
  }
};

const convertCurrency = (amount, from, to) => {
  let converted;
  if (currencies[from] === currencies[to]) {
    print(`Result: ${amount} ${from} equals ${amount.toFixed(4)} ${to}`);
  } else if (currencies[from] > currencies[to] ) {
    converted = amount / currencies[from] * currencies[to];
    print(`Result: ${amount} ${from} equals ${converted.toFixed(4)} ${to}`);
  } else {
    converted = amount / currencies[from] * currencies[to];
    print(`Result: ${amount} ${from} equals ${converted.toFixed(4)} ${to}`);
  }
};

const getAmount = (from, to) => {
  const amount = parseFloat(Number(input('Amount: ')));

  if (amount >= 1) {
    convertCurrency(amount, from, to);
  } else if (amount < 1) {
    print('The amount cannot be less than 1');
  } else {
    print('The amount has to be a number');
  }
};

const checkCurrency = (answer) => {
  switch (answer) {
    case 'JPY':
    case 'EUR':
    case 'RUB':
    case 'USD':
    case 'GBP':
      return true;
    default:
      print('Unknown currency');
      return false;
  }
};

const getCurrency = () => {
  print('What do you want to convert?');
  const from = input('From: ').toUpperCase();
  const isFromValid = checkCurrency(from);
  if(!isFromValid) { 
    getAnswer();
  }
  const to = input('To: ').toUpperCase();
  const isToValid = checkCurrency(to);
  if(!isToValid) { 
    getAnswer();
  }
  
  getAmount(from, to);
  getAnswer();
};

const getAnswer = () => {
  let answer;
  print('\nWhat do you want to do?');
  print('1 - Convert currencies 2 - Exit program');
  answer = Number(input('> '));

  if (answer === 1) {
    getCurrency();
  } else if (answer === 2) {
    print('\nHave a nice day!');
    process.exit();
  } else {
    print('\nUnknown input');
    getAnswer();
  }
};

const startConverter = () => {
  print(GREET);
  printCurrencies();
  getAnswer();
};

module.exports = { startConverter };
