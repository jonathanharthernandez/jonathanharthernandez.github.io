// https://www.reddit.com/r/dailyprogrammer/comments/cdieag/20190715_challenge_379_easy_progressive_taxation/

var taxRates = [0, .10, .25, .40];
var incomeCaps = [10000, 30000, 100000, 100000000];
var taxBracketBalance = [];

for (var i = 0; i < incomeCaps.length; i++) {
  var bracketBalance = 0;
  if (i === 0) {
   bracketBalance = incomeCaps[0];
  } else {
    bracketBalance = incomeCaps[i] - incomeCaps[i-1];
  }
  taxBracketBalance.push(bracketBalance);
}

function tax(income) {
  var taxSum = 0;
  var balance = income;
  
  for (var i = 0; i < taxRates.length; i++) {
    console.log("Balance is " + balance);
    if (balance >= taxBracketBalance[i]) {
      taxSum += taxBracketBalance[i] * taxRates[i];
      balance -= taxBracketBalance[i];
    } else if (balance < taxBracketBalance[i]) {
      taxSum += balance * taxRates[i];
      break;
    }
  }
  return Math.floor(taxSum);
}

console.log(tax(0)); //=> 0
console.log(tax(10000)); //=> 0
console.log(tax(10009)); //=> 0
console.log(tax(10010)); //=> 1
console.log(tax(12000)); //=> 200
console.log(tax(56789)); //=> 8697
console.log(tax(1234567)); //=> 473326
