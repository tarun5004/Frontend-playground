// 43 Beginner Friendly Functions (1-40)
// Each function solves one of the exercises and includes a small example call.

// 1
function printHello() {
  console.log("Hello World");
}
// example:
// printHello();

// 2
function add(a, b) {
  return a + b;
}
// example: console.log(add(2,3)); // 5

// 3
function printName(name) {
  console.log(name);
}

// 4
function square(n) {
  return n * n;
}

// 5
function isEven(n) {
  return n % 2 === 0;
}

// 6
function lastChar(s) {
  return s.slice(-1);
}

// 7
function firstElement(arr) {
  return arr[0];
}

// 8
function lastElement(arr) {
  return arr[arr.length - 1];
}

// 9
function printAll(arr) {
  arr.forEach(item => console.log(item));
}

// 10
function lengthOfArray(arr) {
  return arr.length;
}

// 11
function multiply(a, b) {
  return a * b;
}

// 12
const subtract = function(a, b) {
  return a - b;
};

// 13
const toUpper = s => s.toUpperCase();

// 14
const cube = n => n ** 3;

// 15
function joinStrings(a, b) {
  return a + b;
}

// 16
function bigger(a, b) {
  return a > b ? a : b;
}

// 17
function smallest(a, b, c) {
  return Math.min(a, b, c);
}

// 18
function printFiveTimes(msg) {
  for (let i = 0; i < 5; i++) console.log(msg);
}

// 19
function getEvens(arr) {
  return arr.filter(n => n % 2 === 0);
}

// 20
function getOdds(arr) {
  return arr.filter(n => n % 2 !== 0);
}

// 21
function removeFirst(arr) {
  arr.shift();
  return arr;
}

// 22
function addStart(arr, val) {
  arr.unshift(val);
  return arr;
}

// 23
function removeLast(arr) {
  arr.pop();
  return arr;
}

// 24
function addEnd(arr, val) {
  arr.push(val);
  return arr;
}

// 25
function removeTwoAtOne(arr) {
  arr.splice(1, 2);
  return arr;
}

// 26
function containsA(s) {
  return /a/i.test(s);
}

// 27
function countVowels(s) {
  return (s.match(/[aeiou]/gi) || []).length;
}

// 28
function reverseString(s) {
  return s.split('').reverse().join('');
}

// 29
function isEmpty(s) {
  return s.length === 0;
}

// 30
function countSpaces(s) {
  return (s.match(/ /g) || []).length;
}

// 31
function sumArray(arr) {
  return arr.reduce((sum, n) => sum + n, 0);
}

// 32
function maxFromArray(arr) {
  return Math.max(...arr);
}

// 33
function minFromArray(arr) {
  return Math.min(...arr);
}

// 34
function doubleArray(arr) {
  return arr.map(n => n * 2);
}

// 35
function unique(arr) {
  return [...new Set(arr)];
}

// 36
function positives(arr) {
  return arr.filter(n => n > 0);
}

// 37
function divisibleBy10(n) {
  return n % 10 === 0;
}

// 38
function printIndices(arr) {
  arr.forEach((_, i) => console.log(i));
}

// 39
function middleElement(arr) {
  return arr[Math.floor(arr.length / 2)];
}

// 40
function removeMiddle(arr) {
  const mid = Math.floor(arr.length / 2);
  arr.splice(mid, 1);
  return arr;
}

// End of solutions
