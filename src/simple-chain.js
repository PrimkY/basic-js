const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`${String(value)}`);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position <= 0 || position > this.arr.length) {
      this.arr.length = 0;
      throw new Error();
    };
      this.arr.splice(position - 1, 1);
      return this;
  },  
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let resultChain = '( ' + this.arr.join(' )~~( ') + ' )';
    this.arr.length = 0;
    return resultChain;
  }
};
module.exports = chainMaker;