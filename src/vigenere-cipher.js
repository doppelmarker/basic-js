const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode) {
    if (mode !== true && mode !== undefined) this.mode = false;
    else this.mode = true;
  }

  encrypt(message, key) {
    let correctKey = '', i = 0, j = 0;
    while (correctKey.length !== message.length) {
      if (!/[a-zA-Z]/.test(message[j++])) {
        correctKey += ' ';
        continue;
      }
      correctKey += key[i++];
      if (i === key.length) i = 0;
    }
    correctKey = correctKey.toLowerCase();

    let encryptedString = message.toLowerCase().split('');
    encryptedString = encryptedString.map((letter, i) => {
      return /[a-zA-Z]/.test(letter) ? (letter.charCodeAt(0) - 97 + correctKey[i].charCodeAt(0) - 97) % 26 : letter;
    });

    encryptedString = encryptedString.map((letter) => {
      return typeof letter === "number" ? String.fromCharCode(letter + 97) : letter;
    });

    return this.mode ? encryptedString.join('').toUpperCase() : encryptedString.reverse().join('').toUpperCase();
  }

  decrypt(message, key) {
    let correctKey = '', i = 0, j = 0;
    while (correctKey.length !== message.length) {
      if (!/[a-zA-Z]/.test(message[j++])) {
        correctKey += ' ';
        continue;
      }
      correctKey += key[i++];
      if (i === key.length) i = 0;
    }
    correctKey = correctKey.toLowerCase();

    let decryptedString = message.toLowerCase().split('');
    decryptedString = decryptedString.map((letter, i) => {
      return /[a-zA-Z]/.test(letter) ? (letter.charCodeAt(0) + 26 - correctKey[i].charCodeAt(0)) % 26 : letter;
    });

    decryptedString = decryptedString.map((letter) => {
      return typeof letter === "number" ? String.fromCharCode(letter + 97) : letter;
    })

    return this.mode ? decryptedString.join('').toUpperCase() : decryptedString.reverse().join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
