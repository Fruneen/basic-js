const CustomError = require("../extensions/custom-error");
// USE ARRAY!!!
const chainMaker = {
  string: [],
  getLength() {
    return this.string.length;
  },
  addLink(value) {
    if(value === undefined) {
      this.string.push(' ');
      return this;
    }
    this.string.push(value);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position < this.string.length) {
      this.string.splice(position - 1, 1);
      return this;
    } else { 
      this.string = [];
      throw Error;
    }
  },
  reverseChain() {
    this.string.reverse();
    return this;
  },
  finishChain() {
    let chain = '';
    for (let i = 0; i < this.string.length; i++) {
      if (i === 0) {
        chain += '( ' + this.string[i] + ' )';
        continue;
      }
      chain += '~~( ' + this.string[i] + ' )';
    }
    this.string = [];
    return chain;
  }
};

module.exports = chainMaker;
