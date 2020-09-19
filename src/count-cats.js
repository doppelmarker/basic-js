const CustomError = require("../extensions/custom-error");

module.exports = function countCats(tdArray) {
  return tdArray.reduce((catsTotal, array) => {
    return catsTotal + array.reduce((catsInArray, element) => {
      return catsInArray + (element === '^^' ? 1 : 0);
    }, 0)
  }, 0);
};
