// 1 to 10 
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