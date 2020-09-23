const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  // calculateDepth(arr) {
  //   let counter = 0;
  //   if (Array.isArray(arr)) {
  //     counter++;
  //     arr.forEach(element => {
  //       counter += this.calculateDepth(element);
  //     });
  //   }

  //   return counter;
  // }
  
  calculateDepth(arr, depth = 1, set = []) {
    set.push(depth);
   
    arr.forEach( e =>  {
      if (Array.isArray(e)) {
        this.calculateDepth(e, depth + 1, set);
      }
    });

    return Math.max.apply(null, set);
  }
};