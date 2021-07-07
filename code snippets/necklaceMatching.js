function necklaceShift(string){
  if (string.length === 0) {
    return "";
  } else {
  return string[string.length - 1] + string.slice(0, string.length - 1);
  }
}

function sameNecklace(string1, string2) {
  if (string1 === string2) {
    return true;
  }
  var currentNecklaceWord = string1;
  for (var i = 0; i < string1.length; i++) {
    if (currentNecklaceWord === string2) {
      return true;
    } else {
      currentNecklaceWord = necklaceShift(currentNecklaceWord);
    }
  }
  return false;
}

function repeatNecklace(string) {
  var currentNecklaceWord = string;
  // necklace will always repeat at least once, when it's been shifted string.length times. The for loop leaves after string.length - 1 iterations. This also handles the empty string case.
  var repeatCount = 1;
  for (var i = 0; i < string.length - 1; i++) {
    currentNecklaceWord = necklaceShift(currentNecklaceWord);
    if (currentNecklaceWord === string) {
      repeatCount++;
    }
  }
  return repeatCount;
}

// test cases
console.log(sameNecklace("nicole", "icolen")); //=> true
console.log(sameNecklace("nicole", "lenico")); //=> true
console.log(sameNecklace("aabaaaaabaab", "aabaabaabaaa")); //=> true
console.log(sameNecklace("abc", "cba")); //=> false
console.log(sameNecklace("xxyyy", "xxxyy")); //=> false
console.log(sameNecklace("xyxxz", "xxyxz")); //=> false
console.log(sameNecklace("x", "x")); //=> true
console.log(sameNecklace("x", "xx")); //=> false
console.log(sameNecklace("x", "")); //=> false
console.log(sameNecklace("", "")); //=> true

console.log(repeatNecklace("abc")); //=> 1
console.log(repeatNecklace("abcabcabc")); //=> 3
console.log(repeatNecklace("abcabcabcx")); //=> 1
console.log(repeatNecklace("aaaaaa")); //=> 6
console.log(repeatNecklace("a")); //=> 1
console.log(repeatNecklace("")); //=> 1
