// https://www.reddit.com/r/dailyprogrammer/comments/nucsik/20210607_challenge_393_easy_making_change/

function change(amount) {
  if (amount < 0) {
    return 0;
  }
  var denominations = [500, 100, 25, 10, 5, 1];
  var balance = amount;
  var totalCoins = 0;
  for (var i = 0; i < 6; i++) {
    var denominationCoins = Math.floor(balance / denominations[i]);
    totalCoins += denominationCoins;
    balance -= (denominations[i] * denominationCoins);
  }
  return totalCoins;
}

// test cases
console.log(change(-1)); //=> 0
console.log(change(0)); //=> 0
console.log(change(12)); //=> 3
console.log(change(468)); //=> 11
console.log(change(123456)); //=> 254
