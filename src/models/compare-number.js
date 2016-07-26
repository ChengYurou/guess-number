'use strict'
class CompareNumber {

  static compare(solution, input) {
    
    const numbers = input.split('');
    const solutions = solution.split('');
    
    const countB = numbers.map((number,index) =>
      solutions[index]!=number && solutions.some(solution => solution===number)
      ? 1: 0).reduce((a,b) => a+b);
    
    const countA = numbers.map((number,index) =>
    solutions[index]===number?1:0).reduce((a,b)=> a+b);

    return `${countA}A${countB}B`
  }
}

module.exports = CompareNumber;
