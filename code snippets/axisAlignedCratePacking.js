// https://www.reddit.com/r/dailyprogrammer/comments/bazy5j/20190408_challenge_377_easy_axisaligned_crate/

// main challenge
function fit1(containerX, containerY, boxX, boxY) {
  return (Math.floor(containerX / boxX) * Math.floor(containerY / boxY));
}

// optional challenge 1
function fit2(containerX, containerY, boxX, boxY) {
    return Math.max(fit1(containerX, containerY, boxY, boxX), fit1(containerX, containerY, boxX, boxY));
}

// optional challenge 2
function fit3Helper(containerX, containerY, containerZ, boxX, boxY, boxZ) {
  return (Math.floor(containerX / boxX) * Math.floor(containerY / boxY) * Math.floor(containerZ / boxZ));
}

function fit3 (containerX, containerY, containerZ, boxX, boxY, boxZ) {
  return Math.max(fit3Helper(containerX, containerY, containerZ, boxX, boxY, boxZ),
                  fit3Helper(containerX, containerY, containerZ, boxX, boxZ, boxY),
                  fit3Helper(containerX, containerY, containerZ, boxY, boxX, boxZ),
                  fit3Helper(containerX, containerY, containerZ, boxY, boxZ, boxX),
                  fit3Helper(containerX, containerY, containerZ, boxZ, boxX, boxY),
                  fit3Helper(containerX, containerY, containerZ, boxZ, boxY, boxX));
}

// TODO optional challenge 3: fitN

// test cases
console.log(fit1(25, 18, 6, 5)); //=> 12
console.log(fit1(10, 10, 1, 1)); //=> 100
console.log(fit1(12, 34, 5, 6)); //=> 10
console.log(fit1(12345, 678910, 1112, 1314)); //=> 5676
console.log(fit1(5, 100, 6, 1)); //=> 0

console.log(fit2(25, 18, 6, 5)); //=> 15
console.log(fit2(12, 34, 5, 6)); //=> 12
console.log(fit2(12345, 678910, 1112, 1314)); //=> 5676
console.log(fit2(5, 5, 3, 2)); //=> 2
console.log(fit2(5, 100, 6, 1)); //=> 80
console.log(fit2(5, 5, 6, 1)); //=> 0

console.log(fit3(10, 10, 10, 1, 1, 1)); //=> 1000
console.log(fit3(12, 34, 56, 7, 8, 9)); //=> 32
console.log(fit3(123, 456, 789, 10, 11, 12)); //=> 32604
console.log(fit3(1234567, 89101112, 13141516, 171819, 202122, 232425)); //=> 174648
