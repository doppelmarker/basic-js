const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (this.chain[position] === undefined) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let newChain = "";
    this.chain.forEach((element, i) => {
      newChain += i == 0 ? `( ${element} )` : `~~( ${element} )`;
    })

    this.chain = [];
    return newChain;
  }
};

module.exports = chainMaker;
