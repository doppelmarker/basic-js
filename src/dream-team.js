const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(membersArray) {
  if (!Array.isArray(membersArray)) return false;

  membersArray = membersArray.filter(member => {
    if (typeof member === "string") {
      return true;
    } else return false;
  });

  let result = membersArray.reduce((a, member) => {
      return a + member.trim()[0];
  }, "");
  
  result = result.toUpperCase().split("").sort().join("");
  return result;
};
