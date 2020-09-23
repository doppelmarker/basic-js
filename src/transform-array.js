const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();

    // let newArr = arr.map(element => {
    //   if (element === "--discard-next")
    // });

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "--discard-prev") {
        if (i > 0) newArr.pop();
      } else
      if (arr[i] === "--double-prev") {
        if (i > 0) newArr.push(arr[i - 1]);
      } else
      if (arr[i] === "--discard-next") {
        if (i < arr.length - 1) {
          if (arr[i + 2] === "--discard-prev" || arr[i + 2] === "--double-prev") {
            i++;
            i++;
          }
          else i++;
        }
      } else
      if (arr[i] === "--double-next") {
        if (i < arr.length - 1) newArr.push(arr[i + 1]);
      }
      else {
        newArr.push(arr[i]);
      }
    }

    return newArr;
};
