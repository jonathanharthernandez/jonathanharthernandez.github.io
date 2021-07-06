// https://www.reddit.com/r/dailyprogrammer/comments/myx3wn/20210426_challenge_387_easy_caesar_cipher/

var lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charFrequency = [3, -1, 1, 1, 4, 0, 0, 2, 2, -5, -2, 1, 0, 2, 3, 0, -6, 2, 2, 3, 1, -1, 0, -5, 0, -7];

// updated for optional challenge 1
function caesarChar(letter, shift) {
  if (lowerAlphabet.indexOf(letter) !== -1) {
    return lowerAlphabet[(lowerAlphabet.indexOf(letter) + shift)%26];
  } else if (upperAlphabet.indexOf(letter) !== -1) {
    return upperAlphabet[(upperAlphabet.indexOf(letter) + shift)%26];
  } else {
    return letter;
  }
}

function caesarString(string, shift) {
  return string.split('')
               .map(x => caesarChar(x, shift))
               .join('');
}

function getCharFrequency(letter) {
  let index = lowerAlphabet.indexOf(letter.toLowerCase());
  if (index !== -1) {
    return charFrequency[index];  
  } else {
    return 0;
  }
}

function getStringAvgFrequency(string) {
  if (string.length === 0) {
    return 0;
  }
  let sum = 0;
  for (var i = 0; i< string.length; i++) {
    sum += getCharFrequency(string[i]);
  }
  return sum / string.length;
}

// optional challenge 2
function decode(cipheredString) {
  // Set maxFrequency to lower than the theoretical lowest string of all z's, with average frequency of -7.
  let maxFrequency = -8;
  let optimalShift = 0;
  for (var i = 0; i < 26; i++) {
    var shiftedFrequency = getStringAvgFrequency(caesarString(cipheredString, i));
    if (shiftedFrequency > maxFrequency) {
      maxFrequency = shiftedFrequency;
      optimalShift = i;
    }  
  }
  return caesarString(cipheredString, optimalShift)
}

// console.log(decode("Zol abyulk tl puav h ulda."));
