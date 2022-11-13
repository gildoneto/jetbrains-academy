const input = require('prompt-sync')();

let answer = 0;

const BOT_NAME = 'R0b0t0';
const BIRTH_YEAR = '2022';

const QUESTIONS = `Why do we use methods?
1. To repeat a statement multiple times.
2. To decompose a program into several small subroutines.
3. To determine the execution time of a program.
4. To interrupt the execution of a program.`;

function greet(bot_name, birth_year) {
  console.log('Hello! My name is ' + bot_name + '.');
  console.log('I was created in ' + birth_year + '.');
}

function remind_name() {
  console.log('Please, remind me your name.');
  let name = input('> ');
  console.log('What a great name you have, ' + name + '!');
}

function guess_age() {
  console.log('Let me guess your age.');
  console.log('Enter remainders of dividing your age by 3, 5 and 7.');

  let rem3 = Number(input());
  let rem5 = Number(input());
  let rem7 = Number(input());

  let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

  console.log('Your age is ' + age + '; that\'s a good time to start programming!');
}

function count() {
  console.log('Now I will prove to you that I can count to any number you want.');

  let number = Number(input());
  let current = 0;

  while (current <= number) {
    console.log(current + ' !');
    current += 1;
  }
}

function getAnswer() {
  answer = Number(input('> '));
}

function checkAnswer() {
  getAnswer();

  if (answer === 2) {
      end();
    } else {
      console.log('Please, try again.');
      checkAnswer();
    }
}

function test() {
    console.log('Let\'s test your programming knowledge.');
    console.log(QUESTIONS);
    checkAnswer();
}

function end() {
    console.log('Congratulations, have a nice day!');
    process.exit();
}

function startChat() {
  greet(BOT_NAME, BIRTH_YEAR);
  remind_name();
  guess_age();
  count();
  test();
  end();
}

module.exports = {
  startChat
};
