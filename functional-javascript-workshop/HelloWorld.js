/*
*   Hello World
*
* Write a function that takes an input string and returns it uppercased
* Arguments: a string of random words
* */

var i = process.argv[2];

module.exports = function upperCaseAnInput(input) {
    var upperCasedInput = input.toUpperCase();
    return upperCasedInput;
};