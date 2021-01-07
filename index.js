var informations = require('./information.js');

const cowsay = require('cowsay');

console.log(
  cowsay.say({
    text: informations(),
    e: 'oO',
    T: 'U ',
  })
);
