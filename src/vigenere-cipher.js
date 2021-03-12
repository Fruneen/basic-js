const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag) {
    if (typeof flag === "undefined" || flag) this.flag = true;
    else this.flag = flag;
  }
  encrypt(source, key) {
    if (!source || !key) throw Error;
    source = source.toUpperCase();
    key = key.toUpperCase();
    let encryptedWord = new String();
    let newKey = key.split("");
    let newSource = new String();

    for (let i = 0; i < source.length; i++)
      if (source.charAt(i).match(/[A-Z]/)) newSource += source[i];

    for (let i = 0; i < newSource.length - newKey.length; i++)
      newKey.push(key.split(""));
    newKey = newKey.flat().join("").slice(0, newSource.length);

    let counter = 0;
    for (let i = 0; i < source.length; i++) {
      if (source.charAt(i).match(/[A-Z]/)) {
        encryptedWord += String.fromCharCode(
          ((newSource.charCodeAt(i - counter) +
            newKey.charCodeAt(i - counter)) %
            26) +
            65
        );
      } else {
        encryptedWord += source[i];
        counter++;
      }
    }

    if (!this.flag) {
      return encryptedWord.split("").reverse().join("");
    } else return encryptedWord;
  }

  decrypt(encrypte, key) {
    if (!encrypte || !key) throw Error;
    key = key.toUpperCase();
    let decryptedWord = new String();
    let newKey = key.split("");
    let newDecrypt = new String();

    for (let i = 0; i < encrypte.length; i++)
      if (encrypte.charAt(i).match(/[A-Z]/)) newDecrypt += encrypte[i];
    for (let i = 0; i < newDecrypt.length - newKey.length; i++)
      newKey.push(key.split(""));
    newKey = newKey.flat().join("").slice(0, newDecrypt.length);
    let counter = 0;
    for (let i = 0; i < encrypte.length; i++) {
      if (encrypte.charAt(i).match(/[A-Z]/)) {
        decryptedWord += String.fromCharCode(
          ((newDecrypt.charCodeAt(i - counter) +
            26 -
            newKey.charCodeAt(i - counter)) %
            26) +
            65
        );
      } else {
        decryptedWord += encrypte[i];
        counter++;
      }
    }
    if (!this.flag) {
      return decryptedWord.split("").reverse().join("");
    } else return decryptedWord;
  }
}

const directMachine = new VigenereCipheringMachine();
console.log(directMachine.decrypt("UWJJW XAGWLNFM VNNNDXHVWWL :)", "js"));

module.exports = VigenereCipheringMachine;
