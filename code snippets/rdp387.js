// https://www.reddit.com/r/dailyprogrammer/comments/myx3wn/20210426_challenge_387_easy_caesar_cipher/

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function caesar(letter, shift) {
  return alphabet[(alphabet.indexOf(letter) + shift)%26];
}

// ciphers individual characters of input string before rejoining
function caesarCipher(stringToCipher, shift) {
  var stringArray = stringToCipher.split('');
  var cipheredArray = stringArray.map(x => caesar(x, shift));
  var joinedArray = cipheredArray.join('');
  return joinedArray;
}

// 
console.log(caesarCipher("a", 1));
console.log(caesarCipher("abcz", 1));
console.log(caesarCipher("irk", 13));
console.log(caesarCipher("fushion", 6));
console.log(caesarCipher("dailyprogrammer", 6));
console.log(caesarCipher("jgorevxumxgsskx", 20));

/*  TODO
    Code to handle bad inputs
    Optional challenge 1
    Optional challenge 2
*/
