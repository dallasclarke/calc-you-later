/*********************************************
 * YOUR CODE HERE!                           *
 ********************************************/
const calculator = require("./calculate-back-end");

 const numOne = getInput(0);
 const numTwo = getInput(1);
const op = getInput(2);





let results = calculator(numOne, op, numTwo);


console.log(results);





/******************************************
 * OUR CODE BELOW--DON'T TOUCH!           *
 *****************************************/

function getInput(i) {
  return process.argv[i + 2];
}
