// https://www.reddit.com/r/dailyprogrammer/comments/8jcffg/20180514_challenge_361_easy_tally_program/

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e'];
let upperAlphabet = ['A', 'B', 'C', 'D', 'E'];

function tally(scoreString) {
  var scores = [0, 0, 0, 0, 0];
  for (var i = 0; i < scoreString.length; i++) {
    let lowerIndex = lowerAlphabet.indexOf(scoreString[i]);
    let upperIndex = upperAlphabet.indexOf(scoreString[i]);
    if (lowerIndex !== -1) {
      scores[lowerIndex]++;
    } else if (upperIndex !== -1) {
      scores[upperIndex]--;
    }
  }
  let result = `a: ${scores[0]}, b: ${scores[1]}, c: ${scores[2]}, d: ${scores[3]}, e: ${scores[4]}`;
  return result;
}


// test case
console.log(tally("EbAAdbBEaBaaBBdAccbeebaec"));
