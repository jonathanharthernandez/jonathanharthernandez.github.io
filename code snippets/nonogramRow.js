// https://www.reddit.com/r/dailyprogrammer/comments/o4uyzl/20210621_challenge_395_easy_nonogram_row/

function nonogramRow (binaryArray) {
  var result = [];
  var onesCount = 0;
  for (let i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] === 1) {
      onesCount++;
    } else if (binaryArray[i] === 0) {
      result.push(onesCount);
      onesCount = 0;
    } else {
      console.log('Error: binaryArray contains an element that is neither 0 nor 1.');
      return [-1];
    }
  }
  // one last push in case the array ends in a 1 (or consecutive 1's.) This happens because result is only updated on the 0 branch.
  result.push(onesCount);
  var filteredResult = result.filter(number => number > 0);
  return filteredResult;
}

// test cases
console.log(nonogramRow([])); //=> []
console.log(nonogramRow([0, 0, 0, 0, 0])); //=> []
console.log(nonogramRow([1, 1, 1, 1, 1])); //=> [5]
console.log(nonogramRow([0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1])); //=> [5, 4]
console.log(nonogramRow([1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0])); //=> [2, 1, 3]
console.log(nonogramRow([0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1])); //=> [2, 1, 3]
console.log(nonogramRow([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])); //=> [1, 1, 1, 1, 1, 1, 1, 1]
console.log(nonogramRow(["banana", "apple"])); //=> [-1]
console.log(nonogramRow([1, 1, 1, 2])); //=> [-1]
console.log(nonogramRow([1, 1, 1, -1])); //=> [-1]
console.log(nonogramRow([1, 1, 1, 0.5])); //=> [-1]
