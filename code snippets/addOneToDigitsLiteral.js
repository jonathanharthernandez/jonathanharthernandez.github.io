// https://www.reddit.com/r/dailyprogrammer/comments/aphavc/20190211_challenge_375_easy_print_a_new_number_by/

function addOneToDigitsLiteral(number) {
  return number.toString()
               .split('')
               .map(x => parseInt(x))
               .map(x => x + 1)
               .join('');
}

// helper functions for optional challenge—numerical equivalents of string.length(), accessing chars, and concatenate(). numLength() deals with edge case for 0.
function numLength(number) {
  return (number === 0) ? 1 : Math.ceil(Math.log10(number + 1));
}

function getDigit(number, digit) {
  return (Math.floor(number % (10 ** digit) / (10 ** (digit - 1))));
}

function numConcatenate(number1, number2) {
  return (number1 * 10 ** numLength(number2) + number2);
}

// optional challenge
function aotdlNoCast(number) {
  var result = 0;
  for (var i = numLength(number); i > 0; i--) {
    result = numConcatenate(result, (getDigit(number,i) + 1));
  }
  return result;
}

// test cases
console.log(addOneToDigitsLiteral(998));
console.log(addOneToDigitsLiteral(12345));
console.log(addOneToDigitsLiteral(0));
console.log(aotdlNoCast(998));
console.log(aotdlNoCast(12345));
console.log(aotdlNoCast(0));
