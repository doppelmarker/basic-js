const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sample !== "string" ||
    /a-zA-Z/.test(sampleActivity) ||
    sampleActivity <= 0 ||
    sampleActivity > MODERN_ACTIVITY
  )
    return false;

  let k = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
  let years = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k;
  return Math.ceil(years);
};
