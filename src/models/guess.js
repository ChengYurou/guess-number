'use strict'

const CompareNumber = require('../../src/models/compare-number');
const AnswerGenerator = require('../../src/models/answer-generator');

class Guess{
  
  static guessNumber(input){
    const answer = AnswerGenerator.getRandom();
    const guessResult = CompareNumber.compare(answer,input);

    return guessResult;
  }
}

module.exports = Guess;