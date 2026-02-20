// Simple Todo List in JavaScript
// Run this in browser console or Node.js

const todos = [];

function addTodo(task) {
  const text = task.trim();
  if (!text) {
    console.log("Task empty nahi ho sakta.");
    return;
  }

  todos.push({
    id: Date.now(),
    text,
    done: false
  });

  console.log(`Added: "${text}"`);
}

function listTodos() {
  if (todos.length === 0) {
    console.log("Todo list abhi empty hai.");
    return;
  }

  console.log("\nYour Todos:");
  todos.forEach((todo, index) => {
    const status = todo.done ? "Done" : "Pending";
    console.log(`${index + 1}. [${status}] ${todo.text}`);
  });
}

function toggleTodo(index) {
  const i = index - 1;
  if (!todos[i]) {
    console.log("Invalid todo number.");
    return;
  }

  todos[i].done = !todos[i].done;
  console.log(`Updated: "${todos[i].text}"`);
}

function deleteTodo(index) {
  const i = index - 1;
  if (!todos[i]) {
    console.log("Invalid todo number.");
    return;
  }

  const removed = todos.splice(i, 1)[0];
  console.log(`Deleted: "${removed.text}"`);
}

// Example use:
// addTodo("JavaScript revise karna");
// addTodo("Project banana");
// listTodos();
// toggleTodo(1);
// listTodos();
// deleteTodo(2);
// listTodos();
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
  return arr;// 1 to 10 
//Question: Create two variables (full name + hobby) and print: "My name is ... and ..."
const fullname = "Tarun Raj Gaur";
const hobby = "Coding";
console.log('My name is ${fullname} and ${hobby} is my hobby.');



//Question: 45 * 2 - 10 ka result print karo.
console.log(45 * 2 - 10);




//Question: Date object se current year print karo.
let year = new Date().getFullYear();
console.log(year);



//Question: First name aur last name alag store karo, full name print karo

let firstName = "Tarun";
let lastName = "Gaur";
console.log(firstName + " " + lastName);


//Question: Ek variable banao, print karo, update karo, phir print karo

let city = "Delhi";
console.log(city);
city = "Mumbai";
console.log(city);

//Question: Custom error message console.error() se print karo.
console.error("This is a custom error message.");


//Question: Number store karo aur uska square print karo
let number = 5;
let square = number * number;
console.log(square);


//Question: Boolean variable banao aur print karo
let isStudent = true;
console.log(isStudent);


//Question: Age store karo aur print karo ki > 18 hai ya nahi
const age = 20;
if (age > 18) {
    console.log("Age is greater than 18.")
}


//Question: 100 / 0 divide karke print karo.
console.log(100 / 0);

//Question: Create a variable using let and print it

let City = "Bangalore";
console.log(City);

//Question: Declare a constant PI = 3.14 and print it
const PI = 3.14;
console.log(PI);

//Question: Create a variable, update it, and print again.
let language = "JavaScript";
console.log(language);
language = "Python";
console.log(language);

//Question: Print typeof null
console.log(typeof null);

//Question: Store "25" in a variable and print its type
let NumberString = "25";
console.log(typeof NumberString);

//Question: Create a boolean and print its type.

let isLoggedIn = false;
console.log(typeof isLoggedIn);

//Question: Create string, number, boolean and print all togethe

const name = "Alice";
const age1 = 30;
const isStudent1 = true;
console.log("Name: " + name + ", Age: " + age1 + ", Is Student: " + isStudent1);

//Question: Declare a variable without value and print its type
let data;
console.log(typeof data);  // value na dene pe variable undifined hota hai

//Question: Create a variable with undefined and print its type.

let x = undefined;
console.log(typeof x);  // undefined variable ka type bhi undefined hota hai

//Question: Create array using const, print, reassign try karo, push karo

const myArray = [1, 2, 3];
console.log("Original:", myArray);

try {
    myArray = [4, 5, 6];// Reassigning a const variable will throw an error
} catch (err) {
    console.error("Reassign error:", err.message);
}
//const variable ko reassign nahi kar sakte, lekin array ke andar values change/add (push) kar sakte ho.
//next likho, main 21–30 bhi isi format me de deta hoon.
number.push(4); // Modifying the contents of the array is allowed


//Question: Print numbers from 1 to 50 using for
for(let i = 1; i <= 50; i++){
    console.log(i);
}


//Using while, calculate sum from 1 to 10.
let i = 1;
let sum = 0;

while(i <= 10){
    sum += i; // sum = sum + i
    i++;
}
console.log("Sum from 1 to 10 is:", sum);


//Question: Use for...of to print each character of "JavaScript".
for(const char of "JavaScript"){
    console.log(char);
}

//Question: Print odd numbers from 1–20 using continue.
for(let i =1 ; i <= 20; i ++){
    if(i % 2 === 0){
        continue; // Even number hai, skip karo
    }
    console.log(i); // Odd number print karo
}

//Question: Use do...while to print 5 to 1.
let j = 5;
do{
    console.log(j);
    j--;
}while(j > 0); //do...while me body kam se kam ek baar run hoti hi hoti hai


//Calculate factorial of 5
let factorial = 1;
for(let k = 1; k <= 5; k++){
    factorial *= k; // factorial = factorial * k
}
console.log("Factorial of 5 is:", factorial);



//Question: Print numbers from 1–100 divisible by 5 using while

let m = 1;
while(m <= 100){
    if(m % 5 === 0){
        console.log(m);
    }
    m++;
}



//Question: Create object {name, age} and print keys using for...in

const person = { name: "Alice", age: 30 };
for(const key in person){
    console.log(key); // Object ke keys print karo
}  //for...in object ki keys (name, age) deta hai






//
}

// End of solutions



