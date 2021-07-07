// https://www.reddit.com/r/dailyprogrammer/?count=25&after=t3_aqwvxo

// main challenge
function additivePersistence(number) {
  var summedNumber = number;
  var result = 0;
  while (numLength(summedNumber) > 1) {
    summedNumber = sumDigits(summedNumber);
    result ++;
  }
  return result;
}

// helper functions for main challenge
function sumDigits(number) {
  return number.toString()
               .split('')
               .map(x => parseInt(x, 10))
               .reduce((a,b) => a + b, 0);
}

function numLength(number) {
  return (number === 0) ? 1 : Math.ceil(Math.log10(number + 1));
}

// helper function for optional challenge
function sumDigitsNoCast(number) {
  var remainingDigits = number;
  var result = 0;
  while (remainingDigits > 0) {
    result += remainingDigits % 10;
    remainingDigits = Math.floor(remainingDigits / 10);
  }
 return result;
}

// optional challenge
function additivePersistenceNoCast(number) {
  var summedNumber = number;
  var result = 0;
  while (numLength(summedNumber) > 1) {
    summedNumber = sumDigitsNoCast(summedNumber);
    result ++;
  }
  return result;
}

// test cases
console.log(additivePersistence(1)); //=> 0
console.log(additivePersistence(13)); //=> 1
console.log(additivePersistence(1234)); //=> 2
console.log(additivePersistence(9876)); //=> 2
console.log(additivePersistence(199)); //=> 3

console.log(additivePersistenceNoCast(1)); //=> 0
console.log(additivePersistenceNoCast(13)); //=> 1
console.log(additivePersistenceNoCast(1234)); //=> 2
console.log(additivePersistenceNoCast(9876)); //=> 2
console.log(additivePersistenceNoCast(199)); //=> 3
