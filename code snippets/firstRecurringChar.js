// https://www.reddit.com/r/dailyprogrammer/comments/7cnqtw/20171113_challenge_340_easy_first_recurring/

// main challenge
function firstRecurringChar(string) {
  for (var i = 0; i < string.length; i++) {
    let index = string.indexOf(string[i]);
    // indexOf() returns the index of the *first* instance of the string. so if indexOf() does not equal the current index, that means the character appears earlier in the string.
    if (index !== i) {
      return index;
    }
  }
  return -1;
}

// test cases
console.log(firstRecurringChar("IKEUNFUVFV"));
console.log(firstRecurringChar("PXLJOUDJVZGQHLBHGX"));
console.log(firstRecurringChar("*l1J?)yn%R[}9~1\"=k7]9;0[$"));
