const prompt = require('prompt-sync')();

const { startCarnivalShop } = require('./carnival-gift-shop');
const { askLanguage, printLogo } = require('./coffee-machine/index');
const { startHangman } = require('./hangman');
const { startChat } = require('./simple-chatty-bot/index');
const { startConverter } = require('./simple-currency-converter');
const { startZoo } = require('./zookeeper/index');

const WELCOME = 'Welcome to HyperSkill\'s projects developed by @gildoneto!\nPlease choose one project\n';
const PROJECTS = `Type 1 for Simple Chatty Bot
Type 2 for Zookeeper
Type 3 for Simple Currency Converter
Type 4 for Carnival Gift Shop
Type 5 for Hangman
Type 6 for Coffee Machine\n`;

const getAnswer = () => {
  return prompt('> ');
};

const exit = () => {
  process.exit();
};

const chooseProject = () => {
  const choice = Number(getAnswer());
  
  switch (choice) {
    case 1:
      startChat();
      break;
    case 2:
      startZoo();
      break;
    case 3:
      startConverter();
      break;
    case 4:
      startCarnivalShop();
      break;
    case 5:
      startHangman();
      break;
    case 6:
      printLogo();
      askLanguage();
      break;
    default:
      exit();
      break;
  }
};

console.clear();
console.log(WELCOME);
console.log(PROJECTS);
chooseProject();
