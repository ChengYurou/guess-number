'use strict'
class CompareNumber {

  constructor(solution, input) {
    this.solution = solution;
    this.input = input;
  }

  compare() {
    let countA = 0;

    this.input.split('').forEach((number) => {
      if (this.solution.indexOf(number) === this.input.indexOf(number)) {
        countA++;
      }
    })

    return `${countA}A${4 - countA}B`
  }
}

module.exports = CompareNumber;