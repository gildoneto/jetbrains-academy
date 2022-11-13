const { habitats } = require('./animals');

const input = require('prompt-sync')();

function isValid(number) {
  if (Number(number) >= 0 || Number(number) <= 5) {
    return true;
  } else {
    return false;
  }
}

function startZoo() {
  console.log(`
Please enter the number of the habitat you would like to view:
0 - CAMEL, 1 - LION, 2 - DEER, 3 - GOOSE, 4 - BAT, 5 - RABBIT, 'exit' - CLOSE`);
  let answer = input('> ');

  if (answer === 'exit') {
    console.log('See you later!');
    process.exit();
  } else if (isValid(answer)){
    console.log(habitats[Number(answer)]);
  } else {
    console.log('Please enter a valid number!');
  }
  startZoo();
}

module.exports = { startZoo };
