'use strict';

class AnswerGenerator{

  static getRandom(){
    const numbers = [];

    while(numbers.length < 4) {
      let number = Math.floor(Math.random()*10);
      if(numbers.indexOf(number) === -1) {
        numbers.push(number);
      }
    }
    
    return numbers.join('');
  }
}

module.exports = AnswerGenerator;

