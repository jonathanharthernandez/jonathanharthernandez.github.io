// https://www.reddit.com/r/dailyprogrammer/comments/cmd1hb/20190805_challenge_380_easy_smooshed_morse_code_1/


var morseAlphabet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function morseChar(char) {
  var index = alphabet.indexOf(char);
  if (index === -1) {
    return "";
  } else {
    return morseAlphabet[index];
  }
}

function smooshedMorse(string) {
  return string.split('')
               .map(x=> morseChar(x))
               .join('');
}

// test cases
console.log(morseChar("a")); //=> ".-"
console.log(morseChar("z")); //=> "--.."
console.log(smooshedMorse("sos")); //=> "...---..."
console.log(smooshedMorse("daily")); //=> "-...-...-..-.--"
console.log(smooshedMorse("programmer")); //=> ".--..-.-----..-..-----..-."
console.log(smooshedMorse("bits")); //=> "-.....-..."
console.log(smooshedMorse("three")); //=> "-.....-..."
