let CryptoJS = require('crypto-js');

var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');

console.log(ciphertext);
