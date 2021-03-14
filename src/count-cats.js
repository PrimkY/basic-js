const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let array = matrix.reduce((r, e) => r.concat(e), []);
  let count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === '^^') {
      count++;
    };
  };
  return count;
};