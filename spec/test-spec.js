'use strict'
const CompareNumber = require('../src/models/compare-number.js');

describe('guess-number', () => {
  it('should return 0A4B', ()=> {
    [
      {answer: '1234', input: '5678'},
      {answer: '1234', input: '4321'}
    ].forEach((item) => {
      let result = new CompareNumber(item.answer, item.input).compare();
      expect(result).toEqual('0A4B');
    })
  });

  it('should return 1A3B', ()=> {
    [
      {answer: '1234', input: '1678'},
      {answer: '1234', input: '1423'}
    ].forEach((item) => {
      let result = new CompareNumber(item.answer, item.input).compare();
      expect(result).toEqual('1A3B');

    })

  });

  it('should return 2A2B', ()=> {
    [
      {answer: '1234', input: '1674'},
      {answer: '1234', input: '1324'}
    ].forEach((item) => {
      let result = new CompareNumber(item.answer, item.input).compare();
      expect(result).toEqual('2A2B');
    })
  });

  it('should return 3A1B', ()=> {

    let result = new CompareNumber('1234', '1274').compare();
    expect(result).toEqual('3A1B');
  });

  it('should return 4A0B', ()=> {

    const result = new CompareNumber('1234', '1234').compare();
    expect(result).toEqual('4A0B');
  });

});