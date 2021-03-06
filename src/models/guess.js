'use strict'

const CompareNumber = require('../../src/models/compare-number');
const AnswerGenerator = require('../../src/models/answer-generator');

class Guess{
  
  static guessNumber(input){
    const answer = AnswerGenerator.getRandom();
    return CompareNumber.compare(answer,input);
  }
}

module.exports = Guess;