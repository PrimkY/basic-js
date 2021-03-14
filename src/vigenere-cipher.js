const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(expression) {
    this.expression = expression;
  }
    encrypt(message, key) {
      if (message == null || key == null) throw Error();
      const firstCode = 'A'.charCodeAt();
      const latinAlphabet = /[A-Za-z]/;
      const alphabetLenght = 26;
      let counter = 0;
        message = message.toUpperCase().split('');
        key = key.toUpperCase();
      message.forEach((element, index) => {
        if (latinAlphabet.test(element)) {
          message[index] = String.fromCharCode(
            ((element.charCodeAt() - firstCode
              + (key[counter % key.length].charCodeAt() - firstCode))
              % alphabetLenght)
            + firstCode);
          counter += 1;
        }
      });
      return this.expression === false ? message.reverse().join('') : message.join('');
    }
    decrypt(message, key) {
      if (message == null || key == null) throw Error();
      const latinAlphabet = /[A-Za-z]/;
      const alphabetLenght = 26;
      const firstCode = 'A'.charCodeAt();
      let counter = 0;
        message = message.toUpperCase().split('');
        key = key.toUpperCase();
      message.forEach((element, index) => {
        if (latinAlphabet.test(element)) {
          message[index] = String.fromCharCode(
            ((element.charCodeAt() - firstCode
              + (alphabetLenght - (key[counter % key.length].charCodeAt() - firstCode)))
              % alphabetLenght)
            + firstCode);
            counter += 1;
        }
      });
      return this.expression === false ? message.reverse().join('') : message.join('');
  }
}
module.exports = VigenereCipheringMachine;
