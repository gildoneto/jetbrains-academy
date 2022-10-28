const prompt = require('prompt-sync')();
const { askLanguage, printLogo } = require('./coffee-machine/coffee-machine');

const WELCOME = 'Welcome! Please choose one project';
const PROJECTS = 'Type 1 for Coffee Machine';

const getAnswer = () => {
  return prompt('> ');
};

const exit = () => {
  process.exit();
};

const chooseProject = () => {
  const choice = Number(getAnswer());
  
  if (choice === 1) {
    printLogo();
    askLanguage();
  } else {
    exit();
  }
};

console.log(WELCOME);
console.log(PROJECTS);

chooseProject();
