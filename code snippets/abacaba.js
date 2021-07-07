// https://www.reddit.com/r/dailyprogrammer/comments/njxq95/20210524_challenge_391_easy_the_abacaba_sequence/

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function abacaba(iteration) {
  // base case
  if (iteration === 1) {
    return "a";
  } else if (iteration < 1) {
    return "";
  } 
  // recursive case
  let prevIteration = abacaba((iteration - 1));
  return (prevIteration + alphabet[iteration - 1] + prevIteration);
}

// optional bonus TODO; complete the challenge in O(n) memory
