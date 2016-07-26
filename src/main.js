'use strict'

const scanf = require('scanf');
const Guess = require('./models/guess');

function main() {
  let times = 6;
  while (times > 0) {
    console.log(`Please input your number(${times}):`);
    let input = scanf('%s');

    const numbers = input.split('');
    const repeatCount = numbers.map(number=>
      input.indexOf(number) === input.lastIndexOf(number) ? 0 : 1).reduce((a, b) => a + b);

    if (repeatCount != 0) {
      console.log('Cannot input duplicate numbers!');
      continue;
    } else {
      times--;
      const result = Guess.guessNumber(input);

      if (result === '4A0B') {
        console.log('Congratulations!');
        break;
      } else if (times === 0) {
        console.log('Game Over');
        break;
      } else {
        console.log(result);
        continue;
      }

    }

  }
}

main()
