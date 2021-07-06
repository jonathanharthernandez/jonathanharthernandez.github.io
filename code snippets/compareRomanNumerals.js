// https://www.reddit.com/r/dailyprogrammer/comments/oe9qnb/20210705_challenge_397_easy_roman_numeral/

function romanToArabicDigit(romanChar) {
  switch (romanChar) {
    case 'M':
      return 1000;
      break;
     case 'D':
      return 500;
      break;
    case 'C':
      return 100;
      break;
    case 'L':
      return 50;
      break;
    case 'X':
      return 10;
      break;
    case 'V':
      return 5;
      break;
    case 'I':
      return 1;
      break;            
    default:
      console.log("Invalid roman character, expected M, D, C, L, X, V, or I.")
      return NaN;    
  }
}

function romanToArabicNumeral(romanNumeral) {
  if (romanNumeral === '') {
    console.log("Invalid roman numeral, expected only characters M, D, C, L, X, V, or I.");
    return NaN;
  }
  var splitRoman = romanNumeral.split('');
  var romanToArabicDigits = splitRoman.map(x => romanToArabicDigit(x));
  if (romanToArabicDigits.includes(NaN)) {
    console.log("Invalid roman numeral, expected only characters M, D, C, L, X, V, or I.")
    return NaN;
  }
  var arabicNumeral = 0;
  for (let i = 0; i < romanToArabicDigits.length; i++) {
    arabicNumeral += romanToArabicDigits[i];
  } 
  return arabicNumeral;
}

function compareRomanNumerals(romanOne, romanTwo) {
  return (romanToArabicNumeral(romanOne) < romanToArabicNumeral(romanTwo));
}

// main test cases
console.log(compareRomanNumerals("I", "I")); //=> false
console.log(compareRomanNumerals("I", "II")); //=> true
console.log(compareRomanNumerals("II", "I")); //=> false
console.log(compareRomanNumerals("V", "IIII")); //=> false
console.log(compareRomanNumerals("MDCLXV", "MDCLXVI")); //=> true
console.log(compareRomanNumerals("MM", "MDCCCCLXXXXVIIII")); //=> false

// helper function test cases
console.log(romanToArabicDigit('M')); //=> 1000
console.log(romanToArabicDigit('D')); //=> 500
console.log(romanToArabicDigit('C')); //=> 100
console.log(romanToArabicDigit('L')); //=> 50
console.log(romanToArabicDigit('X')); //=> 10
console.log(romanToArabicDigit('V')); //=> 5
console.log(romanToArabicDigit('I')); //=> 1

console.log(romanToArabicDigit('A')); //=> NaN
console.log(romanToArabicDigit('2')); //=> NaN
console.log(romanToArabicDigit('?')); //=> NaN
console.log(romanToArabicDigit('')); //=> NaN

console.log(romanToArabicNumeral("I")); //=> 1 
console.log(romanToArabicNumeral("II")); //=> 2
console.log(romanToArabicNumeral("V")); //=> 5 
console.log(romanToArabicNumeral("MDCLXV")); //=> 1665
console.log(romanToArabicNumeral("MDCLXVI")); //=> 1666
console.log(romanToArabicNumeral("MM")); //=> 2000
console.log(romanToArabicNumeral("MDCCCCLXXXXVIIII")); //=> 1999

console.log(romanToArabicNumeral("MDCCCCLXXXXVIIIA")); //=> NaN
console.log(romanToArabicNumeral("MDCCCCLXXXXVIII2")); //=> NaN
console.log(romanToArabicNumeral("MDCCCCLXXXXVIII?")); //=> NaN
console.log(romanToArabicNumeral('')); //=> NaN

/*  Optional challenges
      Support subtractive notation
      Check roman numeral has characters in valid order
      Check roman numeral follows conventions (e.g. characters in valid order, no more than one D, L, or V, no more than 4 C, X, or I)
      Compare roman numerals without converting to arabic first
*/
