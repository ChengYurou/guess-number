'use strict'
const CompareNumber = require('../src/models/compare-number.js');
const AnswerGenerator = require('../src/models/answer-generator');
const Guess = require('../src/models/guess');

describe('guess-number', () => {

  it('should return 0A0B', ()=> {

    let result = CompareNumber.compare('1234', '5678');
    expect(result).toEqual('0A0B');
  });

  it('should return 0A4B', ()=> {

      let result = CompareNumber.compare('1234', '4321');
      expect(result).toEqual('0A4B');
  });

  it('should return 2A2B', ()=> {

      let result = CompareNumber.compare('1234', '1243');
      expect(result).toEqual('2A2B');
  });


  it('should return 2A1B', ()=> {

    const result = CompareNumber.compare('1234', '1273');
    expect(result).toEqual('2A1B');
  });

  it('should return 4A0B', ()=> {

    const result = CompareNumber.compare('1234', '1234');
    expect(result).toEqual('4A0B');
  });

});

describe('answer-generator', ()=> {
  it('return random no reapet',()=>{
    const result= AnswerGenerator.getRandom();
    const array = result.split('');
    array.forEach((item) => {
      expect(result.indexOf(item)).toEqual(result.lastIndexOf(item));
    })
  })
});

describe('guess', ()=> {
  it('', ()=> {

    spyOn(AnswerGenerator,'getRandom').and.returnValue('1234');
    let result = Guess.guessNumber('1234');
    expect(result).toEqual('4A0B');
  });
});