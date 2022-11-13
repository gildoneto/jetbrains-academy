const input = require('prompt-sync')();

const print = msg => console.log(msg);

const words = ['python', 'java', 'swift', 'javascript'];
const guessedWords = [];

const GAME = {
  TITLE: 'H A N G M A N',
  LOST: '\nYou lost!',
  WIN: 'You survived!',
  INPUT: 'Input a letter: ',
  GUESSED: 'You guessed the word',
  GUESSED_LETTER: 'You\'ve already guessed this letter.',
  SINGLE_LETTER: 'Please, input a single letter.',
  WRONG_LETTER: 'That letter doesn\'t appear in the word.',
  LOWERCASE: 'Please, enter a lowercase letter from the English alphabet.',
  MENU: 'Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: ',
  attempts: 8,
  word: '',
  secret: '',
  lostScore: 0,
  wonScore: 0
};

const random = (array) => {
  const max = array.length;
  return Math.floor(Math.random() * max);
};

const hideWord = (word) => {
  if (word) {
    const secret = '-'.repeat(word.length);
    return secret;
  }
};

const fillSecret = (indexes, letter) => {
  for (let i = 0; i < indexes.length; i++) {
    GAME.secret = GAME.secret.substring(0, indexes[i]) + letter + GAME.secret.substring(indexes[i] + 1);
  }
};

const getIndexesFromGameWord = (letter) => {
  const indexes = [];

  for (let index = 0; index < GAME.word.length; index++) {
    if (letter === GAME.word[index]) {
      indexes.push(index);
    }
  }

  return indexes;
};

const decreaseAttempt = () => {
  GAME.attempts -= 1;
};

const isAlreadyGuessed = (letter) => {
  return guessedWords.includes(letter.toLowerCase());
};

const isLowerCase = (string) => {
  return string == string.toLowerCase() && string != string.toUpperCase();
};

const handleLetter = (letter) => {
  guessedWords.push(letter.toLowerCase());
  const indexes = getIndexesFromGameWord(letter);
  
    if (indexes.length === 0) {
      decreaseAttempt();
      checkGame();
      getLetter(`${GAME.WRONG_LETTER} # ${GAME.attempts} attempts`);
    } else {
      fillSecret(indexes, letter);
      checkGame();
    }
};

const checkInput = (input) => {
  const inputSize = input.length;

  if (inputSize !== 1) {
    getLetter(GAME.SINGLE_LETTER);
  } else if (!isLowerCase(input)){
    getLetter(GAME.LOWERCASE);
  } else if (isAlreadyGuessed(input)){
    getLetter(GAME.GUESSED_LETTER);
  } else {
    handleLetter(input);
  }
};

const printGuessedLetters = () => {
  let count = 0;
  let guessed = '';
  
  guessedWords.forEach(letter => {
    count++;
    if (!GAME.secret.includes(letter)) {
      guessed+= letter + ' ';
    }
    if (count === 4) {
        guessed+= '\n';
        count = 0;
    }
  });
  print(`Guessed letters:\n${guessed}\n`);
};

const getLetter = (msg = undefined) => {
  console.clear();
  if (msg) {
    print(msg + '\n');
  }
  printGuessedLetters();
  print(GAME.secret );
  const letter = input(`${GAME.INPUT}`);
  checkInput(letter);
};

const checkGame = () => {

  if (!GAME.secret.includes('-')) {
    GAME.wonScore++;
    print(`${GAME.GUESSED} => ${GAME.word.toUpperCase()}!`);
    print(GAME.WIN);
    showMenu();
  } else if (GAME.attempts === 0) {
    GAME.lostScore++;
    print(GAME.LOST);
    showMenu();
  }

  getLetter();
};

const resetGame = () => {
  const index = random(words);
  GAME.word = words[index];
  GAME.secret = hideWord(GAME.word);
  GAME.attempts = 8;
  guessedWords.length = 0;
};

const showResults = () => print(`You won: ${GAME.wonScore} times.\nYou lost: ${GAME.lostScore} times.`);

const welcome = () => {
  print(`${GAME.TITLE} # ${GAME.attempts} attempts`);
};

const exit = () => process.exit();

const showMenu = () => {
  const userInput = input(GAME.MENU).toLowerCase();
  
  switch (userInput) {
    case 'play':
      resetGame();
      getLetter();
      break;
    case 'results':
      showResults();
      showMenu();
      break;
    case 'exit':
      exit();
      break;
    default:
      showMenu();
      break;
  }
};

const startHangman = () => {
  console.clear();
  welcome();
  showMenu();
};

module.exports = { startHangman };
