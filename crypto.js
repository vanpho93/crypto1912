let CryptoJS = require('crypto-js');
const secret = 'HG83249jjbdsafjkK*(*dja-==)';

var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');

// console.log(ciphertext.toString());

var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var plaintext = bytes.toString(CryptoJS.enc.Utf8);
console.log(plaintext);
