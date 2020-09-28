const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options["repeatTimes"],
    separator = options["separator"],
    addition = String(options["addition"]),
    additionRepeatTimes = options["additionRepeatTimes"],
    additionSeparator = options["additionSeparator"],
    finalStr = '';

  if (repeatTimes == undefined) repeatTimes = 0;
  if (separator == undefined) separator = '+';
  if (addition == undefined) addition = '';
  if (additionRepeatTimes == undefined) additionRepeatTimes = 0;
  if (additionSeparator == undefined) additionSeparator = '|';

  if (!repeatTimes && !additionRepeatTimes) finalStr += str + addition

  for (let i = 0; i < repeatTimes; i++) {
    finalStr += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      j < additionRepeatTimes - 1 ? finalStr += addition + additionSeparator : finalStr += addition;
    }
    if (i < repeatTimes - 1) finalStr += separator;
  }

  return finalStr;
};
