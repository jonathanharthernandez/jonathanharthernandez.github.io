/* main challenge.
   Uses the first 11 digits of a UPC to determine the 12th digit.
*/
function getUPCCheckDigit(incompleteUPC) {
  var UPCArray = leadWithZeroes(incompleteUPC, 11).split('').map(x => parseInt(x, 10));
  var sum = 0;
  for (var i = 0; i < UPCArray.length; i++) {
      if (i % 2 === 0) {
        sum += UPCArray[i] * 3;
      } else {
        sum += UPCArray[i];
      }
    }
  sum = sum % 10
  return (sum === 0) ? 0 : 10 - sum;
}

// helper functions for main challenge
function numLength(number) {
  return (number === 0) ? 1 : Math.ceil(Math.log10(number + 1));
}

/* Pads a number with zeroes, if the desired length is greater than the number's current length. 
   In either case returns the number as a string.
   Requires numLength()
*/
function leadWithZeroes(number, length) {
  let lengthDiff = length - numLength (number);
  var resultString = number.toString();
  if (lengthDiff < 1) {
    return resultString;
  } else {
    var leadingString = "";
    for (var i = 0; i < lengthDiff; i++) {
      leadingString = "0".concat(leadingString);
    }
    resultString = leadingString.concat(resultString);
  }
  return resultString;
}

// test cases
console.log(getUPCCheckDigit(4210000526)); //=> 4
console.log(getUPCCheckDigit(3600029145)); //=> 2
console.log(getUPCCheckDigit(12345678910)); //=> 4
console.log(getUPCCheckDigit(1234567)); //=> 0
