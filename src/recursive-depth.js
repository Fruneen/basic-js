const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let array = [];
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        if (element.length === 0) element[0] = 0;
        array = array.concat(element);
      }
    });
    if (array.length === 0) return 1;
    else return 1 + this.calculateDepth(array);
  }
};
