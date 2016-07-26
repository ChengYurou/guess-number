'use strict'
const CompareNumber = require('../src/models/compare-number.js');

describe('guess-number', () => {
  it('should return 0A4B', ()=> {

      let result = CompareNumber.compare('1234', '4321');
      expect(result).toEqual('0A4B');
  });

  it('should return 1A3B', ()=> {

      let result = CompareNumber.compare('1234', '1423');
      expect(result).toEqual('1A3B');
  });

  it('should return 2A2B', ()=> {

      let result = CompareNumber.compare('1234', '1243');
      expect(result).toEqual('2A2B');
  });

  it('should return 3A1B', ()=> {

    let result = CompareNumber.compare('1234', '1374');
    expect(result).toEqual('2A1B');
  });

  it('should return 4A0B', ()=> {

    const result = CompareNumber.compare('1234', '1234');
    expect(result).toEqual('4A0B');
  });

});