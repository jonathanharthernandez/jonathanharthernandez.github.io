// https://www.reddit.com/r/dailyprogrammer/comments/afxxca/20190114_challenge_372_easy_perfectly_balanced/

// main challenge
function balanced(string) {
  var xCount = 0;
  var yCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'x') {
      xCount++;
    } else if (string[i] === 'y') {
      yCount++;
    }
  }
  return (xCount === yCount);
}

let alphabet = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// optional challenge
function balancedBonus(string) {
  var alphabetDist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i < string.length; i++) {
    let index = alphabet.indexOf(string[i]);
    if (index !== -1) {
      alphabetDist[index]++;
    }
  }
  alphabetDist = alphabetDist.filter(number => number > 0);
  var result = true;
  if (alphabetDist.length === 0) {
    return true;
  } else {
    let checkDist = alphabetDist[0]; 
    for (var i = 0; i < alphabetDist.length - 1; i++) {
      if (alphabetDist[i] !== alphabetDist[i + 1]) {
        result = false;
      }
    }
    return result;
  } 
}

// tests cases
console.log(balanced("xxxyyy")); //=> true
console.log(balanced("yyyxxx")); //=> true
console.log(balanced("xxxyyyy")); //=> false
console.log(balanced("yyxyxxyxxyyyyxxxyxyx")); //=> true
console.log(balanced("xyxxxxyyyxyxxyxxyy")); //=> false
console.log(balanced("")); //=> true
console.log(balanced("x")); //=> false

console.log(balancedBonus("xxxyyyzzz")); //=> true
console.log(balancedBonus("abccbaabccba")); //=> true
console.log(balancedBonus("xxxyyyzzzz")); //=> false
console.log(balancedBonus("abcdefghijklmnopqrstuvwxyz")); //=> true
console.log(balancedBonus("pqq")); //=> false
console.log(balancedBonus("fdedfdeffeddefeeeefddf")); //=> false
console.log(balancedBonus("www")); //=> true
console.log(balancedBonus("x")); //=> true
console.log(balancedBonus("")); //=> true
