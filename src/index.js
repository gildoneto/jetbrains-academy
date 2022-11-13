const prompt = require('prompt-sync')();
const { askLanguage, printLogo } = require('./coffee-machine/index');
const { startChat } = require('./simple-chatty-bot/index');
const { startZoo } = require('./zookeeper/index');

const WELCOME = 'Welcome! Please choose one project';
const PROJECTS = `Type 1 for Simple Chatty Bot
Type 2 for Zookeeper
Type 3 for Simple Currency Converter
Type 4 for Carnival Gift Shop
Type 5 for Hangman
Type 6 for Coffee Machine`;

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
      
      break;
    case 4:
      
      break;
    case 5:
      
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

console.log(WELCOME);
console.log(PROJECTS);

chooseProject();
