function sayHello(){
    console.log("Hello World");
}
sayHello();

function add(a , b){
    return a + b;
}
console.log(add(2,3));

function printName(name){
    console.log(name);
}
printName("Tarun");

function square(n){
    return n * n;
}

function isEven(n){
    return n % 2 === 0;
}

function lastChar(s){
    return str[str.length - 1];
}

function firstElement(arr){
    return arr[0];
}

function lastElement(arr){
    return arr[arr.length - 1];
}

function printAll(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);    
    }
}

function lengthOfArray(arr){
    return arr.length;
}

function multiply(a , b){
    return a * b;
}

const subtact = function(a , b){
    return a - b;
}

const toUpper = (str) => {
    return str.toUpperCase();
}

const toUpperr = str => str.toUpperCase();   //arrow function with implicit return

//toUpper("hello world");

const cube = num => num ** 3;
console.log(cube(3));


function joinStrings(str1, str2){
    return str1 + " "+ str2;
}


function bigger(a, b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}

function smallest(a, b, c){
    return Math.min(a, b, c);
}

function printFiveTimes(msg){
    for(let i=0; i<5; i++){
        console.log(msg);
    }
}


function printEvenNumbers(arr){
    return arr.filter(num => num % 2 === 0);
}

function oddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

function removeFisrt(arr){
    arr.shift();
    return arr;
}

function addAStart(arr, val){
    arr.unshift(val);
    return arr;
}

function removeLast(arr){
    arr.pop();
    return arr;
}

function addEnd(arr, val){
    arr.push(val);
    return arr;
}

function removeAtIndex(arr, index){
    arr.splice(index, 6);
    return arr;
}

function hasA(str){
    return str.includes("a") || str.includes("A");
}

