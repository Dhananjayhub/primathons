
let prompt = require('prompt-sync')()
let num = prompt('Enter a number : ')
const result = (num%2 ==0) ? "even" : "odd";
console.log(`The number is ${result}.`);